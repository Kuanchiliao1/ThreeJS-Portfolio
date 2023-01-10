<template>
  <div class="bg-black body-container--portfolio h-screen border-white text-white">
    <header class="background-img-header pb-64">
      <nav>
        <div class="flex justify-between border-b uppercase tracking-wide">
          <p class="self-center pl-7 font-bold tracking-widest">Tony Liao</p>
          <ul class="right-nav flex">
            <li class="py-5 px-7 border-l">Projects</li>
            <li class="py-5 px-7 border-l">Contact</li>
            <li class="py-5 px-7 border-l">Filler</li>
          </ul>
        </div>
      </nav>
      <br>
      <section class="py-8 px-4 mx-auto max-w-4xl text-center">
        <h1 class="text-6xl title-text uppercase font-bold mb-16 border-b pb-16 mt-32 tracking-wide">About Me</h1>
        <p class="px-1">
          Hi, I'm Tony! I am a frontend developer with a passion for learning, creating, and experimenting. I love the freedom and autonomy that programming offers, and the amazing power to bring my ideas to life through code.

          Outside of work, I enjoy exploring my creative side through drone photography, playing the piano, and practicing card magic. I am also excited to be learning ThreeJS on the side, and look forward to learning more about creating animations and visual effects.
        </p>
      </section>
    </header>
    <main class="text-black mx-auto max-w-4xl">
      <section class="bg-white flex flex-col py-8 px-12 mx-auto max-w-4xl text-center">
        <h2 class="uppercase bold border-b pb-3">My Projects</h2>
        <div class="flex flex-col">
          <h3 class="mt-4">Autohotkey Script collection</h3>
          <div class="flex  flex-row flex-wrap justify-between gap-0.5 text-start">
            <img class="block w-full md:w-5/12 self-start" src="https://i.imgur.com/jCXCdvw.jpeg" alt="########">
            <div class="w-full md:w-5/12 flex flex-col justify-between text-start md:text-left">
              <p>Autohotkey is what got me hooked on coding in 2019. It allows for the creation of custom scripts to automate tasks and improve their workflow on Windows computers. I have compiled and wrote a large collection of scripts that have helped me automate my programming and regular workflows. This project is ongoing as I continually add new functionality and optimize my existing code. Take a look and see what you can do with Autohotkey!</p>
              <h4>
                Cool features:
              </h4>
              <ul>
                <li>Insta Google</li>
                <li>rem/px conversion</li>
                <li>asdfa</li>
                <li>asdfa</li>
                <li>asdfa</li>
                <li>asdfa</li>
              </ul>
              <p>Technologies used: Autohotkey, OpenAI API</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <h3 class="mt-4">Autohotkey Script collection</h3>
          <div class="flex justify-between">
            <img class="block w-5/12" src="https://i.imgur.com/jCXCdvw.jpeg" alt="########">
            <div class="w-5/12 flex flex-col justify-between">
              <p>I built this website using HTML, CSS, and JavaScript, and utilized CSS custom properties and utility classes to create a maintainable and reusable codebase. I also took this opportunity to study best practices for accessibility and to gain insights into professional development strategies, including project planning and implementation using a Figma design file.</p>
              <h4>
                Cool features: Insta Google, rem/px conversion, stuff
              </h4>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p>Technologies used: Autohotkey, OpenAI API</p>
            </div>
          </div>
        </div>
        <h3>Autohotkey script collection</h3>
        <h3>Space Tourism: I built this website using HTML, CSS, and JavaScript, and utilized CSS custom properties and utility classes to create a maintainable and reusable codebase. I also took this opportunity to study best practices for accessibility and to gain insights into professional development strategies, including project planning and implementation using a Figma design file.</h3>
        <h3>What to Say</h3>
        <h3>Portfolio?</h3>
        <p>Hi, I'm Tony! I am a frontend developer with a passion for learning, creating, and experimenting. I love the freedom and autonomy that programming offers, and the amazing power to bring my ideas to life through code.

        Outside of work, I enjoy exploring my creative side through drone photography, playing the piano, and practicing card magic. I am also excited to be learning ThreeJS on the side, and look forward to learning more about creating animations and visual effects.</p>
      </section>
      <section>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Contact Me</h2>
        <form class="w-full max-w-lg mx-auto"   action="#" method="post">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
                Name
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Jane Doe">
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                Email
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="jane.doe@example.com">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="message">
                Message
              </label>
              <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" rows="5" placeholder="Your message here"></textarea>
            </div>
            <div class="flex items-center justify-between">
              <button class="btn btn-primary" type="submit">
                Send
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  </div>
</template>