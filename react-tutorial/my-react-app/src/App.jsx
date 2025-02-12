import React, { useState } from "react";
import "./App.css";

function App() {
  const[images, setImages]=useState([]);
  const[imageURL, setimageURL]=useState("");
  return (

    <div className="App">
      <header className="App-header">
        <h1>Mood Board</h1>
      </header>
      <div className="form">
        <input type="text"
        value={imageURL}
        onChange={(e) => setimageURL(e.target.value)}
        />

        <button onClick={()=>handleAddImage()}>Add Image</button>
      </div>

      <div className="mood-board">
        {images.map((image, index) => (
          <div key={index} className="mood-item">
            <img src={image} alt="mood" />
            <button onClick={() => handleRemoveImage(index)}>Remove</button>
            <div></div>
          </div>
        ))}
      </div>
    </div>
    
    

  );
}

function handleAddImage(){
  if (imageURL.trim() !== "") {
    const newImages = [...images, imageURL];
    setImages(newImages);
    setImages("");
  }
}

const handleRemoveImage = (index) => {
  const newImages = images.filter((_, i) => i !== index);
  setImages(newImages);
}

export default App;
