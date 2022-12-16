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

Create product preview card with both mobile and desktop view.

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

[mobile-view](./Screenshots/mobile-view.png)
[desktop-view](./Screenshots/desktop-view.png)

### Links

- Solution URL:(https://product-preview-card-tawny-two.vercel.app/)

## My process

I wanted to make this card mainly as a way to learn and practice tailwind. I used a mobile first approach however I used more old school spacing methods.

### Built with

- Semantic HTML5 markup
- Vite
- Tailwind CSS
- Mobile-first workflow

### What I learned

The main thing i learned during this project was how to use tailwinds config file to customize my options. I found out how to add the stylized font family, colors and letter spacing.

Vite? config files. .cjs/.js

```
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

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

I would like to continue getting familiar with tailwind. I need to work on adding flexbox and grid to my tool belt.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
