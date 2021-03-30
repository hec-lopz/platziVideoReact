import { useState, useEffect } from "react";

const getCategoryTitle = (category) => {
  switch (category) {
    case "mylist":
      return "Mi lista";
    case "trends":
      return "Tendencias";
    case "originals":
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
    // Función que se ejecuta a sí misma
    const fetchVideos = (async () => {
      try {
        const response = await fetch(API);
        const json = await response.json();

        let dataWithTitles = {};

        const data = Object.keys(json).map((key) => {
          // Obtener título de la sección
          const title = getCategoryTitle(key);
          dataWithTitles[title] = json[key];
        });

        console.log(dataWithTitles);
        debugger;

        return setVideos(dataWithTitles);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return videos;
};

export default useInitialState;
