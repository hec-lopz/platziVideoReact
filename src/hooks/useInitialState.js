import { useState, useEffect } from "react";

const getCategoryTitle = () => {
  switch (category) {
    case "myList":
      return "Mi lista";
    case "trends":
      return "Tendencias";
    case "original":
      return "Originales de Platzi Video";
  }
};

const useInitialState = (API) => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    original: [],
  });

  useEffect(() => {
    const fetchVideos = (async () => {
      try {
        const response = await fetch(API);
        const json = await response.json();

        const data = Object.keys(json);

        const dataWithTitles = data.map(
          (category) => (Object({getCategoryTitle(category):data.category} ))
        );
        console.log(dataWithTitles);
        debugger;

        return setVideos(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return videos;
};

export default useInitialState;
