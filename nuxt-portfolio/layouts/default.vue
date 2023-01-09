<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    border-color: hsl(0, 0%, 10% / .25);
  }

  .background-img-header {
    position: relative;
    background-image: url("../static/DJI_0667.JPG");
    background-size: cover;
    background-position: right top;
  }

  .background-img-header::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  border-style: solid;
  border-width: 0 0 100px 100vw;
  border-color: transparent transparent #ffffff transparent;
  z-index: 100;
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
          background-position: 0
      }

      50% {
          background-position: 100%
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