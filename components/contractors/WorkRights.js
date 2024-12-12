export default function WorkRights({ formData, setFormData }) {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900">Work Rights / Visa Status</h3>
      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            value={formData.workRights.visaStatus}
            onChange={(e) => setFormData({
              ...formData,
              workRights: { ...formData.workRights, visaStatus: e.target.value }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="Citizen">Australian Citizen</option>
            <option value="PR">Permanent Resident</option>
            <option value="WorkVisa">Work Visa</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {formData.workRights.visaStatus !== 'Citizen' && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Visa Expiry Date</label>
            <input
              type="date"
              value={formData.workRights.visaExpiryDate}
              onChange={(e) => setFormData({
                ...formData,
                workRights: { ...formData.workRights, visaExpiryDate: e.target.value }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">Work Rights Verification</label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) => setFormData({
              ...formData,
              workRights: { ...formData.workRights, verificationDoc: e.target.files[0] }
            })}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </div>
      </div>
    </div>
  );
}