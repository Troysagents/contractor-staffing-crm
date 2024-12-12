export async function bulkExport({ selectedItems, format, config }) {
  const chunks = [];
  const CHUNK_SIZE = 100;
  
  // Split into manageable chunks
  for (let i = 0; i < selectedItems.length; i += CHUNK_SIZE) {
    chunks.push(selectedItems.slice(i, i + CHUNK_SIZE));
  }

  // Process each data type separately if needed
  const exports = {
    contractors: [],
    clients: [],
    projects: []
  };

  // Sort items by type
  selectedItems.forEach(item => {
    if (item.type in exports) {
      exports[item.type].push(item);
    }
  });

  // Create separate sheets for each type
  const sheets = {};
  for (const [type, items] of Object.entries(exports)) {
    if (items.length > 0) {
      sheets[type] = {
        data: items,
        headers: config[type].headers,
        fileName: `${type}_export_${new Date().toISOString().split('T')[0]}`
      };
    }
  }

  // Generate files
  if (format === 'separate') {
    // Export as separate files
    Object.values(sheets).forEach(sheet => {
      generateExportFile(sheet.data, {
        ...config,
        fileName: sheet.fileName,
        headers: sheet.headers
      });
    });
  } else {
    // Export as single workbook with multiple sheets
    generateCombinedExport(sheets, config);
  }
}

// Generate a ZIP file for multiple exports
function generateCombinedExport(sheets, config) {
  const zip = new JSZip();
  const timestamp = new Date().toISOString().split('T')[0];

  Object.entries(sheets).forEach(([type, sheet]) => {
    const fileContent = generateExportContent(sheet.data, {
      ...config,
      headers: sheet.headers
    });

    zip.file(`${type}_${timestamp}.${config.format}`, fileContent);
  });

  zip.generateAsync({ type: 'blob' })
    .then(content => {
      const url = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = `bulk_export_${timestamp}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    });
}