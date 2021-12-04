import { useState } from "react";

export const UseLocalStorage = () => {
   const initialState = window.localStorage.getItem("shortened_links")
      ? JSON.parse(window.localStorage.getItem("shortened_links"))
      : [];
   // if there is a variable called "shortened_links" in the LocalStorage, then its value is taken and given as initial value to our hook data.
   const [data, setData] = useState(initialState);
   const addItem = (item) => {
      const newState = [
         item,
         ...data,
      ];
      // a new state is created
      setData(newState); // then the new state is set
      window.localStorage.setItem("shortened_links", JSON.stringify(newState));
      //and finally the LocalStorage state is updated.
   };
   return [data, addItem];
};