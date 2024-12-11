import { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getStaff, createEvent, updateEvent, deleteEvent } from '../utils/staff';

const localizer = momentLocalizer(moment);

export default function CalendarPage() {
  const [events, setEvents] = useState([]);
  const [staff, setStaff] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: new Date(),
    end: new Date(new Date().getTime() + 3600000)
  });

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
    setEvents([...staffEvents]);
  }, []);

  const handleSelectEvent = (event) => {
    // Handle event selection
    console.log('Selected event:', event);
  };

  const handleSelectSlot = ({ start, end }) => {
    // Set the new event's start and end dates
    setNewEvent({ ...newEvent, start, end });
  };

  const handleEventSubmit = () => {
    // Create a new event
    const newEventData = { ...newEvent };
    const createdEvent = createEvent(newEventData);
    setEvents([...events, createdEvent]);
    setNewEvent({
      title: '',
      start: new Date(),
      end: new Date(new Date().getTime() + 3600000)
    });
  };

  const handleEventUpdate = (event) => {
    // Update an existing event
    const updatedEvent = updateEvent(event);
    const updatedEvents = events.map((e) => (e.id === event.id ? updatedEvent : e));
    setEvents(updatedEvents);
  };

  const handleEventDelete = (event) => {
    // Delete an event
    deleteEvent(event.id);
    const updatedEvents = events.filter((e) => e.id !== event.id);
    setEvents(updatedEvents);
  };

  return (
    <div>
      <h1>Calendar</h1>
      <div>
        <h2>Create New Event</h2>
        <input
          type="text"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          placeholder="Event Title"
        />
        <button onClick={handleEventSubmit}>Create Event</button>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        onEventDrop={handleEventUpdate}
        onEventResize={handleEventUpdate}
        onEventClick={handleEventDelete}
      />
    </div>
  );
}