<script setup>
import { Lightbulb, Layers, Code2, Database, Rocket } from "lucide-vue-next";

const strengths = [
  {
    icon: Code2,
    title: "OOP & SOLID",
    desc: "Clean, maintainable code following object-oriented and SOLID design principles.",
  },
  {
    icon: Layers,
    title: "Clean API Design",
    desc: "Well-structured RESTful APIs with proper authentication, validation, and error handling.",
  },
  {
    icon: Database,
    title: "Database Optimization",
    desc: "Indexing strategies, stored procedures, and query optimization for large datasets.",
  },
  {
    icon: Rocket,
    title: "Scalability",
    desc: "Systems designed to scale with modular architecture, caching, and async processing.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    desc: "Analytical approach to breaking down complex business requirements into elegant solutions.",
  },
];
</script>

<template>
  <section id="about" class="bg-slate-50/60 py-24">
    <div class="mx-auto max-w-7xl px-6">
      <h2 class="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
        About <span class="text-emerald-600">Me</span>
      </h2>

      <p class="mx-auto mt-4 max-w-2xl text-center text-slate-600">
        I'm Lehlohonolo Mona — a performance-focused full-stack developer with a passion for building scalable,
        maintainable business systems. I think in systems, design for growth, and write code that lasts.
      </p>

      <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <div
          v-for="s in strengths"
          :key="s.title"
          class="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-emerald-600/40 hover:shadow-md"
        >
          <component :is="s.icon" class="mb-3 h-8 w-8 text-emerald-600 transition-transform group-hover:scale-110" />
          <h3 class="font-semibold text-slate-900">{{ s.title }}</h3>
          <p class="mt-1 text-sm text-slate-600">{{ s.desc }}</p>
        </div>
      </div>

      <div class="mx-auto mt-12 max-w-3xl rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 class="mb-3 text-lg font-semibold text-slate-900">Architecture Philosophy</h3>
        <p class="leading-relaxed text-slate-600">
          I believe in building software that is modular, testable, and ready for growth. Every system I architect
          follows the Service Layer Pattern — separating business logic from controllers, keeping database queries
          optimized, and ensuring each component has a single responsibility. The goal is always code that the next
          developer can understand and extend.
        </p>
      </div>
    </div>
  </section>
</template>
