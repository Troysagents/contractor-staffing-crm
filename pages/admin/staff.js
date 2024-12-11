import { useState } from 'react';
import { extractStaffInfo } from '../utils/staff';

export default function StaffManagement() {
  const [staff, setStaff] = useState([]);
  const [newStaff, setNewStaff] = useState({
    name: '',
    email: '',
    qualifications: '',
    experience: ''
  });
  const [cvFile, setCvFile] = useState(null);

  const handleInputChange = (e) => {
    setNewStaff({ ...newStaff, [e.target.name]: e.target.value });
  };

  const handleCvUpload = (e) => {
    setCvFile(e.target.files[0]);
  };

  const handleAddStaff = () => {
    if (cvFile) {
      const staffInfo = extractStaffInfo(cvFile);
      setStaff([...staff, { ...staffInfo, ...newStaff }]);
    } else {
      setStaff([...staff, newStaff]);
    }
    setNewStaff({
      name: '',
      email: '',
      qualifications: '',
      experience: ''
    });
    setCvFile(null);
  };

  const handleDeleteStaff = (index) => {
    const updatedStaff = [...staff];
    updatedStaff.splice(index, 1);
    setStaff(updatedStaff);
  };

  return (
    <div>
      <h1>Staff Management</h1>
      <div>
        <h2>Add New Staff</h2>
        <input type="text" name="name" value={newStaff.name} onChange={handleInputChange} placeholder="Name" />
        <input type="email" name="email" value={newStaff.email} onChange={handleInputChange} placeholder="Email" />
        <input type="text" name="qualifications" value={newStaff.qualifications} onChange={handleInputChange} placeholder="Qualifications" />
        <input type="text" name="experience" value={newStaff.experience} onChange={handleInputChange} placeholder="Experience" />
        <input type="file" onChange={handleCvUpload} />
        <button onClick={handleAddStaff}>Add</button>
      </div>
      <div>
        <h2>Staff List</h2>
        {staff.map((member, index) => (
          <div key={index}>
            <h3>{member.name}</h3>
            <p>Email: {member.email}</p>
            <p>Qualifications: {member.qualifications}</p>
            <p>Experience: {member.experience}</p>
            <button onClick={() => handleDeleteStaff(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}