import * as XLSX from 'xlsx';

export function exportData({ data, format, fields, dateRange, type }) {
  // Filter data based on date range if provided
  let filteredData = data;
  if (dateRange.from || dateRange.to) {
    filteredData = data.filter(item => {
      const itemDate = new Date(item.createdAt);
      const fromDate = dateRange.from ? new Date(dateRange.from) : null;
      const toDate = dateRange.to ? new Date(dateRange.to) : null;

      if (fromDate && toDate) {
        return itemDate >= fromDate && itemDate <= toDate;
      } else if (fromDate) {
        return itemDate >= fromDate;
      } else if (toDate) {
        return itemDate <= toDate;
      }
      return true;
    });
  }

  // Format data based on selected fields
  const formattedData = filteredData.map(item => {
    const formattedItem = {};
    fields.forEach(field => {
      // Handle nested fields
      if (field.includes('.')) {
        const [parent, child] = field.split('.');
        formattedItem[field] = item[parent]?.[child] || '';
      } else {
        formattedItem[field] = item[field] || '';
      }
    });
    return formattedItem;
  });

  // Export based on format
  if (format === 'csv') {
    exportToCSV(formattedData, type);
  } else if (format === 'xlsx') {
    exportToExcel(formattedData, type);
  }
}

function exportToCSV(data, type) {
  const headers = Object.keys(data[0]);
  const csvContent = [
    headers.join(','),
    ...data.map(row =>
      headers
        .map(header =>
          `"${(row[header] || '').toString().replace(/"/g, '""')}"`
        )
        .join(',')
    )
  ].join('\n');

  downloadFile(
    csvContent,
    `${type}_export_${new Date().toISOString().split('T')[0]}.csv`,
    'text/csv;charset=utf-8;'
  );
}

function exportToExcel(data, type) {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, type);
  
  // Generate buffer
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  
  downloadFile(
    new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }),
    `${type}_export_${new Date().toISOString().split('T')[0]}.xlsx`,
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  );
}

function downloadFile(content, fileName, mimeType) {
  const blob = content instanceof Blob ? content : new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}