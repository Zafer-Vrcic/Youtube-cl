import { createContext, useEffect, useState } from "react";
import { categories } from "../pages/constants";
import { getData } from "../utils/getData";
//1)To build a context
export const YoutubeContext = createContext();

//2)date which is in the context to connect to app
export const YoutubeProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    //when take a other videos data to clean first.
    setVideos(null);
    // if selected category is home or trending send to request.

    if (
      selectedCategory.type === "home" ||
      selectedCategory.type === "trending"
    ) {
      getData(`/${selectedCategory.type}`).then((data) => setVideos(data.data));
    }
    // if selected category type is category we will regquest search endpoint
    if (selectedCategory.type === "category") {
      getData(`/search?query=${selectedCategory.name}`).then((data) =>
        setVideos(data.data)
      );
    }
  }, [selectedCategory]);

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
