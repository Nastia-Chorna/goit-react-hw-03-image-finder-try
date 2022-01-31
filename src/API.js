async function fetchImages(query, page) {
  const response = await fetch(
    `https://pixabay.com/api/?key=24370055-d2ad965050e4b028a1e78f6a0&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`,
  );
  if (response.ok) {
    return await response.json();
  }
  return await Promise.reject(
    new Error(
        `Nothing was found for your ${query}. Please try again`,
        
    ),
  );
}

const ImagesAPI = {
  fetchImages,
};
export default ImagesAPI;