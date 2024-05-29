// export async function fetchPhotos() {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/photos"
//     );
//     const photos = response.data;
//     const photoDetails = photos.map((photo) => {
//       return {
//         title: photo.title,
//         url: photo.thumbnailUrl,
//       };
//     });
//     return photoDetails;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
// }

export async function fetchPhotos() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    const photos = response.data;
    const limitedPhotos = photos.slice(0, 20);
    const photoDetails = limitedPhotos.map((photo) => {
      return {
        title: photo.title,
        url: photo.url,
      };
    });
    return photoDetails;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
