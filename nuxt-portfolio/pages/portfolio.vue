<template>
  <div class="body-container--portfolio h-screen border-white text-white">
  <div class="fade-in-page" v-bind:class="{ 'fade-out': isLoaded }"></div>
    <header class="background-img-header pb-64">
      <nav>
        <div class="flex justify-between border-b uppercase tracking-wide">
          <p class="self-center pl-7 font-bold tracking-widest">Tony Liao</p>
          <ul class="right-nav flex">
            <li><a class="py-5 px-7 border-l inline-block" href="#projects">Projects</a></li>
            <li><a class="py-5 px-7 border-l inline-block" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <br>
      <section class="py-32 px-4 mx-auto max-w-4xl text-center flex flex-col align-middle">
        <h1 class="text-6xl title-text uppercase font-bold mb-16 border-b pb-16 mt-32 tracking-wide">About Me</h1>
        <p class="px-1">
          Hi, I'm Tony! I am a frontend developer with a passion for learning, creating, and experimenting. I love the freedom of learning that programming offers, as well as the amazing power to bring ideas to life through code. I am currently learning learning ThreeJS on the side, and look forward to creating awesome animations and visual effects.
        </p>
        <br>
        <p>
          Outside of work, I thoroughly enjoy exploring my creative side through drone photography, playing the piano, and performing card magic. I also love playing with A.I. text models like GPT-3 to push the limits and find their capabilities.
        </p>
        <div class="flex gap-20 max-w-min mt-12 self-center">
          <a href="https://docs.google.com/document/d/1MxTmh9R64VNeEOTGRiA8KHy7jqXS2yAhPC9Jmh3jXrY/edit?usp=sharing" class="py-3 px-5 border-1 uppercase border">Résumé</a>
          <a href="https://github.com/Kuanchiliao1" class="py-3 px-5 border-1 uppercase border">Github</a>
        </div>
      </section>
    </header>
    <main id="projects" class="bg-white text-black mx-auto max-w-4xl">
      <section class="flex flex-col pt-8 pb-32 px-12 mx-auto max-w-4xl text-center">
        <h2 class="uppercase font-bold border-b pb-8 text-3xl border-black title-text">My Projects</h2>
        <div class="flex flex-col items-center">
          <h3 class="font-bold text-2xl pb-4 mb-6 mt-8 border-b border-black w-1/2">Autohotkey Script Collection</h3>
          <div class="flex items-start flex-row flex-wrap justify-between gap-0.5 text-start">
            <!-- <img class="pt-1 block w-full md:w-5/12 self-start" src="https://i.imgur.com/FCuosDc.jpeg" alt="########"> -->
            <div class="mb-5 flex flex-col pt-1 w-full md:w-5/12 text-start">
              <video controls class="" style="font-size: 0;">
                <source src="../static/explorer_fEphgDsVbN.mp4"
                        type="video/mp4">
              </video>
              <div class="flex justify-around">
                <a class="btn bg-black text-white inline-block hover:bg-white hover:text-black w-full" href="https://github.com/Kuanchiliao1/PersonalAHK">Source</a>
              </div>
              <p class="mt-2">Short demo video</p>
            </div>
            <div class="w-full md:w-5/12 flex flex-col justify-between text-start md:text-left">
              <p>Autohotkey is what first got me hooked on coding in 2019. It allows for the creation of custom scripts to automate tasks and improve their workflow on Windows computers. I have compiled and wrote a large collection of scripts that have helped me automate my programming and regular workflows. This project is ongoing as I continually add new functionality and optimize my existing code. Take a look and see what you can do with Autohotkey!</p>
              <h4 class="mt-4 font-bold">
                Features
              </h4>
              <ul class="list-disc list-inside">
                <li>Insta Google</li>
                <li>rem/px conversion</li>
                <li>A.I. analyzer</li>
              </ul>
              <p class="mt-4 font-bold">Technologies: Autohotkey, OpenAI API</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <h3 class="font-bold text-2xl pb-4 mb-6 mt-8 border-b border-black w-1/2">Portfolio Landing Page</h3>
          <div class="flex  flex-row flex-wrap justify-between gap-0.5 text-start m-0">
            <div class="mb-5 pt-1 block w-full md:w-5/12 self-start">
              <img src="https://i.imgur.com/FCuosDc.jpeg" alt="Portfolio Landing Page">
              <div class="flex justify-around">
                <a class="btn bg-black text-white inline-block w-1/2 border-r-2 hover:bg-white hover:text-black" href="https://tony-landing-page.netlify.app/">Live site</a>
                <a class="btn bg-black text-white inline-block w-1/2 hover:bg-white hover:text-black" href="https://github.com/Kuanchiliao1/ThreeJS-Portfolio">Source</a>
              </div>
            </div>
            <div class="w-full md:w-5/12 flex flex-col justify-between text-start md:text-left">
              <p>If you can't tell, this websites sole purpose is to look cool and be a bit over the top. It's essentially a colorful 3D drawing board that you can control with your mouse. I built this portfolio landing page as an introduction to Three.js and Vue.js. While originally created by Chris Lis, I added some of my own twists on solutions and made improvements. I'm most proud of a feature I implemented called Rainbow Mode.</p>
              <h4 class="mt-4 font-bold">
                Features
              </h4>
              <ul class="list-disc list-inside">
                <li>Rainbow mode</li>
                <li>Skip to content for accessibility</li>
                <li>Orbit controls with mouse</li>
              </ul>
              <p class="mt-4 font-bold">Technologies: HTML/CSS/JS, Nuxt.js, Vite, Three.js, Tailwind</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <h3 class="font-bold text-2xl pb-4 mb-6 mt-8 border-b border-black w-1/2">Space Tourism</h3>
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
              <h4 class="mt-4 font-bold">
                Features
              </h4>
              <ul class="list-disc list-inside">
                <li>Multiple background images for different screen sizes</li>
                <li>Keyboard accessibility</li>
                <li>Animated button</li>
                <li>Fun space facts</li>
              </ul>
              <p class="mt-4 font-bold">Technologies: HTML/CSS/JS, Github Pages, Figma</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <h3 class="font-bold text-2xl pb-4 mb-6 mt-8 border-b border-black w-1/2">What to Say</h3>
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
                Features
              </h4>
              <ul class="list-disc list-inside">
                <li>Persist data through PSQL database and session storage</li>
                <li>Multiple simultaneous validations of Entry inputs</li>
                <li>A.I. generated rated responses coming soon!</li>
              </ul>
              <p class="mt-4 font-bold">Technologies: Ruby, Sinatra, PSQL, Heroku, HTML/CSS</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <h3 class="font-bold text-2xl pb-4 mb-6 mt-8 border-b border-black w-1/2">Rec Analyzer</h3>
          <div class="flex  flex-row flex-wrap justify-between gap-0.5 text-start">
            <div class="mb-5 pt-1 block w-full md:w-5/12 self-start">
              <img src="https://i.imgur.com/mQQwg6k.jpeg" alt="Rec Analyzer homepage">
              <div class="flex justify-around">
                <a class="btn bg-black text-white inline-block w-1/2 border-r-2 hover:bg-white hover:text-black" href="https://what-to-say.herokuapp.com/">Live site</a>
                <a class="btn bg-black text-white inline-block w-1/2 hover:bg-white hover:text-black" href="https://github.com/Kuanchiliao1/what_to_say">Source</a>
              </div>
            </div>
            <div class="w-full md:w-5/12 flex flex-col justify-between text-start md:text-left">
              <p>The premise is that we all have friends and family who give us way too many recommendations on shows, movies, whatever. To avoid feeling the guilt, we just let an algorithm decide for us and analyze our recommendation. I'm working on this with two of my friends, and it's still a work in progress. We are making everything, including the design files. Stay tuned!</p>
              <h4 class="mt-4 font-bold">
                In progress...
              </h4>
              <ul>
                <li>OOP design</li>
                <li>Schema designed for multiple users</li>
                <li>Google authentication</li>
                <li>Place to rate your friends</li>
              </ul>
              <p class="mt-4 font-bold">Technologies: Ruby, Sinatra, PSQL, Figma, SCSS, JQuery</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer id="contact">
        <div class="flex contact-background pt-64 flex-col items-center px-12">
          <h2 class="uppercase font-bold pb-8 text-3xl title-text mt-32 pt-64">Contact Me</h2>
          <form ref="form" @submit.prevent="onSubmit" class="w-full max-w-lg mx-auto" action="https://public.herotofu.com/v1/80f86470-9d20-11ed-82c7-3d7607318e65" method="POST">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="name">
                  Name
                </label>
                <input class="text-black appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="name" id="Name" type="text" placeholder="Jane Doe" required>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="email">
                  Email
                </label>
                <input class="text-black appearance-none block w-full border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border-8" name="email" id="Email" type="email" placeholder="jane.doe@example.com" required>
              </div>
            </div>
            <div class="flex flex-col mb-6">
              <div class="w-full">
                <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="message">
                  Message
                </label>
                <textarea name="message" class="text-black appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" rows="5" placeholder="Your message here" required></textarea>
              </div>
              <div class="flex items-center justify-start">
                <button id="submit-btn" class="mt-4 py-3 px-5 border-1 uppercase border" type="submit">
                  Send
                </button>
              </div>
            </div>
          </form>
          <br>
          <br>
          <br>
          <br>
        </div>
      </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false
    }
  },
  mounted() {
    this.isLoaded = true
  },
  methods: {
    onSubmit(event) {
      if (event.target.checkValidity()) {
        this.$refs.form.submit()
        this.$refs.form.reset()
      }
    }
  }
}
</script>