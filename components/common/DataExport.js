import { useState } from 'react';

export default function DataExport({ data, type, onExport }) {
  const [showExportModal, setShowExportModal] = useState(false);
  const [selectedFields, setSelectedFields] = useState([]);
  const [exportFormat, setExportFormat] = useState('csv');
  const [dateRange, setDateRange] = useState({
    from: '',
    to: ''
  });

  const fieldMappings = {
    contractors: {
      'personalDetails': {
        label: 'Personal Details',
        fields: [
          'firstName',
          'lastName',
          'email',
          'phoneNumber',
          'dateOfBirth'
        ]
      },
      'address': {
        label: 'Address',
        fields: [
          'street',
          'suburb',
          'state',
          'postcode'
        ]
      },
      'qualifications': {
        label: 'Qualifications',
        fields: [
          'licenses',
          'certifications'
        ]
      },
      'workRights': {
        label: 'Work Rights',
        fields: [
          'visaStatus',
          'visaExpiry'
        ]
      },
      'banking': {
        label: 'Banking Details',
        fields: [
          'accountName',
          'bsb',
          'accountNumber'
        ]
      }
    },
    clients: {
      'companyDetails': {
        label: 'Company Details',
        fields: [
          'companyName',
          'abn',
          'industry'
        ]
      },
      'contactDetails': {
        label: 'Contact Details',
        fields: [
          'primaryContact',
          'email',
          'phone'
        ]
      },
      'billing': {
        label: 'Billing',
        fields: [
          'billingAddress',
          'paymentTerms'
        ]
      }
    }
  };

  const handleExport = () => {
    onExport({
      format: exportFormat,
      fields: selectedFields,
      dateRange,
      type
    });
    setShowExportModal(false);
  };

  return (
    <>
      <button
        onClick={() => setShowExportModal(true)}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Export Data
      </button>

      {showExportModal && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

            <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
              <div className="space-y-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Export {type}</h3>

                {/* Format Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Export Format</label>
                  <select
                    value={exportFormat}
                    onChange={(e) => setExportFormat(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="csv">CSV</option>
                    <option value="xlsx">Excel (XLSX)</option>
                  </select>
                </div>

                {/* Field Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Select Fields</label>
                  <div className="mt-2 max-h-48 overflow-y-auto space-y-2">
                    {Object.entries(fieldMappings[type]).map(([group, { label, fields }]) => (
                      <div key={group} className="space-y-2">
                        <h4 className="font-medium text-gray-900">{label}</h4>
                        {fields.map(field => (
                          <label key={field} className="flex items-start">
                            <input
                              type="checkbox"
                              checked={selectedFields.includes(field)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedFields([...selectedFields, field]);
                                } else {
                                  setSelectedFields(selectedFields.filter(f => f !== field));
                                }
                              }}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <span className="ml-2 text-sm text-gray-600">{field}</span>
                          </label>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Date Range */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">From Date</label>
                    <input
                      type="date"
                      value={dateRange.from}
                      onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">To Date</label>
                    <input
                      type="date"
                      value={dateRange.to}
                      onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={handleExport}
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                  >
                    Export
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowExportModal(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}