//libraries and hooks
import axios from "axios";
import { useRef } from "react";
import { UseLocalStorage } from "../hooks/useLocalStorage";
//components
import { Button } from "./Button";
//assets

export const Shortener = () => {
   const [, addItem] = UseLocalStorage();
   const reference = useRef();
   const onSubmit = async (event) => {
      event.preventDefault();
      const response = await axios.get(`${process.env.REACT_APP_API_URL}${reference.current.value}`);
      const { original_link, short_link } = response.data.result;
      console.log(original_link, short_link);
      addItem({
         original_link,
         short_link
      });
   };
   return (
      <section className="Shortener">
         <form className="Shortener__form" onSubmit={onSubmit}>
            <input ref={reference} type="url" placeholder="Shorten a link here..." />
            <Button type="primary--squared" content="Shorten it!" />
         </form>
      </section>
   );
};