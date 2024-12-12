import { useState } from 'react';

export default function AddressSection({ formData, setFormData }) {
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [showAddressDropdown, setShowAddressDropdown] = useState(false);

  const handleAddressSearch = async (input) => {
    if (input.length > 3) {
      // Mock address suggestions - would be replaced with real API
      const mockSuggestions = [
        '123 Main St, Sydney NSW 2000',
        '123 Queen St, Melbourne VIC 3000',
        '123 King St, Brisbane QLD 4000'
      ].filter(addr => addr.toLowerCase().includes(input.toLowerCase()));
      setAddressSuggestions(mockSuggestions);
      setShowAddressDropdown(true);
    }
  };

  const handleAddressSelect = (address) => {
    const [street, location] = address.split(',');
    const [suburb, state, postcode] = location.trim().split(' ');
    
    setFormData(prev => ({
      ...prev,
      address: {
        street: street.trim(),
        suburb,
        state,
        postcode,
        country: 'Australia'
      }
    }));
    setShowAddressDropdown(false);
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900">Address</h3>
      <div className="mt-4 relative">
        <label className="block text-sm font-medium text-gray-700">Search Address</label>
        <input
          type="text"
          placeholder="Start typing to search..."
          onChange={(e) => handleAddressSearch(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {showAddressDropdown && addressSuggestions.length > 0 && (
          <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-300">
            {addressSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleAddressSelect(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Street Address</label>
          <input
            type="text"
            value={formData.address.street}
            onChange={(e) => setFormData({
              ...formData,
              address: { ...formData.address, street: e.target.value }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Suburb</label>
          <input
            type="text"
            value={formData.address.suburb}
            onChange={(e) => setFormData({
              ...formData,
              address: { ...formData.address, suburb: e.target.value }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <select
            value={formData.address.state}
            onChange={(e) => setFormData({
              ...formData,
              address: { ...formData.address, state: e.target.value }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">Select State</option>
            <option value="NSW">NSW</option>
            <option value="VIC">VIC</option>
            <option value="QLD">QLD</option>
            <option value="WA">WA</option>
            <option value="SA">SA</option>
            <option value="TAS">TAS</option>
            <option value="ACT">ACT</option>
            <option value="NT">NT</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Postcode</label>
          <input
            type="text"
            value={formData.address.postcode}
            onChange={(e) => setFormData({
              ...formData,
              address: { ...formData.address, postcode: e.target.value }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>
    </div>
  );
}