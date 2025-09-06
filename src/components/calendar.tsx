"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin } from 'lucide-react';

const UltraModernCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<ChurchEvent | null>(null);

  const churchEvents = [
    {
      id: 1,
      date: new Date(2024, 8, 1), // September 1
      title: "Sunday Service",
      time: "10:00 AM",
      location: "Main Hall",
      type: "service"
    },
    {
      id: 2,
      date: new Date(2024, 8, 6), // September 6
      title: "Prayer Meeting", 
      time: "7:00 PM",
      location: "Prayer Room",
      type: "prayer"
    },
    {
      id: 3,
      date: new Date(2024, 8, 8), // September 8
      title: "Youth Fellowship",
      time: "6:30 PM", 
      location: "Youth Center",
      type: "youth"
    },
    {
      id: 4,
      date: new Date(2024, 8, 15), // September 15
      title: "Bible Study",
      time: "7:30 PM",
      location: "Study Room", 
      type: "study"
    },
    {
      id: 5,
      date: new Date(2024, 8, 22), // September 22
      title: "Community Outreach",
      time: "9:00 AM",
      location: "Community Center",
      type: "outreach"
    },
    {
      id: 6,
      date: new Date(2024, 8, 29), // September 29
      title: "Harvest Festival",
      time: "11:00 AM", 
      location: "Main Hall",
      type: "special"
    }
  ];

  const specialEvents = [
    { title: "Upcoming Events", active: true },
    { title: "Annual Conference", active: false },
    { title: "Baptism Services", active: false }, 
    { title: "Wedding Ceremonies", active: false }
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const today = new Date();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();

  const calendarDays = [];
  
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null);
  }
  
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

interface GetEventsForDate {
    (day: number | null): ChurchEvent[];
}

const getEventsForDate: GetEventsForDate = (day) => {
    if (!day) return [];
    return churchEvents.filter((event: ChurchEvent) => {
        const eventDate = event.date;
        return eventDate.getFullYear() === currentYear &&
                     eventDate.getMonth() === currentMonth &&
                     eventDate.getDate() === day;
    });
};

interface IsTodayFn {
    (day: number | null): boolean;
}

const isToday: IsTodayFn = (day) => {
    return !!day &&
                 today.getFullYear() === currentYear &&
                 today.getMonth() === currentMonth &&
                 today.getDate() === day;
};

interface ChurchEvent {
    id: number;
    date: Date;
    title: string;
    time: string;
    location: string;
    type: string;
}

interface SpecialEvent {
    title: string;
    active: boolean;
}

const navigateMonth = (direction: number) => {
    setDate((prev: Date) => {
        const newDate = new Date(prev);
        newDate.setMonth(prev.getMonth() + direction);
        return newDate;
    });
};

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Church Calendar</h1>
          <p className="text-zinc-400">Manage your spiritual journey</p>
        </div>

        {/* Main Grid */}
        <div className="grid xl:grid-cols-4 gap-6">
          
          {/* Calendar Section - 3 columns */}
          <div className="xl:col-span-3">
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm">
              
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-white">{months[currentMonth]} {currentYear}</h2>
                  <p className="text-zinc-400 text-sm mt-1">Click dates to view events</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => navigateMonth(-1)}
                    className="p-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors border border-zinc-700"
                  >
                    <ChevronLeft className="w-5 h-5 text-zinc-300" />
                  </button>
                  <button
                    onClick={() => navigateMonth(1)}
                    className="p-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors border border-zinc-700"
                  >
                    <ChevronRight className="w-5 h-5 text-zinc-300" />
                  </button>
                </div>
              </div>

              {/* Days Header */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {daysOfWeek.map((day) => (
                  <div key={day} className="p-3 text-center">
                    <span className="text-zinc-500 text-sm font-medium uppercase tracking-wider">
                      {day}
                    </span>
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day, index) => {
                  const events = getEventsForDate(day);
                  const hasEvents = events.length > 0;

                  return (
                    <div
                      key={index}
                      className={`
                        relative aspect-square flex flex-col items-center justify-center rounded-xl cursor-pointer transition-all duration-200 group
                        ${day ? 'hover:bg-zinc-800/50' : ''}
                        ${isToday(day) ? 'bg-red-500 text-white shadow-lg shadow-red-500/25' : ''}
                        ${hasEvents && !isToday(day) ? 'bg-zinc-800/30 border border-red-500/20' : 'border border-transparent'}
                        ${!day ? 'cursor-default' : ''}
                      `}
                      onClick={() => {
                        if (hasEvents && events[0]) {
                          setSelectedEvent(events[0]);
                        }
                      }}
                    >
                      {day && (
                        <>
                          <span className={`
                            text-lg font-semibold transition-colors
                            ${isToday(day) ? 'text-white' : hasEvents ? 'text-white' : 'text-zinc-300 group-hover:text-white'}
                          `}>
                            {day}
                          </span>
                          {hasEvents && (
                            <div className="absolute bottom-2 flex gap-1">
                              {events.slice(0, 3).map((_, i) => (
                                <div key={i} className={`
                                  w-1.5 h-1.5 rounded-full
                                  ${isToday(day) ? 'bg-white' : 'bg-red-400'}
                                `}></div>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="xl:col-span-1 space-y-6">
            
            {/* Special Events */}
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Special Events</h3>
              </div>
              
              <div className="space-y-3">
                {specialEvents.map((event, index) => (
                  <div 
                    key={index}
                    className={`
                      group flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all
                      ${event.active ? 'bg-red-500/10 border border-red-500/20' : 'hover:bg-zinc-800/50 border border-transparent'}
                    `}
                  >
                    <div className={`
                      w-1.5 h-1.5 rounded-full transition-colors
                      ${event.active ? 'bg-red-500' : 'bg-zinc-600 group-hover:bg-red-400'}
                    `}></div>
                    <span className={`
                      text-sm font-medium transition-colors
                      ${event.active ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}
                    `}>
                      {event.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Today's Events */}
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-red-500" />
                <h3 className="text-lg font-bold text-white">Today</h3>
              </div>
              
              {selectedEvent ? (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-1">{selectedEvent.title}</h4>
                    <div className="flex items-center gap-2 text-zinc-400 text-sm mb-2">
                      <Clock className="w-4 h-4" />
                      <span>{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedEvent.location}</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-zinc-800">
                    <span className="inline-block px-3 py-1 bg-red-500/20 text-red-400 text-xs font-medium rounded-full border border-red-500/30">
                      {selectedEvent.type.toUpperCase()}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6">
                  <Calendar className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
                  <p className="text-zinc-500 text-sm">Select an event to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltraModernCalendar;