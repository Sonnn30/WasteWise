import React, { useState } from 'react';

export default function UploadFile() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState('');

  const allowedTypes = ['image/png', 'image/jpeg', 'video/mp4'];

  function handleFileChange(e) {
    const selected = e.target.files[0];
    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
      setError('');
      
      if (selected.type.startsWith('image/')) {
        setPreview(URL.createObjectURL(selected));
      } else {
        setPreview(null);
      }
    } else {
      setFile(null);
      setPreview(null);
      setError('File type not supported. Only PNG, JPEG, or MP4 files allowed.');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!file) {
      setError('Please select a valid file before uploading.');
      return;
    }
    
    alert(`File "${file.name}" ready to be uploaded!`);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 mx-10 mt-8 shadow-md max-w-lg">
      <label className="block mb-2 text-lg font-medium text-gray-700" htmlFor="fileUpload">
        Choose an image or video file:
      </label>
      <input
        id="fileUpload"
        type="file"
        accept="image/png, image/jpeg, video/mp4"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-green-700 file:text-white
          hover:file:bg-green-800
          cursor-pointer
          "
      />
      {error && <p className="mt-2 text-red-600">{error}</p>}

      {preview && (
        <div className="mt-4">
          <p className="mb-1 font-semibold">Preview:</p>
          <img src={preview} alt="Preview" className="max-w-full rounded-lg shadow-md" />
        </div>
      )}

      <button
        type="submit"
        className="mt-6 bg-green-700 text-white font-semibold px-6 py-2 rounded-xl hover:bg-green-800 transition"
      >
        Upload
      </button>
    </form>
  );
}