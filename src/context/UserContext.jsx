import React, { useState, createContext, useCallback } from "react";
import axios from "axios";

export const UserContext = createContext(null);

export function UserProvider(props) {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const login = useCallback(
    async (username, password) => {
      try {
        const response = await axios.post("/api/users/login", {
          username,
          password,
        });
        if (response.data.success) {
          setLoggedInUser(response.data.data);
        } else {
          console.log(response.data.error);
        }
      } catch (err) {
        console.log(err);
      }
    },
    [setLoggedInUser]
  );

  const logout = useCallback(async () => {
    try {
      const response = await axios.get("/api/users/logout");
      if (response.data.success) {
        setLoggedInUser(null);
      }
    } catch (err) {
      console.log(err);
    }
  }, [setLoggedInUser]);

  const verify = useCallback(async () => {
    try {
      const response = await axios.get("/api/users/verify");
      if (response.data.success) {
        setLoggedInUser(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  }, [setLoggedInUser]);

  const register = useCallback(async (username, password) => {
    try {
      const response = await axios.put("/api/users/register", {
        username,
        password,
      });
      if (response.data.success) {
        console.log("You've been registered! Please Login to contiue browsing.");
      } else {
        console.log(response.data.error);
      }
    } catch (err) { console.log(err) }
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser, login, logout, verify, register }}>
      {props.children}
    </UserContext.Provider>
  );
}
