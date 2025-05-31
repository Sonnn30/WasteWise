import React, { useState, useRef } from 'react';

export default function UploadFile() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');
  const fileInputRef = useRef(null); 

  
  const [projectTitle, setProjectTitle] = useState('');
  const [projectCategory, setProjectCategory] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const allowedTypes = ['image/png', 'image/jpeg', 'video/mp4'];

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
      setFileName(selected.name); 
      setError('');
    } else {
      setFile(null);
      setFileName('');
      setError('File type not supported. Only PNG, JPEG, or MP4 files allowed.');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    const selected = e.dataTransfer.files[0];
    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
      setFileName(selected.name);
      setError('');
    } else {
      setFile(null);
      setFileName('');
      setError('File type not supported. Only PNG, JPEG, or MP4 files allowed.');
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click(); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a valid file before uploading.');
      return;
    }

    console.log({
      file: file.name,
      title: projectTitle,
      category: projectCategory,
      description: projectDescription,
    });
    alert(`Project "${projectTitle}" with file "${file.name}" ready to be uploaded!`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 mx-auto mt-8 shadow-lg max-w-5xl">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Upload File</h3>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-2 border-dashed border-gray-300 rounded-lg p-10 mb-8 text-center bg-gray-50 flex flex-col items-center justify-center min-h-[200px]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <p className="text-gray-600 text-lg mb-2">Drag files here to add them to your repository</p>
        <p className="text-gray-600 text-md mb-4">Or</p>
        <input
          id="fileUpload"
          type="file"
          accept="image/png, image/jpeg, video/mp4"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden" 
        />
        <button
          type="button"
          onClick={triggerFileInput}
          className="bg-green-700 text-white font-semibold px-6 py-2 rounded-xl hover:bg-green-800 transition"
        >
          Choose your files
        </button>
        {fileName && <p className="mt-4 text-green-700 font-medium">Selected file: {fileName}</p>}
      </div>
      {error && <p className="mt-2 text-red-600 text-sm text-center">{error}</p>}

      <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Description</h3>
      <div className="space-y-4 mb-8">
        <div>
          <label htmlFor="projectTitle" className="block text-md font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            id="projectTitle"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500"
            placeholder="e.g., Upcycled Plastic Phone Stand"
          />
        </div>

        <div>
          <label htmlFor="projectCategory" className="block text-md font-medium text-gray-700 mb-1">Category</label>
          <input
            type="text"
            id="projectCategory"
            value={projectCategory}
            onChange={(e) => setProjectCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500"
            placeholder="e.g., Plastic"
          />
        </div>

        <div>
          <label htmlFor="projectDescription" className="block text-md font-medium text-gray-700 mb-1">Explain how you made this and what materials you used...</label>
          <textarea
            id="projectDescription"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            rows="7"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500"
            placeholder="Explain how you made this and what materials you used......"
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-green-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-800 transition text-lg"
      >
        Upload
      </button>
    </form>
  );
}