<template>
  <div id="landing" class="min-h-screen background-primary">
    <!-- Top Section: Welcome and Photo -->
    <section
      class="container mx-auto px-6 py-16 flex flex-col justify-center md:justify-between md:flex-row items-center h-screen"
    >
      <!-- Welcome Text -->
      <div class="md:w-1/2 text-center md:text-left">
        <h1 class="text-4xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p class="text-lg">
          Hi, I'm Orng, a passionate developer specializing in Vue.js and
          modern web technologies.
        </p>
      </div>
      <!-- Photo -->
      <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="https://via.placeholder.com/300"
          alt="Your Photo"
          class="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg"
        />
      </div>
    </section>

    <!-- Middle Section: Skills -->
    <section class="bg-white py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">
          My Skills
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Skill 1 -->
          <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Vue.js</h3>
            <p class="text-gray-600">
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
<script lang="ts" setup></script>
