let events = [
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
];

let staffData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    qualifications: ['Electrician', 'Welder'],
    experience: '5 years',
    schedule: {
      start: new Date(2023, 11, 1, 8, 0),
      end: new Date(2023, 11, 1, 17, 0)
    }
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    qualifications: ['Plumber', 'Carpenter'],
    experience: '3 years',
    schedule: {
      start: new Date(2023, 11, 3, 8, 0),
      end: new Date(2023, 11, 3, 17, 0)
    }
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    qualifications: ['Mechanic', 'Painter'],
    experience: '7 years',
    schedule: {
      start: new Date(2023, 11, 5, 8, 0),
      end: new Date(2023, 11, 5, 17, 0)
    }
  }
];

export function getStaff() {
  return staffData;
}

export function createEvent(event) {
  const newEvent = { ...event, id: events.length + 1 };
  events.push(newEvent);
  return newEvent;
}

export function updateEvent(event) {
  const index = events.findIndex((e) => e.id === event.id);
  events[index] = event;
  return event;
}

export function deleteEvent(eventId) {
  const index = events.findIndex((e) => e.id === eventId);
  events.splice(index, 1);
}