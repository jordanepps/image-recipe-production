import React, { useState } from 'react';
import './App.css';

import axios from 'axios';

import ImageUploader from './components/ImageUploader';
import ImageLink from './components/ImageLink';

function App() {
  const [files, setFiles] = useState([]);
  const [link, setLink] = useState([]);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', files[0]);

    try {
      const res = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // const { fileName, filePath } = res.data;
      console.log(res.data);
    } catch (err) {
      if (err.response.status === 500) {
        console.log(err);
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div className="App">
      <h1>Image Recipe</h1>
      <ImageUploader
        files={files}
        setFiles={setFiles}
        disabled={!link.length}
      />
      <ImageLink setLink={setLink} />
      <button onClick={handleUpload} disabled={!files.length}>
        Upload
      </button>
    </div>
  );
}

export default App;
