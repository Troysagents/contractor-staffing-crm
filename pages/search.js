import { useState } from 'react';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Add logic to search for staff members based on the searchTerm
    // and update the searchResults state
    setSearchResults([{
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      qualifications: ['Electrician', 'Welder'],
      experience: '5 years'
    }, {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      qualifications: ['Plumber', 'Carpenter'],
      experience: '3 years'
    }]);
  };

  const handleSelect = (staff) => {
    // Add logic to notify the administrator when a client selects a staff member
    console.log('Selected staff:', staff);
  };

  return (
    <div>
      <h1>Search Staff</h1>
      <form onSubmit={handleSearch}>
        <label>
          Search:
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </label>
        <button type="submit">Search</button>
      </form>
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