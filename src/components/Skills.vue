<script setup>
const categories = [
  {
    title: "Frontend",
    skills: ["Vue.js 3 (Options API)", "Nuxt 3", "TailwindCSS"],
  },
  {
    title: "Backend",
    skills: ["Laravel", "REST APIs", "Authentication (Breeze)", "Stored Procedures", "Dynamic Reporting"],
  },
  {
    title: "Database",
    skills: ["MySQL", "Query Optimization", "Indexing Strategies", "Large Dataset Pagination"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS EC2", "S3", "IAM", "VPC", "CloudWatch", "Docker"],
  },
  {
    title: "Architecture",
    skills: ["OOP Design", "SOLID Principles", "Service Layer Pattern", "Modular Design", "Scalable Systems"],
  },
];
</script>

<template>
  <section id="skills" class="py-24">
    <div class="mx-auto max-w-7xl px-6">
      <h2 class="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
        Technical <span class="text-emerald-600">Skills</span>
      </h2>

      <p class="mx-auto mt-4 max-w-xl text-center text-slate-600">
        A comprehensive toolkit for building production-ready, enterprise-grade web applications.
      </p>

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="cat in categories"
          :key="cat.title"
          class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-emerald-600/40 hover:shadow-md"
        >
          <h3 class="mb-4 text-lg font-semibold text-emerald-600">
            {{ cat.title }}
          </h3>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="s in cat.skills"
              :key="s"
              class="rounded-full border border-emerald-600/20 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {{ s }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
