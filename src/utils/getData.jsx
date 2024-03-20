import axios from "axios";

// when we subbing to site for the API,automaticly will sub to baseURL

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

const options = {
  headers: {
    "X-RapidAPI-Key": "99443c7fa8mshfc16044f109f8ddp1ab3f8jsn9e4cbbd0582b",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};

//will use url which we toke like param to send a request.
export const getData = async (path) => {
  try {
    const response = await axios.get(path, options);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
