import { createContext, useState } from "react";
import Images from "./components/Images";
import Store from "./components/userstor";
import SearchField from "./components/SearchField";
import useAxios from "./components/useAxios";

// Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=birds&client_id=${process.env.REACT_APP_ACCESS_KEY}`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      <Store>
        <SearchField />
      </Store>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
// user data
