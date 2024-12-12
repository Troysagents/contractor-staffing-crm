import { useState } from 'react';

export default function AdvancedFilters({ type, onApplyFilters }) {
  const [filters, setFilters] = useState({
    status: 'all',
    location: 'all',
    searchTerm: '',
    customFields: {}
  });

  const filterOptions = {
    contractors: {
      status: [
        { value: 'all', label: 'All Statuses' },
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
        { value: 'pending', label: 'Pending Verification' }
      ],
      locations: [
        { value: 'all', label: 'All Locations' },
        { value: 'nsw', label: 'NSW' },
        { value: 'vic', label: 'VIC' },
        { value: 'qld', label: 'QLD' },
        { value: 'wa', label: 'WA' },
        { value: 'sa', label: 'SA' },
        { value: 'tas', label: 'TAS' },
        { value: 'nt', label: 'NT' },
        { value: 'act', label: 'ACT' }
      ],
      customFields: [
        { key: 'licenseValid', label: 'Valid License', type: 'boolean' },
        { key: 'visaValid', label: 'Valid Visa/Work Rights', type: 'boolean' },
        { key: 'qualificationType', label: 'Qualification Type', type: 'select', 
          options: ['All', 'Trade', 'Professional', 'Technical'] }
      ]
    },
    clients: {
      status: [
        { value: 'all', label: 'All Statuses' },
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
        { value: 'lead', label: 'Lead' }
      ],
      locations: [
        { value: 'all', label: 'All Locations' },
        { value: 'nsw', label: 'NSW' },
        { value: 'vic', label: 'VIC' },
        { value: 'qld', label: 'QLD' },
        { value: 'wa', label: 'WA' },
        { value: 'sa', label: 'SA' },
        { value: 'tas', label: 'TAS' },
        { value: 'nt', label: 'NT' },
        { value: 'act', label: 'ACT' }
      ],
      customFields: [
        { key: 'industry', label: 'Industry', type: 'select',
          options: ['All', 'Construction', 'Mining', 'Technology', 'Healthcare'] },
        { key: 'contractValue', label: 'Contract Value', type: 'range' },
        { key: 'activeProjects', label: 'Has Active Projects', type: 'boolean' }
      ]
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleCustomFieldChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      customFields: {
        ...prev.customFields,
        [key]: value
      }
    }));
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Status Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {filterOptions[type].status.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <select
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {filterOptions[type].locations.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Search Term */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Search</label>
          <input
            type="text"
            value={filters.searchTerm}
            onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
            placeholder="Search by name, email..."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Custom Fields */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filterOptions[type].customFields.map(field => (
          <div key={field.key}>
            <label className="block text-sm font-medium text-gray-700">{field.label}</label>
            {field.type === 'boolean' ? (
              <select
                value={filters.customFields[field.key] || ''}
                onChange={(e) => handleCustomFieldChange(field.key, e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">All</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            ) : field.type === 'select' ? (
              <select
                value={filters.customFields[field.key] || ''}
                onChange={(e) => handleCustomFieldChange(field.key, e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                {field.options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : field.type === 'range' ? (
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.customFields[`${field.key}Min`] || ''}
                  onChange={(e) => handleCustomFieldChange(`${field.key}Min`, e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.customFields[`${field.key}Max`] || ''}
                  onChange={(e) => handleCustomFieldChange(`${field.key}Max`, e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => onApplyFilters(filters)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}