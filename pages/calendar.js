import { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getStaff } from '../utils/staff';

const localizer = momentLocalizer(moment);

export default function CalendarPage() {
  const [events, setEvents] = useState([]);
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    // Fetch staff data
    const fetchedStaff = getStaff();
    setStaff(fetchedStaff);

    // Convert staff data to calendar events
    const staffEvents = fetchedStaff.map((member) => ({
      id: member.id,
      title: member.name,
      start: new Date(member.schedule.start),
      end: new Date(member.schedule.end),
      staff: member
    }));
    setEvents(staffEvents);
  }, []);

  const handleSelectEvent = (event) => {
    console.log('Selected event:', event);
  };

  const handleSelectSlot = ({ start, end }) => {
    // Add logic to create a new event
    const newEvent = {
      id: events.length + 1,
      title: 'New Event',
      start: new Date(start),
      end: new Date(end)
    };
    setEvents([...events, newEvent]);
  };

  return (
    <div>
      <h1>Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
}