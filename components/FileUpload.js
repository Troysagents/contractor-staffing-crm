import { useState, useCallback } from 'react';

export default function FileUpload({ onFileUpload }) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      if (file.type === 'application/pdf' || file.name.endsWith('.doc') || file.name.endsWith('.docx')) {
        onFileUpload(file);
      } else {
        alert('Please upload a PDF, DOC, or DOCX file');
      }
    }
  }, [onFileUpload]);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type === 'application/pdf' || file.name.endsWith('.doc') || file.name.endsWith('.docx')) {
        onFileUpload(file);
      } else {
        alert('Please upload a PDF, DOC, or DOCX file');
      }
    }
  };

  return (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md 
        ${isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'} 
        hover:border-indigo-500 transition-colors`}
    >
      <div className="space-y-1 text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex text-sm text-gray-600">
          <label className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500">
            <span>Upload a resume</span>
            <input
              type="file"
              className="sr-only"
              accept=".pdf,.doc,.docx"
              onChange={handleFileSelect}
            />
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs text-gray-500">PDF, DOC up to 10MB</p>
      </div>
    </div>
  );
}