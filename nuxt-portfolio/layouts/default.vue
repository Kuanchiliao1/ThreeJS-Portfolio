<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Oswald:wght@400;700&display=swap');

  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    background-color: black;
    word-spacing: 1px;
    scroll-behavior: smooth;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    border-color: rgba(255, 255, 255, 0.40);
  }

  .body-container--portfolio {
    font-family: 'Lato', sans-serif;
  }

  .title-text {
    font-family: 'Oswald', sans-serif;
  }

  .fade-in-page {
      position: fixed;
      background: black;
      z-index: 100000;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
  }

  .fade-out {
    animation: fade 2s ease-in forwards;
  }

  @keyframes fade {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    } 
  }

  /* Taken from space tourism */
  .skip-to-projects {
    position: absolute;
    z-index: 9999;
    top: 0;
    background: black;
    color: white;
    padding: .5em 1em;
    margin-inline: auto;
    transform: translateY(-100%);
    transition: transform 250ms ease-in;
    text-decoration: underline;
  }

  .skip-to-projects:focus {
    transform: translateY(0);
  }

  .background-img-header {
    position: relative;
    background-image: url("../static/edited_background_pic.png");
    background-size: cover;
    background-attachment: fixed;
    background-position: 100% 100%;
    animation: fadein 0.7s ease-in;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  .contact-background {
    position: relative;
    background-image: url(../static/DJI_0104.JPG);
    background-size: cover;
    background-attachment: fixed;
    background-position: right;
    height: 67rem;
  }

  @keyframes fadein {
    from { opacity: .0; }
    to   { opacity: 1; }
  }

  .background-img-header::after,
  .contact-background::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border-style: solid;
    border-width: 0 0 100px 100vw;
    border-color: transparent transparent #ffffff transparent;
    z-index: 100;
  }

  .contact-background::before {
    top: 0;
    bottom: auto;
    border-width: 0px 0px 100px 100vw;
    transform: rotate(180deg)
  }

  .vsc-controller {
    display: none;
  }

  .rainbow-text:hover,
  .active {
    display: inline-block;
    background: black;
    background: linear-gradient(to right, red, orange , yellow, green, blue, indigo, violet);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: rainbow_animation 5s ease-in-out infinite;
    background-size: 400%;
  }

  @keyframes rainbow_animation {
    0%,100% {
        background-position: 0;
    }

    50% {
        background-position: 100%;
    }
  }

  .text-shadow {
    text-shadow: 0px 5px 10px black;
  }

  .font-exo {
    font-family: 'Exo 2', sans-serif;
  }

  .font-mono {
    font-family: 'Space Mono', monospace;
  }

  .font-size-title {
    font-size: clamp(1.5rem, 1.179rem + 1.468vw, 2.5rem);
  }

  .center-Y {
    top: 50%;
  }

  .center-X {
    right: 50%;
    transform: translateX(50%) translateY(-50%);
  }

  .translate-Y-down {
    transform: translateY(2em);
  }
</style>