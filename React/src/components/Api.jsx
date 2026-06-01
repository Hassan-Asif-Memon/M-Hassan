import axios from "axios"
import { useState } from "react";
function Api() {
const [query, setQuery] = useState("");
const [images, setImages] = useState([]);
const searchImages = async () => {
const response = await axios.get("https://api.unsplash.com/search/photos", {
    // const response = await axios.get("", {
      params: { query: query, per_page: 20 },
      headers: { Authorization: `Client-ID ${import.meta.env.VITE_Yasir}` },
    });
    setImages(response.data.results);
  };
  return (
    <div className="container">
      <h1>Image Search App </h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchImages}>Search</button>
      </div>

      <div className="image-grid">
        {images.map((image) => (
          <div className="card" key={image.id}>
            <img src={image.urls.small} alt={image.alt_description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Api;