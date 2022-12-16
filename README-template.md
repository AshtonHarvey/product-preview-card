# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

I created a product preview card with both mobile and desktop view. I wanted to do this using vite to gain experience with other build tools and im also am trying to get more familiar with tailwind css. I appreciate any feed back but im specificity looking for feed back on ways to clean up my tailwind css.

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

[mobile-view](./Screenshots/mobile-view.png)
[desktop-view](./Screenshots/desktop-view.png)

### Links

- Solution URL:(<https://product-preview-card-tawny-two.vercel.app/>)

## My process

I wanted to make this card mainly as a way to learn and practice tailwind. I used a mobile first approach however I used more old school spacing methods. I focused on splitting the image and text in too separate sections that would allow me to shift there positions based on the width of the screen.

### Built with

- Semantic HTML5 markup
- Vite
- Tailwind CSS
- Mobile-first workflow

### What I learned

First, i learned how to use tailwinds config file to customize my options. Below you can see and example of my config used to add stylized font family, colors, and letter spacing. Tailwind has some interesting customization that im just scratching the surface of here. Second, I learned a bit about config files and how they interact with Vite. While trying to set up tailwind, I ran into some issues with the postcss config. Its my understanding that in Vite all config files must end in .cjs instead of .js otherwise you will run into errors. Finally another tailwind gremlin I came across is where the css file is placed. If the css file is placed in the public folder, vite will tell you that its ok to only use the url after the folder however, tailwind wont be able to understand that so you must write out the entire url from the project folder. See below.

link to css in html
incorrect: /css/styles.css;
correct: ./public/css/styles.css;

tailwind.config.cjs

```javascript
/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      "Dark-cyan": "hsl(158, 36%, 37%)",
      Cream: "hsl(30, 38%, 92%)",
      "Very-dark-blue": "hsl(212, 21%, 14%)",
      "Dark-grayish-blue": "hsl(228, 12%, 48%)",
      White: "hsl(0, 0%, 100%)",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      "widest-two": ".25em",
      "widest-three": ".4em",
    },
    extend: {
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

### Continued development

I would like to continue getting familiar with both tailwind and vite. Within tailwind I need to work on being more comfortable with flexbox and grid.

## Author

- Frontend Mentor - [@AshtonHarvey](https://www.frontendmentor.io/profile/AshtonHarvey)
