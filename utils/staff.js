export function getStaff() {
  return [
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
}