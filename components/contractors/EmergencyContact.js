export default function EmergencyContact({ formData, setFormData }) {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900">Emergency Contact / Next of Kin</h3>
      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={formData.emergencyContact.name}
            onChange={(e) => setFormData({
              ...formData,
              emergencyContact: { ...formData.emergencyContact, name: e.target.value }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Relationship</label>
          <input
            type="text"
            value={formData.emergencyContact.relationship}
            onChange={(e) => setFormData({
              ...formData,
              emergencyContact: { ...formData.emergencyContact, relationship: e.target.value }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            value={formData.emergencyContact.phoneNumber}
            onChange={(e) => setFormData({
              ...formData,
              emergencyContact: { ...formData.emergencyContact, phoneNumber: e.target.value }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={formData.emergencyContact.email}
            onChange={(e) => setFormData({
              ...formData,
              emergencyContact: { ...formData.emergencyContact, email: e.target.value }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>
    </div>
  );
}