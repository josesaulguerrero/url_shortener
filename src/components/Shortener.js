//libraries and hooks
import axios from "axios";
import { useRef, useState } from "react";
import { useContext } from "react";
//components
import { Button } from "./Button";
//assets
import styles from "../assets/styles/Shortener.module.css";
// context
import { LinksContext } from "../context/LinksContext";
import { ErrorText } from "./ErrorText";

export const Shortener = () => {
   const { addItem } = useContext(LinksContext);
   const reference = useRef(); // the form state is handled with useRef, so that it doesn't re-renders every time the inputs' value change.
   const { value } = reference.current;
   const [errorStatus, setErrorStatus] = useState({
      error: false,
      message: undefined
   });

   const onSubmit = (event) => {
      // when the form is submitted:
      event.preventDefault();
      const regex = /^((http|https):\/\/)?\w{3,150}\.\w{2,}$/;
      if (!regex.test(value.trim())) {
         // if the input value doesn't match the set regex, then the errorStatus is set to true.
         setErrorStatus({
            error: true,
            message: "Please enter a valid URL"
         });
         reference.current.setCustomValidity("Invalid field.");
         return;
      }
      axios.get(`${process.env.REACT_APP_API_URL}${value}`)
         .then((response) => {
            const { original_link, short_link } = response.data.result;
            addItem({
               original_link,
               short_link
            });
            // if everything goes okay, then the errorStatus is set to false.
            setErrorStatus({
               error: false
            });
         })
         .catch(() => {
            // if the API responds with an error, then the errorStatus is set to true and the user is asked to try again later.
            setErrorStatus({
               error: true,
               message: "something went wrong, please try again later."
            });
         });
   };

   return (
      <section className={styles.Shortener}>
         <form className={styles.ShortenerForm} onSubmit={onSubmit}>
            <input
               ref={reference}
               type="text"
               placeholder="Shorten a link here..."
               className={styles.FormInput}
            />
            <Button
               type="squared--large"
               content="Shorten it!"
               disabled={!value.trim() && true}
            />
         </form>
         {
            errorStatus.error && <ErrorText content={errorStatus.message} />
         }
      </section>
   );
};