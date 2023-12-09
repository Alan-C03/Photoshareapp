
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import API from './api/pocketbase';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PhotoGallery />} />
        <Route path="/photos/:id" element={<SinglePhoto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

function PhotoGallery() {

  // Fetch photos data

  return (
    <div className="gallery">
      {photos.map(photo => (
        <Link to={`/photos/${photo.id}`} key={photo.id}>
          <img src={photo.thumbnail} />
        </Link>
      ))}
    </div>
  );
}

function SinglePhoto() {

  // Get id from params 
  // Fetch photo data

  return (
    <div className="photo">
      <h2>{title}</h2>
      <img src={fullResolutionImage} />
    </div>
  );
}