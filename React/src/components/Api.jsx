import axios from "axios"
import { useState } from "react";
function Api() {
const [query, setQuery] = useState("");
const [images, setImages] = useState([]);
const [loading, setLoading]=useState(false);
const[searched, setSearched]=useState(false);
const searchImages = async () => {
  try {
    setLoading(true);
  
const response = await axios.get("https://api.unsplash.com/search/photos", {
    // const response = await axios.get("", {
      params: { query: query, per_page: 20 },
      headers: { Authorization: `Client-ID ${import.meta.env.VITE_Hassan}`, },
    });
    setImages(response.data.results);
    setSearched(true);
  } catch(error){
    console.log(error);
  }finally{
    setLoading(false);
  }
};
  return (
    <div>
      <h1>Image Search App </h1>
      <div>
        <input
          type="text"
          placeholder="Search images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchImages}>Search</button>
        {loading && <h3>Loading.....</h3>}
        {!loading && searched && images.length === 0 && (
  <h2>No images found.</h2>
)}
      </div>

      <div>
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