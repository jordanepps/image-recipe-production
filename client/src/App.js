import React, { useState } from 'react';
import './App.css';

import axios from 'axios';

import ImageUploader from './components/ImageUploader';
import ImageLink from './components/ImageLink';

function App() {
  const [files, setFiles] = useState([]);
  const [link, setLink] = useState('');
  const [error, setError] = useState(null);

  const createFileFormData = files => {
    const formData = new FormData();
    formData.append('file', files[0]);
    return formData;
  };

  const createLinkPostObj = link => ({ link });

  const handleUpload = async () => {
    if (!files.length && !link.length) {
      setError('Please provide an image');
      return;
    }

    //check if link is valid

    const postData = !files.length
      ? createLinkPostObj(link)
      : createFileFormData(files);

    try {
      const res = await axios.post('/api/upload', postData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
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
      <ImageUploader files={files} setFiles={setFiles} />
      <ImageLink setLink={setLink} disabled={!!files.length} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default App;
