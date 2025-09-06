"use client";
import React, { useState } from "react";
import { 
  HoveredLink, 
  Menu, 
  MenuItem, 
  MenuSection, 
  ServiceItem, 
  QuickAction 
} from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { 
  Calendar, 
  Users, 
  MapPin, 
  Heart, 
  Phone, 
  User,
  Clock,
  BookOpen,
  Music,
  Baby,
  GraduationCap,
  Handshake,
  Gift,
  Mail,
  Navigation
} from "lucide-react";

export function ChurchNavbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div
      className={cn(
        "fixed top-6 inset-x-0 max-w-5xl mx-auto z-50 px-4",
        className
      )}
    >
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-8 h-8 bg-white rounded-sm"></div>
          </div>
          <div className="hidden md:block">
            <h1 className="text-white font-bold text-lg">House of Prayer</h1>
            <p className="text-white/70 text-xs">Mumbai</p>
          </div>
        </div>

        {/* Main Navigation */}
        <Menu setActive={setActive}>
          {/* About Us */}
          <MenuItem 
            setActive={setActive} 
            active={active} 
            item="About" 
            icon={<Heart size={16} />}
          >
            <div className="grid grid-cols-1 gap-6 min-w-[300px]">
              <MenuSection title="Our Story" icon={<BookOpen size={16} />}>
                <HoveredLink href="/about" icon={<Users size={16} />}>
                  Our Mission & Vision
                </HoveredLink>
                <HoveredLink href="/history" icon={<Clock size={16} />}>
                  Church History
                </HoveredLink>
                <HoveredLink href="/leadership" icon={<User size={16} />}>
                  Leadership Team
                </HoveredLink>
                <HoveredLink href="/beliefs" icon={<Heart size={16} />}>
                  What We Believe
                </HoveredLink>
              </MenuSection>
            </div>
          </MenuItem>

          {/* Services & Events */}
          <MenuItem 
            setActive={setActive} 
            active={active} 
            item="Services" 
            icon={<Calendar size={16} />}
          >
            <div className="grid grid-cols-2 gap-8 min-w-[500px]">
              <MenuSection title="Weekly Services" icon={<Clock size={16} />}>
                <ServiceItem
                  title="Sunday Worship"
                  description="Join us every Sunday at 10:00 AM for inspiring worship and fellowship"
                  href="/sunday-service"
                  icon={<Music size={16} />}
                />
                <ServiceItem
                  title="Wednesday Prayer"
                  description="Mid-week prayer meeting every Wednesday at 7:00 PM"
                  href="/prayer-meeting"
                  icon={<Heart size={16} />}
                />
                <ServiceItem
                  title="Friday Youth"
                  description="Dynamic youth service every Friday at 7:30 PM"
                  href="/youth-service"
                  icon={<GraduationCap size={16} />}
                />
              </MenuSection>
              
              <MenuSection title="Special Events" icon={<Calendar size={16} />}>
                <HoveredLink href="/events" icon={<Calendar size={16} />}>
                  Upcoming Events
                </HoveredLink>
                <HoveredLink href="/conferences" icon={<Users size={16} />}>
                  Annual Conference
                </HoveredLink>
                <HoveredLink href="/baptism" icon={<Heart size={16} />}>
                  Baptism Services
                </HoveredLink>
                <HoveredLink href="/marriage" icon={<Handshake size={16} />}>
                  Wedding Services
                </HoveredLink>
              </MenuSection>
            </div>
          </MenuItem>

          {/* Ministries */}
          <MenuItem 
            setActive={setActive} 
            active={active} 
            item="Ministries" 
            icon={<Users size={16} />}
          >
            <div className="grid grid-cols-2 gap-8 min-w-[480px]">
              <MenuSection title="Age Groups" icon={<Users size={16} />}>
                <ServiceItem
                  title="Children's Ministry"
                  description="Fun, engaging programs for kids ages 3-12"
                  href="/children"
                  icon={<Baby size={16} />}
                />
                <ServiceItem
                  title="Youth Ministry"
                  description="Empowering teenagers to grow in faith and purpose"
                  href="/youth"
                  icon={<GraduationCap size={16} />}
                />
                <ServiceItem
                  title="Young Adults"
                  description="Community for college students and young professionals"
                  href="/young-adults"
                  icon={<Users size={16} />}
                />
              </MenuSection>
              
              <MenuSection title="Special Ministries" icon={<Heart size={16} />}>
                <HoveredLink href="/worship-team" icon={<Music size={16} />}>
                  Worship Ministry
                </HoveredLink>
                <HoveredLink href="/outreach" icon={<Handshake size={16} />}>
                  Community Outreach
                </HoveredLink>
                <HoveredLink href="/womens-ministry" icon={<Heart size={16} />}>
                  Women's Ministry
                </HoveredLink>
                <HoveredLink href="/mens-ministry" icon={<Users size={16} />}>
                  Men's Ministry
                </HoveredLink>
              </MenuSection>
            </div>
          </MenuItem>

          {/* Connect */}
          <MenuItem 
            setActive={setActive} 
            active={active} 
            item="Connect" 
            icon={<Phone size={16} />}
          >
            <div className="grid grid-cols-1 gap-6 min-w-[320px]">
              <MenuSection title="Get Involved" icon={<Handshake size={16} />}>
                <HoveredLink href="/small-groups" icon={<Users size={16} />}>
                  Join a Small Group
                </HoveredLink>
                <HoveredLink href="/volunteer" icon={<Handshake size={16} />}>
                  Volunteer Opportunities
                </HoveredLink>
                <HoveredLink href="/membership" icon={<Heart size={16} />}>
                  Church Membership
                </HoveredLink>
              </MenuSection>
              
              <MenuSection title="Support" icon={<Gift size={16} />}>
                <HoveredLink href="/prayer-request" icon={<Heart size={16} />}>
                  Prayer Requests
                </HoveredLink>
                <HoveredLink href="/giving" icon={<Gift size={16} />}>
                  Online Giving
                </HoveredLink>
                <HoveredLink href="/contact" icon={<Phone size={16} />}>
                  Contact Us
                </HoveredLink>
              </MenuSection>
            </div>
          </MenuItem>
        </Menu>

        {/* Quick Actions */}
        <div className="flex items-center space-x-3">
          <QuickAction
            title="Visit Us"
            href="https://www.google.com/maps/search/?api=1&query=Rotary%20Club%20Of%20Bombay%20West%20Gr.%20Floor%2C%20Rotary%20Club%2C%20Juhu%20Tara%20Rd%2C%20Mangelwadi%2C%20Shivaji%20Nagr%2C%20Santacruz%20(West)%2C%20Mumbai%2C%20Maharashtra%20400054%2C%20India"
            icon={<MapPin size={16} />}
          />
          <QuickAction
            title="Join Live"
            href="/live"
            icon={<Navigation size={16} />}
            variant="primary"
          />
          
          {/* Admin Login (Hidden by default) */}
          <div className="hidden">
            <QuickAction
              title="Admin"
              href="/admin"
              icon={<User size={16} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}