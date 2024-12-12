export function exportToExcel(contractors) {
  // Format data for Excel
  const excelData = contractors.map(contractor => ({
    'First Name': contractor.firstName,
    'Last Name': contractor.lastName,
    'Email': contractor.email,
    'Phone': contractor.phoneNumber,
    'Date of Birth': contractor.dateOfBirth,
    'Address': `${contractor.address.street}, ${contractor.address.suburb} ${contractor.address.state} ${contractor.address.postcode}`,
    'Drivers License': contractor.driversLicense.number,
    'License Expiry': contractor.driversLicense.expiryDate,
    'License State': contractor.driversLicense.state,
    'Emergency Contact': contractor.emergencyContact.name,
    'Emergency Relationship': contractor.emergencyContact.relationship,
    'Emergency Phone': contractor.emergencyContact.phoneNumber,
    'Emergency Email': contractor.emergencyContact.email,
    'Work Rights Status': contractor.workRights.visaStatus,
    'Visa Expiry': contractor.workRights.visaExpiryDate,
    'Bank Account Name': contractor.bankDetails.accountName,
    'BSB': contractor.bankDetails.bsb,
    'Account Number': contractor.bankDetails.accountNumber,
    'Super Fund': contractor.superannuation.fundName,
    'Super Member Number': contractor.superannuation.memberNumber,
    'Status': contractor.status,
    'Qualifications': contractor.qualifications.map(q => 
      `${q.title} (${q.licenseNumber}) - Expires: ${q.expiryDate}`
    ).join('; ')
  }));

  // Convert to CSV string
  const headers = Object.keys(excelData[0]);
  const csvContent = [
    headers.join(','),
    ...excelData.map(row => headers.map(header => 
      `"${(row[header] || '').toString().replace(/"/g, '""')}"`
    ).join(','))
  ].join('\n');

  // Create and download file
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', 'contractors.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}