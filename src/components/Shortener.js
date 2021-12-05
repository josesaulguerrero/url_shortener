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
import { Loader } from "./Loader";

export const Shortener = () => {
   const { addItem } = useContext(LinksContext);
   const reference = useRef(); // the input state is handled with useRef, so that it doesn't re-renders every time the inputs' value change.
   const [componentStatus, setComponentStatus] = useState({
      initial: true,
      loading: false,
      error: ""
   });

   const onInvalidInput = () => {
      setComponentStatus({
         loading: false,
         initial: true,
         error: "Please enter a valid URL"
      });
   };

   const onSubmit = (event) => {
      // when the form is submitted:
      event.preventDefault();
      setComponentStatus({
         loading: true,
         initial: false,
         error: ""
      });
      const { value } = reference.current;
      axios.get(`${process.env.REACT_APP_API_URL}${value}`)
         .then((response) => {
            const { original_link, short_link } = response.data.result;
            addItem({
               original_link,
               short_link
            });
            // if everything goes okay, then the Loader goes away and the component comes back to its initial state.
            setComponentStatus({
               loading: false,
               initial: true,
               error: ""
            });
         })
         .catch(() => {
            // if the API responds with an error, then the error state is given a message.
            setComponentStatus({
               loading: false,
               initial: false,
               error: "something went wrong, please try again later."
            });
         });
   };

   const { initial, loading, error } = componentStatus;

   return (
      <section className={styles.Shortener}>
         <form className={styles.ShortenerForm} onSubmit={onSubmit}>
            <input
               ref={reference}
               type="url"
               placeholder="Shorten a link here..."
               className={styles.FormInput}
               onInvalid={onInvalidInput}
            />
            <Button
               type="squared--large"
               disabled={loading}
            >
               {
                  (initial || error.trim()) && "Shorten it!"
               }
               {
                  loading && <Loader />
               }
            </Button>
         </form>
         {
            error.trim() && <ErrorText content={componentStatus.error} />
         }
      </section>
   );
};