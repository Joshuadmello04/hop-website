"use client"
import { cn } from "@/lib/utils"
import type React from "react"
import { useRef, useState, useEffect } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useVelocity,
  useAnimationControls,
} from "framer-motion"

export const DraggableCardBody = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()
  const [constraints, setConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  })

  // physics biatch
  const velocityX = useVelocity(mouseX)
  const velocityY = useVelocity(mouseY)

  const springConfig = {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  }

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), springConfig)

  const opacity = useSpring(useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]), springConfig)

  const glareOpacity = useSpring(useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]), springConfig)

  useEffect(() => {
    const updateConstraints = () => {
      if (typeof window !== "undefined") {
        const isMobile = window.innerWidth < 768
        const constraintMultiplier = isMobile ? 0.3 : 0.5

        setConstraints({
          top: -window.innerHeight * constraintMultiplier,
          left: -window.innerWidth * constraintMultiplier,
          right: window.innerWidth * constraintMultiplier,
          bottom: window.innerHeight * constraintMultiplier,
        })
      }
    }

    updateConstraints()

    // Add resize listener
    window.addEventListener("resize", updateConstraints)

    // Clean up
    return () => {
      window.removeEventListener("resize", updateConstraints)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    const { width, height, left, top } = cardRef.current?.getBoundingClientRect() ?? {
      width: 0,
      height: 0,
      left: 0,
      top: 0,
    }
    const centerX = left + width / 2
    const centerY = top + height / 2
    const deltaX = clientX - centerX
    const deltaY = clientY - centerY
    mouseX.set(deltaX)
    mouseY.set(deltaY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      drag
      dragConstraints={constraints}
      onDragStart={() => {
        document.body.style.cursor = "grabbing"
      }}
      onDragEnd={(event, info) => {
        document.body.style.cursor = "default"

        controls.start({
          rotateX: 0,
          rotateY: 0,
          transition: {
            type: "spring",
            ...springConfig,
          },
        })
        const currentVelocityX = velocityX.get()
        const currentVelocityY = velocityY.get()

        const velocityMagnitude = Math.sqrt(currentVelocityX * currentVelocityX + currentVelocityY * currentVelocityY)
        const bounce = Math.min(0.8, velocityMagnitude / 1000)

        animate(info.point.x, info.point.x + currentVelocityX * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        })

        animate(info.point.y, info.point.y + currentVelocityY * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        })
      }}
      style={{
        rotateX,
        rotateY,
        opacity,
        willChange: "transform",
      }}
      animate={controls}
      whileHover={{ scale: typeof window !== "undefined" && window.innerWidth < 768 ? 1.01 : 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative min-h-28 w-40 sm:min-h-32 sm:w-52 md:min-h-48 md:w-72 lg:min-h-64 lg:w-80 overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 p-3 sm:p-4 md:p-6 shadow-2xl transform-3d border border-amber-200/50 backdrop-blur-sm dark:from-amber-950/20 dark:to-orange-950/20 dark:bg-neutral-900 dark:border-amber-800/30",
        className,
      )}
    >
      {children}
      <motion.div
        style={{
          opacity: glareOpacity,
        }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-200/30 to-orange-200/30 select-none"
      />
    </motion.div>
  )
}

export const DraggableCardContainer = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div className={cn("[perspective:1500px] sm:[perspective:2000px] md:[perspective:3000px]", className)}>
      {children}
    </div>
  )
}
