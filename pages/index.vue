<template>
  <div id="landing-page" class="flex flex-col w-full min-h-screen  disable-selection">
    <!-- Top Section: Welcome and Photo -->
    <section class="w-full">
      <!-- Welcome Text -->
      <div class="max-w-[1440px] max-h-[900px] h-screen mx-auto px-6 py-16 flex flex-col justify-center md:justify-between md:flex-row items-center h-full">
        <div class="md:w-1/2 text-center md:text-left">
          <h1 class="text-4xl font-bold mb-4">
            Welcome to My Portfolio
          </h1>
          <div class="max-w-md mx-auto md:mx-0 min-h-48">
            <p class="text-lg font-mono" id="typing">
              Hi, I'm Orng, a passionate developer specializing in Vue.js and modern web technologies.
            </p>
          </div>
        </div>
        <!-- Photo -->
        <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center disable-selection">
          <div 
            class="w-[200px] h-[200px] before:h-[200px] before:w-[200px]
            md:w-[300px] md:h-[300px] md:before:h-[300px] md:before:w-[300px] 
            background-secondary rounded-[50px] rotate-45 human-photo-container" 
          >
            <div class="w-full h-full overflow-hidden rounded-[50px]">
              <img
              src="~/assets/image/human.png"
              alt="Your Photo" 
              id="human-photo"
              class="max-h-[400px] md:max-h-[500px] m-auto -rotate-45 translate-4"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Middle Section: Skills -->
    <section class="background-secondary py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-8">
          My Skills
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Skill 1 -->
          <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 class="text-xl font-semibold mb-4">Vue.js</h3>
            <p>
              Proficient in building dynamic and responsive web applications
              using Vue.js.
            </p>
          </div>
          <!-- Skill 2 -->
          <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">
              Tailwind CSS
            </h3>
            <p class="text-gray-600">
              Experienced in creating modern and responsive designs with
              Tailwind CSS.
            </p>
          </div>
          <!-- Skill 3 -->
          <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">JavaScript</h3>
            <p class="text-gray-600">
              Strong foundation in JavaScript for building interactive web
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Section: Achievements -->
    <section class="container mx-auto px-6 py-16">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">
        My Achievements
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Achievement 1 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Project A</h3>
          <p class="text-gray-600">
            Developed a scalable e-commerce platform using Vue.js and Node.js.
          </p>
        </div>
        <!-- Achievement 2 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Project B</h3>
          <p class="text-gray-600">
            Built a real-time chat application with Vue.js and Firebase.
          </p>
        </div>
        <!-- Achievement 3 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Project C</h3>
          <p class="text-gray-600">
            Created a responsive portfolio website using Tailwind CSS and
            Vue.js.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
const displayText = "Hi, I'm Orng, a passionate developer specializing in Vue.js and modern web technologies.";
const currentText = ref("");
const totalLength = displayText.length;
const hideCursor = ref(false);
let index = 0;
onBeforeMount(() => {
  const interval = setInterval(() => {
    currentText.value += displayText[index];
    index++;
    if (index === totalLength) {
      clearInterval(interval);
      hideCursor.value = true;
    }
  }, 50);
});
</script>
<style lang="css" scoped>
.human-photo-container::before {
  content: "";
  position: absolute; 
  top: 50%;
  left: 50%; 
  background: transparent;
  border-width: 4px;
  border-color: var(--ui-primary-button-background-color);
  border-style: solid;
  transform: translate(-45%, -45%); 
  border-radius: 50px;
  transition: 500ms ease-in-out;
}
#human-photo {
  transform: translate(72px, 0px) rotate(-45deg);
}
.bg-image {
  background: url("~/assets/image/banner-bg.png") no-repeat 50%;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  background-position: center;
}

@keyframes blink {
  50% {
    opacity: 1;
  }
}

.animate-blink {
  opacity: 0;
  animation: blink 1s infinite;
}
</style>
