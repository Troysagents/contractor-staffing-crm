import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export default function CalendarPage() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'John Doe Interview',
      start: new Date(2023, 11, 1, 10, 0),
      end: new Date(2023, 11, 1, 11, 0),
      staff: 'John Doe'
    },
    {
      id: 2,
      title: 'Jane Smith Onsite',
      start: new Date(2023, 11, 3, 8, 0),
      end: new Date(2023, 11, 3, 17, 0),
      staff: 'Jane Smith'
    }
  ]);

  const handleSelectEvent = (event) => {
    console.log('Selected event:', event);
  };

  const handleSelectSlot = ({ start, end }) => {
    // Add logic to create a new event
    const newEvent = {
      id: events.length + 1,
      title: 'New Event',
      start,
      end
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