<script setup>
import { ArrowRight, Code, Server, Cloud } from "lucide-vue-next";

const techBadges = [
  "Vue.js 3",
  "Nuxt 3",
  "Laravel",
  "TailwindCSS",
  "MySQL",
  "AWS",
  "REST APIs",
  "Docker",
  "FastAPI",
  "Python"
];

const stats = [
  { label: "Projects Built", value: 15, icon: Code },
  { label: "Systems Designed", value: 10, icon: Server },
  { label: "APIs Developed", value: 20, icon: Cloud },
];
</script>

<template>
  <section id="home" class="relative flex min-h-screen items-center overflow-hidden pt-20">
    <!-- subtle gradient blob -->
    <div class="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-emerald-600/10 blur-3xl" />
    <div class="pointer-events-none absolute bottom-0 -left-40 h-[400px] w-[400px] rounded-full bg-emerald-600/5 blur-3xl" />

    <div class="mx-auto max-w-7xl px-6 py-20">
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

      <!-- Stats -->
      <!-- <div class="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-8">
        <div v-for="stat in stats" :key="stat.label" class="flex flex-col items-center gap-2">
          <component :is="stat.icon" class="h-8 w-8 text-emerald-600" />
          <span class="text-4xl font-bold text-slate-900">{{ stat.value }}+</span>
          <span class="text-sm text-slate-600">{{ stat.label }}</span>
        </div>
      </div> -->
    </div>
  </section>
</template>
