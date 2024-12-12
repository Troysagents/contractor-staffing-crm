export default function DriversLicense({ formData, setFormData }) {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900">Driver's License</h3>
      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">License Number</label>
          <input
            type="text"
            value={formData.driversLicense.number}
            onChange={(e) => setFormData({
              ...formData,
              driversLicense: { ...formData.driversLicense, number: e.target.value }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
          <input
            type="date"
            value={formData.driversLicense.expiryDate}
            onChange={(e) => setFormData({
              ...formData,
              driversLicense: { ...formData.driversLicense, expiryDate: e.target.value }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <select
            value={formData.driversLicense.state}
            onChange={(e) => setFormData({
              ...formData,
              driversLicense: { ...formData.driversLicense, state: e.target.value }
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
      </div>
    </div>
  );
}