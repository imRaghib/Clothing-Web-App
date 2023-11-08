import { useEffect, useState } from "react";
import { createContext } from "react";
import { authStateListener, createUserDoc } from "../utils/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {
    currentUser,
    setCurrentUser,
  };

  // when useEffect unmounts it will run whatever is returned.
  // unsubsribe function will run and stop auth state from listening.
  useEffect(() => {
    const unsubscribe = authStateListener((user) => {
      if (user) createUserDoc(user);

      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
