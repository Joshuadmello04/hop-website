'use client'
import { useState } from 'react'
import {
  HoveredLink,
  Menu,
  MenuItem,
  MenuSection,
  ServiceItem,
  QuickAction
} from './ui/navbar-menu'
import { cn } from '@/lib/utils'
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
  GraduationCap,
  Handshake,
  Gift,
  Navigation,
  MenuIcon
} from 'lucide-react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

export function ChurchNavbar () {
  return (
    <div className='relative w-full flex items-center justify-center'>
      <Navbar className='top-2' />
    </div>
  )
}

function Navbar ({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div
      className={cn(
        'fixed top-4 inset-x-0 max-w-7xl mx-auto z-50 px-4',
        className
      )}
    >
      <div
        className='flex items-center justify-between 
        bg-red-600/20 backdrop-blur-xl rounded-2xl border border-red-400/30 shadow-lg
        px-6 py-3 transition-all'
      >
        {/* Logo Section */}
        <div className='flex items-center space-x-3'>
          <div className='w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg'>
            <div className='w-8 h-8 bg-white rounded-sm'></div>
          </div>
          <div className='hidden sm:block'>
            <h1 className='text-white font-bold text-lg'>House of Prayer</h1>
            <p className='text-white/70 text-xs'>Mumbai</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:block'>
          <Menu setActive={setActive}>
            {/* About */}
            <MenuItem
              setActive={setActive}
              active={active}
              item='About'
              icon={<Heart size={16} />}
            >
              <div className='grid grid-cols-1 gap-6 min-w-[300px]'>
                <MenuSection title='Our Story' icon={<BookOpen size={16} />}>
                  <HoveredLink href='/about' icon={<Users size={16} />}>
                    Our Mission & Vision
                  </HoveredLink>
                  <HoveredLink href='/history' icon={<Clock size={16} />}>
                    Church History
                  </HoveredLink>
                  <HoveredLink href='/leadership' icon={<User size={16} />}>
                    Leadership Team
                  </HoveredLink>
                  <HoveredLink href='/beliefs' icon={<Heart size={16} />}>
                    What We Believe
                  </HoveredLink>
                </MenuSection>
              </div>
            </MenuItem>

            {/* Services */}
            <MenuItem
              setActive={setActive}
              active={active}
              item='Services'
              icon={<Calendar size={16} />}
            >
              <div className='grid grid-cols-2 gap-8 min-w-[500px]'>
                <MenuSection title='Weekly Services' icon={<Clock size={16} />}>
                  <ServiceItem
                    title='Sunday Worship'
                    description='Join us every Sunday at 10:00 AM for inspiring worship and fellowship'
                    href='/sunday-service'
                    icon={<Music size={16} />}
                  />
                  <ServiceItem
                    title='Wednesday Prayer'
                    description='Mid-week prayer meeting every Wednesday at 7:00 PM'
                    href='/prayer-meeting'
                    icon={<Heart size={16} />}
                  />
                  <ServiceItem
                    title='Friday Youth'
                    description='Dynamic youth service every Friday at 7:30 PM'
                    href='/youth-service'
                    icon={<GraduationCap size={16} />}
                  />
                </MenuSection>

                <MenuSection
                  title='Special Events'
                  icon={<Calendar size={16} />}
                >
                  <HoveredLink href='/events' icon={<Calendar size={16} />}>
                    Upcoming Events
                  </HoveredLink>
                  <HoveredLink href='/conferences' icon={<Users size={16} />}>
                    Annual Conference
                  </HoveredLink>
                  <HoveredLink href='/baptism' icon={<Heart size={16} />}>
                    Baptism Services
                  </HoveredLink>
                  <HoveredLink href='/marriage' icon={<Handshake size={16} />}>
                    Wedding Services
                  </HoveredLink>
                </MenuSection>
              </div>
            </MenuItem>

            {/* Connect */}
            <MenuItem
              setActive={setActive}
              active={active}
              item='Connect'
              icon={<Phone size={16} />}
            >
              <div className='grid grid-cols-1 gap-6 min-w-[320px]'>
                <MenuSection
                  title='Get Involved'
                  icon={<Handshake size={16} />}
                >
                  <HoveredLink href='/small-groups' icon={<Users size={16} />}>
                    Join a Small Group
                  </HoveredLink>
                  <HoveredLink href='/volunteer' icon={<Handshake size={16} />}>
                    Volunteer Opportunities
                  </HoveredLink>
                  <HoveredLink href='/membership' icon={<Heart size={16} />}>
                    Church Membership
                  </HoveredLink>
                </MenuSection>

                <MenuSection title='Support' icon={<Gift size={16} />}>
                  <HoveredLink
                    href='/prayer-request'
                    icon={<Heart size={16} />}
                  >
                    Prayer Requests
                  </HoveredLink>
                  <HoveredLink href='/giving' icon={<Gift size={16} />}>
                    Online Giving
                  </HoveredLink>
                  <HoveredLink href='/contact' icon={<Phone size={16} />}>
                    Contact Us
                  </HoveredLink>
                </MenuSection>
              </div>
            </MenuItem>
          </Menu>
        </div>

        {/* Right Side Actions */}
        <div className='flex items-center space-x-3'>
          <div className='hidden md:flex items-center space-x-3'>
            <QuickAction
              title='Visit Us'
              href='https://www.google.com/maps/search/?api=1&query=Rotary%20Club%20Of%20Bombay%20West%20Gr.%20Floor%2C%20Rotary%20Club%2C%20Juhu%20Tara%20Rd%2C%20Mangelwadi%2C%20Shivaji%20Nagr%2C%20Santacruz%20(West)%2C%20Mumbai%2C%20Maharashtra%20400054%2C%20India'
              icon={<MapPin size={16} />}
            />
            <QuickAction
              title='Join Live'
              href='/live'
              icon={<Navigation size={16} />}
              variant='primary'
            />
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className='lg:hidden'>
              <Button
                variant='ghost'
                size='icon'
                className='text-white hover:bg-red-600/30 border border-red-400/30'
              >
                <MenuIcon size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side='right'
              className='w-3/4 max-w-sm bg-black/95 backdrop-blur-xl border-l border-red-600/30 text-white'
            >
              <div className='flex flex-col h-full'>
                {/* Mobile Header */}
                <div className='flex items-center justify-between p-4 border-b border-red-600/30'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-12 h-12 bg-red-600 rounded-full flex items-center justify-center'>
                      <div className='w-7 h-7 bg-white rounded-sm'></div>
                    </div>
                    <div>
                      <h2 className='font-bold text-white text-lg'>
                        House of Prayer
                      </h2>
                      <p className='text-sm text-white/70'>Mumbai</p>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className='flex-1 py-8 space-y-6 overflow-y-auto px-4'>
                  <a
                    href='/about'
                    className='flex items-center gap-3 text-lg font-semibold text-white hover:text-red-400 transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Heart size={20} className='text-red-500' />
                    About Us
                  </a>
                  <a
                    href='/services'
                    className='flex items-center gap-3 text-lg font-semibold text-white hover:text-red-400 transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Calendar size={20} className='text-red-500' />
                    Services & Events
                  </a>
                  <a
                    href='/connect'
                    className='flex items-center gap-3 text-lg font-semibold text-white hover:text-red-400 transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Phone size={20} className='text-red-500' />
                    Connect
                  </a>
                </div>

                {/* Bottom Buttons */}
                <div className='pb-6 px-4 border-t border-red-600/30 flex items-center gap-3'>
                  <a
                    href='https://www.google.com/maps/search/?api=1&query=Rotary%20Club%20Of%20Bombay%20West...'
                    className='flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/40 hover:bg-red-600/30 transition-colors text-sm font-medium'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <MapPin size={18} />
                    Visit Us
                  </a>
                  <a
                    href='/live'
                    className='flex items-center gap-2 px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors text-sm font-medium shadow-lg'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Navigation size={18} />
                    Join Live
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}
