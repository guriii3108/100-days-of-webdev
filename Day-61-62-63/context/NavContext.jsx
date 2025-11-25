import React, { createContext, useState } from "react";
export const NavbarContext = createContext();
const NavContext = ({ children }) => {
  const [navOpen, setnavOpen] = useState(false);
  return (
    <div>
      <NavbarContext.Provider value={[navOpen, setnavOpen]}>
        {children}
      </NavbarContext.Provider>
    </div>
  );
};

export default NavContext;
