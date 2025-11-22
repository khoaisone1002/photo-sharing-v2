const BASE_URL = "https://pqjpzf-4000.csb.app"; // backend của bạn

function fetchModel(url) {
  return fetch(BASE_URL + url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error("fetchModel error:", error);
      throw error;
    });
}

export default fetchModel;
