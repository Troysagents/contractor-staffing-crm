import { useState } from 'react';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [staff, setStaff] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      qualifications: ['Electrician', 'Welder'],
      experience: '5 years'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      qualifications: ['Plumber', 'Carpenter'],
      experience: '3 years'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      qualifications: ['Mechanic', 'Painter'],
      experience: '7 years'
    }
  ]);

  const handleSearch = () => {
    const filteredStaff = staff.filter((member) => {
      const nameMatch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
      const qualificationsMatch = member.qualifications.some((qual) =>
        qual.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const experienceMatch = member.experience.toLowerCase().includes(searchTerm.toLowerCase());
      return nameMatch || qualificationsMatch || experienceMatch;
    });
    setSearchResults(filteredStaff);
  };

  const handleSelect = (staff) => {
    // Add logic to notify the administrator when a client selects a staff member
    console.log('Selected staff:', staff);
  };

  return (
    <div>
      <h1>Search Staff</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name, qualifications, or experience"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {searchResults.map((staff) => (
          <div key={staff.id}>
            <h3>{staff.name}</h3>
            <p>Email: {staff.email}</p>
            <p>Qualifications: {staff.qualifications.join(', ')}</p>
            <p>Experience: {staff.experience}</p>
            <button onClick={() => handleSelect(staff)}>Select</button>
          </div>
        ))}
      </div>
    </div>
  );
}