# Shortly URL - shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)

-   [The challenge](#the-challenge)

-   [Screenshot](#screenshot)

-   [Links](#links)

-   [My process](#my-process)

-   [Built with](#built-with)

-   [What I learned](#what-i-learned)

-   [Continued development](#continued-development)

-   [Useful resources](#useful-resources)

-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size

-   Shorten any valid URL

-   See a list of their shortened links, even after refreshing the browser

-   Copy the shortened link to their clipboard in a single click

-   Receive an error message when the `form` is submitted if:

-   The `input` field is empty

### Screenshot

![screenshoot](https://i.postimg.cc/pVQrTFm6/urlshortenerchallenge-netlify-app.png)

### Links

-   [Solution URL](https://github.com/josesaulguerrero/url_shortener)

-   [Live site URL ](https://urlshortenerchallenge.netlify.app/)

## My process

### Built with

-   Semantic HTML5 markup

-   CSS custom properties

-   Flexbox

-   CSS Grid

-   Mobile-first workflow

-   [React](https://reactjs.org/) - JS library

-   [Axios](https://axios-http.com/docs/intro) - JS library

-   CSS modules for React

### What I learned

Building this project helped me learn to use and improve my knowledge of some React and JS tools, such as:

-   CSS modules.
-   React Context.
-   Axios.
-   Local Storage.
-   The clipboard object.

### Continued development

-   I tried to follow a modular approach while writing my CSS stylesheets, which helped me avoid common problems, such as selector collisions or affecting other selector's styles by mistake.

-   I used useState React hook in order to handle the possible errors that could happen while requesting information from the API.

-   To connect to the given API and fetch the information I used AXIOS, a JS library that works with promises.

-   Implemented the `@media (hover: hover) {}` CSS media query, which is used to detect if the user's device has a cursor, to add hover transitions.

-   Instead of using useState to handle my inputs state, I used useRef because it won't re-render the whole component every time that the input's value change.

-   I added some smooth animations to the elements that the user can interact with.

-   There were some components that could be re-used, so I tried to write styles that would work no matter where the component is used.

### Useful resources

-   [CSS modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) - This helped me understand the basic usage of CSS modules and how to integrate them into a React project.
-   [Why are CSS modules useful?](https://www.gatsbyjs.com/docs/how-to/styling/css-modules/) - This article helped me understand the benefits of working with modular CSS stylesheets, such as component-scoped styles, which means no selector collisions.
-   [Axios](https://axios-http.com/docs) - This is the documentation of Axios, a promise-based JS library that helped me request information from an API.

## Author

-   Website - [Jose Saúl Guerrero Serrano](https://joseguerreroserrano.netlify.app/)

-   Github - [@josesaulguerrero](https://github.com/josesaulguerrero)
