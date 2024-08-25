import { createContext, useContext, useState } from "react";

const inputContextData = createContext(undefined);

function InputContext({ children }) {
  const [search, setSearch] = useState("Paris");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <inputContextData.Provider value={{ search, handleInputChange }}>
      {children}
    </inputContextData.Provider>
  );
}

const useInput = () => {
  const cityOfSearched = useContext(inputContextData);
  return cityOfSearched;
};

export { useInput };
export default InputContext;
