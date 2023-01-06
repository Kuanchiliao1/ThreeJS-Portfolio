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
  }

  .font-exo {
    font-family: 'Exo 2', sans-serif;
  }

  .font-mono {
    font-family: 'Space Mono', monospace;
  }

  .center-Y {
    top: 50%;
    transform: translateY(-50%);
  }

  .center-X {
    right: 50%;
    transform: translateX(50%);
  }

  .translate-Y-down {
    transform: translateY(2em);
  }
</style>