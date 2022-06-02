import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const myContext = createContext({});
export default function Context(props) {
  const [userObject, setUserObject] = useState({});
  const baseURL = "http://localhost:3000/"
  console.log(userObject)
  useEffect(() => {
    axios.get(baseURL + "getuser", { withCredentials: true }).then((res) => {
      if (res.data) {
        setUserObject(res.data);
      }
    });
  }, []);
  return (
    <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
  );
}