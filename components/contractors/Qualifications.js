export default function Qualifications({ formData, setFormData }) {
  const addQualification = () => {
    setFormData(prev => ({
      ...prev,
      qualifications: [
        ...prev.qualifications,
        {
          title: '',
          issuer: '',
          issueDate: '',
          expiryDate: '',
          licenseNumber: ''
        }
      ]
    }));
  };

  const removeQualification = (index) => {
    setFormData(prev => ({
      ...prev,
      qualifications: prev.qualifications.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Qualifications & Licenses</h3>
        <button
          type="button"
          onClick={addQualification}
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Add Qualification
        </button>
      </div>

      {formData.qualifications.map((qual, index) => (
        <div key={index} className="p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={qual.title}
                onChange={(e) => {
                  const newQuals = [...formData.qualifications];
                  newQuals[index].title = e.target.value;
                  setFormData({ ...formData, qualifications: newQuals });
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Issuer</label>
              <input
                type="text"
                value={qual.issuer}
                onChange={(e) => {
                  const newQuals = [...formData.qualifications];
                  newQuals[index].issuer = e.target.value;
                  setFormData({ ...formData, qualifications: newQuals });
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">License Number</label>
              <input
                type="text"
                value={qual.licenseNumber}
                onChange={(e) => {
                  const newQuals = [...formData.qualifications];
                  newQuals[index].licenseNumber = e.target.value;
                  setFormData({ ...formData, qualifications: newQuals });
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
              <input
                type="date"
                value={qual.expiryDate}
                onChange={(e) => {
                  const newQuals = [...formData.qualifications];
                  newQuals[index].expiryDate = e.target.value;
                  setFormData({ ...formData, qualifications: newQuals });
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div className="mt-2 flex justify-end">
            <button
              type="button"
              onClick={() => removeQualification(index)}
              className="text-sm text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}