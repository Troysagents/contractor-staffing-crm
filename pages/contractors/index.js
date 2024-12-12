import { useState } from 'react';
import FileUpload from '../../components/FileUpload';

export default function Contractors() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [contractors, setContractors] = useState([]);

  const [newContractor, setNewContractor] = useState({
    name: '',
    skills: '',
    contact: '',
    status: 'Active',
    resume: null
  });

  const handleFileUpload = (file) => {
    setNewContractor(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleAddContractor = () => {
    const contractorData = {
      ...newContractor,
      id: Date.now(),
      resumeName: newContractor.resume ? newContractor.resume.name : null
    };
    setContractors([...contractors, contractorData]);
    setNewContractor({ name: '', skills: '', contact: '', status: 'Active', resume: null });
    setShowAddModal(false);
  };

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Contractors</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage your contractor workforce and their assignments.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Add Contractor
          </button>
        </div>
      </div>

      {/* Contractors Table */}
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Contact</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Skills</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Resume</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {contractors.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="px-3 py-4 text-sm text-gray-500 text-center">
                        No contractors added yet. Click "Add Contractor" to get started.
                      </td>
                    </tr>
                  ) : (
                    contractors.map((contractor) => (
                      <tr key={contractor.id}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                          {contractor.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {contractor.contact}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {contractor.skills}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {contractor.resumeName ? (
                            <span className="text-indigo-600">{contractor.resumeName}</span>
                          ) : (
                            'No resume'
                          )}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${contractor.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {contractor.status}
                          </span>
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <button className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Add Contractor Modal */}
      {showAddModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setShowAddModal(false)} />

            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Add New Contractor</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      value={newContractor.name}
                      onChange={(e) => setNewContractor({ ...newContractor, name: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Contact</label>
                    <input
                      type="text"
                      value={newContractor.contact}
                      onChange={(e) => setNewContractor({ ...newContractor, contact: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Skills</label>
                    <input
                      type="text"
                      value={newContractor.skills}
                      onChange={(e) => setNewContractor({ ...newContractor, skills: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="e.g., Plumbing, Electrical, Carpentry"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Resume</label>
                    <FileUpload onFileUpload={handleFileUpload} />
                    {newContractor.resume && (
                      <p className="mt-2 text-sm text-gray-500">
                        Selected: {newContractor.resume.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="button"
                  onClick={handleAddContractor}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}