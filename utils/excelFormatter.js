export function formatExcelWorkbook(workbook, data, type) {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  
  // Set column widths
  const cols = [];
  Object.keys(data[0]).forEach(key => {
    cols.push({
      wch: Math.max(
        key.length,
        ...data.map(row => String(row[key] || '').length)
      )
    });
  });
  worksheet['!cols'] = cols;

  // Add header styling
  const headerStyle = {
    font: { bold: true, color: { rgb: 'FFFFFF' } },
    fill: { fgColor: { rgb: '4F46E5' } },
    alignment: { horizontal: 'center' }
  };

  // Add cell styling
  const cellStyle = {
    alignment: { wrapText: true, vertical: 'top' },
    border: {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
      left: { style: 'thin' },
      right: { style: 'thin' }
    }
  };

  // Add conditional formatting
  const conditions = {
    contractors: {
      'Status': {
        'Active': { font: { color: { rgb: '16A34A' } } },
        'Inactive': { font: { color: { rgb: 'DC2626' } } }
      },
      'License Expiry': (value) => {
        const date = new Date(value);
        const now = new Date();
        const days = (date - now) / (1000 * 60 * 60 * 24);
        if (days < 30) return { font: { color: { rgb: 'DC2626' } } };
        if (days < 90) return { font: { color: { rgb: 'D97706' } } };
        return {};
      }
    },
    clients: {
      'Status': {
        'Active': { font: { color: { rgb: '16A34A' } } },
        'Lead': { font: { color: { rgb: 'D97706' } } }
      },
      'Contract Value': (value) => {
        const amount = parseFloat(value);
        if (amount > 100000) return { font: { color: { rgb: '16A34A' } } };
        return {};
      }
    }
  };

  return {
    workbook,
    styles: { headerStyle, cellStyle },
    conditions: conditions[type] || {}
  };
}