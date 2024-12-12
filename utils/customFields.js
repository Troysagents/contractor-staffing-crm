export const customFields = {
  contractors: {
    licenses: {
      label: 'Licenses & Certifications',
      fields: ['licenseNumber', 'expiryDate', 'issuer'],
      format: (data) => {
        if (Array.isArray(data)) {
          return data.map(license => 
            `${license.type}: ${license.number} (Expires: ${license.expiry})`
          ).join('\n');
        }
        return '';
      }
    },
    skills: {
      label: 'Skills & Qualifications',
      fields: ['skillName', 'level', 'yearsExperience'],
      format: (data) => Array.isArray(data) ? data.join(', ') : data
    },
    workRights: {
      label: 'Work Rights',
      fields: ['visaStatus', 'visaExpiry', 'workEligibility'],
      format: (data) => `${data.status} ${data.expiry ? `(Expires: ${data.expiry})` : ''}`
    },
    nextOfKin: {
      label: 'Emergency Contact',
      fields: ['name', 'relationship', 'phone', 'email'],
      format: (data) => `${data.name} (${data.relationship}) - ${data.phone}`
    }
  },
  
  clients: {
    billing: {
      label: 'Billing Details',
      fields: ['billingMethod', 'terms', 'creditLimit'],
      format: (data) => `${data.method} - Terms: ${data.terms} days`
    },
    projects: {
      label: 'Active Projects',
      fields: ['projectName', 'startDate', 'endDate', 'value'],
      format: (data) => {
        if (Array.isArray(data)) {
          return data.map(project => 
            `${project.name} (${project.startDate} to ${project.endDate})`
          ).join('\n');
        }
        return '';
      }
    },
    contacts: {
      label: 'Key Contacts',
      fields: ['name', 'role', 'phone', 'email'],
      format: (data) => {
        if (Array.isArray(data)) {
          return data.map(contact => 
            `${contact.name} - ${contact.role} (${contact.phone})`
          ).join('\n');
        }
        return '';
      }
    }
  }
};

export function formatCustomFields(data, type, selectedFields) {
  const formatted = {};
  
  selectedFields.forEach(field => {
    if (customFields[type][field]) {
      formatted[customFields[type][field].label] = 
        customFields[type][field].format(data[field]);
    }
  });
  
  return formatted;
}