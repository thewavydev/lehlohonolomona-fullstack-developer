<template>
  <section id="home" class="relative flex min-h-screen items-center overflow-hidden pt-20">
    <!-- Ballpit animation in the background -->
    <Ballpit
      class="absolute inset-0 z-0"
      :count="100"
      :gravity="1"
      :friction="0.9975"
      :wallBounce="0.95"
    />
    <div class="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-emerald-600/10 blur-3xl z-0" />
    <div class="pointer-events-none absolute bottom-0 -left-40 h-[400px] w-[400px] rounded-full bg-emerald-600/5 blur-3xl z-0" />


    <div class="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Full-Stack Developer Building
          <span class="text-emerald-600"> Scalable Business Systems</span>
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          I design and build high-performance web applications using Vue.js, Laravel, and AWS — with a focus on clean
          architecture, database optimization, and scalable backend systems.
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-2">
          <span
            v-for="techBadge in techBadges"
            :key="techBadge"
            class="rounded-full border border-emerald-600/30 bg-green-200 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {{ techBadge }}
          </span>
        </div>
        <div class="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            class="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-700"
          >
            View Projects
            <ArrowRight class="ml-2 h-4 w-4" />
          </a>

          <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Ballpit from "./Ballpit.vue";
import { ArrowRight } from "lucide-vue-next";

const techBadges = [
  "Vue.js 3",
  "Nuxt 4",
  "Laravel",
  "TailwindCSS",
  "MySQL",
  "AWS",
  "REST APIs",
  "Docker",
  "FastAPI",
  "Python"
];
</script>