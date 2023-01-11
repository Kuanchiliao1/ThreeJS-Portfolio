<template>
  <div class="body-container--portfolio h-screen border-white text-white">
    <header class="background-img-header pb-64">
      <nav>
        <div class="flex justify-between border-b uppercase tracking-wide">
          <p class="self-center pl-7 font-bold tracking-widest">Tony Liao</p>
          <ul class="right-nav flex">
            <li class="py-5 px-7 border-l"><a href="#projects">Projects</a></li>
            <li class="py-5 px-7 border-l"><a href="">Contact</a></li>
          </ul>
        </div>
      </nav>
      <br>
      <section class="py-8 px-4 mx-auto max-w-4xl text-center">
        <h1 class="text-6xl title-text uppercase font-bold mb-16 border-b pb-16 mt-32 tracking-wide">About Me</h1>
        <p class="px-1">
          Hi, I'm Tony! I am a frontend developer with a passion for learning, creating, and experimenting. I love the freedom of learning that programming offers, as well as the amazing power to bring ideas to life through code. I am currently learning learning ThreeJS on the side, and look forward to creating awesome animations and visual effects.
        </p>
        <br>
        <p>
          Outside of work, I thouroughly enjoy exploring my creative side through drone photography, playing the piano, and performing card magic. I also love playing with A.I. text models like GPT-3 to push the limits and find their capabilities.
        </p>
      </section>
    </header>
    <main id="projects" class="bg-white text-black mx-auto max-w-4xl">
      <section class="flex flex-col py-8 px-12 mx-auto max-w-4xl text-center">
        <h2 class="uppercase bold border-b pb-3 text-3xl">My Projects</h2>
        <div class="flex flex-col">
          <h3 class="text-2xl my-4">Autohotkey Script collection</h3>
          <div class="flex items-start flex-row flex-wrap justify-between gap-0.5 text-start">
            <!-- <img class="pt-1 block w-full md:w-5/12 self-start" src="https://i.imgur.com/FCuosDc.jpeg" alt="########"> -->

            <div class="mb-5 flex flex-col pt-1 w-full md:w-5/12 text-start">
              <video controls class="" style="font-size: 0;">
                <source src="../static/Code_9ZurxCxHrh.mp4"
                        type="video/mp4">
              </video>
              <div class="flex justify-around">
                <a class="btn bg-black text-white inline-block hover:bg-white hover:text-black w-full" href="https://github.com/Kuanchiliao1/PersonalAHK">Source + Demos</a>
              </div>
            </div>
            <div class="w-full md:w-5/12 flex flex-col justify-between text-start md:text-left">
              <p>Autohotkey is what first got me hooked on coding in 2019. It allows for the creation of custom scripts to automate tasks and improve their workflow on Windows computers. I have compiled and wrote a large collection of scripts that have helped me automate my programming and regular workflows. This project is ongoing as I continually add new functionality and optimize my existing code. Take a look and see what you can do with Autohotkey!</p>
              <h4 class="mt-4">
                Cool features
              </h4>
              <ul>
                <li>- Insta Google</li>
                <li>- rem/px conversion</li>
                <li>- A.I. analyzer</li>
              </ul>
              <p class="mt-4">Technologies used: Autohotkey, OpenAI API</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <h3 class="text-2xl my-4">Portfolio Landing Page</h3>
          <div class="flex  flex-row flex-wrap justify-between gap-0.5 text-start m-0">
            <div class="mb-5 pt-1 block w-full md:w-5/12 self-start">
              <img src="https://i.imgur.com/FCuosDc.jpeg" alt="Portfolio Landing Page">
              <div class="flex justify-around">
                <a class="btn bg-black text-white inline-block w-1/2 border-r-2 hover:bg-white hover:text-black" href="https://tony-portofolio.netlify.app/">Live site</a>
                <a class="btn bg-black text-white inline-block w-1/2 hover:bg-white hover:text-black" href="https://github.com/Kuanchiliao1/ThreeJS-Portfolio">Source</a>
              </div>
            </div>
            <div class="w-full md:w-5/12 flex flex-col justify-between text-start md:text-left">
              <p>If you can't tell, this websites sole purpose is to look cool and be a bit over the top. It's essentially a colorful 3D drawing board that you can control with your mouse. I built this portfolio landing page as an introduction to new topics for me like Three.js and Vue.js. While, originally created by Chris Lis, I added some of my own twists on solutions and made improvements. I'm most proud of a feature I implemented called Rainbow Mode.</p>
              <h4 class="mt-4">
                Cool features
              </h4>
              <ul>
                <li>- Rainbow mode</li>
                <li>- Skip to content for accessibility</li>
                <li>- Orbit controls with mouse</li>
              </ul>
              <p class="mt-4">Technologies used: HTML/CSS/JS, Nuxt.js, Vite, Three.js, Tailwind</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <h3 class="text-2xl my-4">Space Tourism</h3>
          <div class="flex  flex-row flex-wrap justify-between gap-0.5 text-start">
            <div class="mb-5 pt-1 block w-full md:w-5/12 self-start">
              <img src="https://i.imgur.com/MQbYl2j.jpeg" alt="Space Tourism Homepage">
              <div class="flex justify-around">
                <a class="btn bg-black text-white inline-block w-1/2 border-r-2 hover:bg-white hover:text-black" href="https://kuanchiliao1.github.io/space_tourism/">Live site</a>
                <a class="btn bg-black text-white inline-block w-1/2 hover:bg-white hover:text-black" href="https://github.com/Kuanchiliao1/space_tourism">Source</a>
              </div>
            </div>
            <div class="w-full md:w-5/12 flex flex-col justify-between text-start md:text-left">
              <p>This is a space tourism website that with great info and amazing pictures of the planets, the crew, and the technology in space. I built this website using HTML, CSS, and JavaScript, and utilized CSS custom properties and utility classes to create a maintainable and reusable codebase. I also took this opportunity to study best practices for accessibility and to gain insights into project planning and implementation using a Figma design file.</p>
              <h4 class="mt-4">
                Cool features
              </h4>
              <ul>
                <li>- Multiple background images for different screen sizes</li>
                <li>- Keyboard accessibility</li>
                <li>- Animated button</li>
                <li>- Fun space facts</li>
              </ul>
              <p class="mt-4">Technologies used: HTML/CSS/JS, Github Pages</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <h3 class="text-2xl my-4">What to Say</h3>
          <div class="flex  flex-row flex-wrap justify-between gap-0.5 text-start">
            <div class="mb-5 pt-1 block w-full md:w-5/12 self-start">
              <img src="https://i.imgur.com/6LjHvea.jpeg" alt="What to Say homepage">
              <div class="flex justify-around">
                <a class="btn bg-black text-white inline-block w-1/2 border-r-2 hover:bg-white hover:text-black" href="https://what-to-say.herokuapp.com/">Live site</a>
                <a class="btn bg-black text-white inline-block w-1/2 hover:bg-white hover:text-black" href="https://github.com/Kuanchiliao1/what_to_say">Source</a>
              </div>
            </div>
            <div class="w-full md:w-5/12 flex flex-col justify-between text-start md:text-left">
              <p>This is a personal language learning handbook with the purpose of helping new language learners track phrases and their responses, as well as take notes on them. I focused mainly focused on the back end at first and used Ruby with the Sinatra framework. I implemented many features that we users take for granted with minimal dependencies. Some of these include URL validation, pagination, and flash messaging.</p>
              <h4 class="mt-4 font-bold">
                Cool features
              </h4>
              <ul>
                <li>- Persists data through PSQL database</li>
                <li>- Multiple simultaneous validations of Entry inputs</li>
                <li>- </li>
              </ul>
              <p class="mt-4">Technologies used: Ruby, Sinatra, PSQL, Heroku, HTML/CSS</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 class="text-center text-2xl font-bold text-gray-800 mb-4">Contact Me</h2>
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