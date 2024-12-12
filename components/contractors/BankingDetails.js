export default function BankingDetails({ formData, setFormData }) {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900">Banking & Superannuation</h3>
      
      <div className="mt-4">
        <h4 className="text-md font-medium text-gray-800">Bank Account Details</h4>
        <div className="mt-2 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Account Name</label>
            <input
              type="text"
              value={formData.bankDetails.accountName}
              onChange={(e) => setFormData({
                ...formData,
                bankDetails: { ...formData.bankDetails, accountName: e.target.value }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">BSB</label>
            <input
              type="text"
              value={formData.bankDetails.bsb}
              onChange={(e) => setFormData({
                ...formData,
                bankDetails: { ...formData.bankDetails, bsb: e.target.value }
              })}
              maxLength="6"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Account Number</label>
            <input
              type="text"
              value={formData.bankDetails.accountNumber}
              onChange={(e) => setFormData({
                ...formData,
                bankDetails: { ...formData.bankDetails, accountNumber: e.target.value }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-md font-medium text-gray-800">Superannuation</h4>
        <div className="mt-2 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Fund Name</label>
            <input
              type="text"
              value={formData.superannuation.fundName}
              onChange={(e) => setFormData({
                ...formData,
                superannuation: { ...formData.superannuation, fundName: e.target.value }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Member Number</label>
            <input
              type="text"
              value={formData.superannuation.memberNumber}
              onChange={(e) => setFormData({
                ...formData,
                superannuation: { ...formData.superannuation, memberNumber: e.target.value }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}