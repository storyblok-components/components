import React, { createContext, useState } from 'react';

const defaultValue = {
  data: {},
  setData: () => {},
};

export const PageContext = createContext(defaultValue);

const PageContextProvider = ({ children }) => {
  const [data, setData] = useState(defaultValue.data);

  return (
    <PageContext.Provider value={{ data, setData }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
