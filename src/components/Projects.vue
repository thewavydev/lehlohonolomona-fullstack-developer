
<template>
  <section id="projects" class="bg-slate-50/60 py-24">
    <div class="mx-auto max-w-7xl px-6">
      <h2 class="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
        Featured <span class="text-emerald-600">Projects</span>
      </h2>

      <p class="mx-auto mt-4 max-w-xl text-center text-slate-600">
        Real-world systems designed for performance, scalability, and maintainability.
      </p>

      <div>
        <p class="mx-auto mt-12 max-w-2xl text-center text-sm text-slate-600">
            Coming Soon: Detailed case studies of my most impactful projects, showcasing architecture, challenges solved, and performance optimizations.
        </p>
      </div>
      <!-- <div class=" mt-12 grid gap-8 md:grid-cols-2">
        Project Card (static template only, no toggle logic)
        <div
        v-for="product in projects"
        :key="product.title"

        class="rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:border-emerald-600/40 hover:shadow-md"
        >
          Screenshot placeholder
          <div class="flex h-48 items-center justify-center rounded-t-xl bg-slate-100">
            <span class="text-sm text-slate-500">Screenshot Placeholder</span>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-semibold text-slate-900">{{ product.title }}</h3>
            <p class="mt-2 text-sm text-slate-600">{{ product.problem }}</p>

            <div class="mt-4 flex flex-wrap gap-2">
              <span
              v-for="item in product.tech"
              :key="item"
              class="rounded-full border border-emerald-600/20 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-700"
              >
                {{ item }}
              </span>
            </div>


            Details block shown by default (since no functions/state requested)
            <div class="mt-4 space-y-4 border-t border-slate-200 pt-4">
              <div>
                <h4 class="text-sm font-semibold text-slate-900">Architecture</h4>
                <p class="text-sm text-slate-600">{{ product.architecture }}</p>
              </div>

              <div>
                <h4 class="text-sm font-semibold text-slate-900">Challenges Solved</h4>
                <ul class="ml-4 list-disc text-sm text-slate-600">
                  <li v-for="challenge in product.challenges" :key="challenge">{{ challenge }}</li>
                </ul>
              </div>

              <div>
                <h4 class="text-sm font-semibold text-slate-900">Performance</h4>
                <p class="text-sm text-slate-600">{{ product.performance }}</p>
              </div>

              <div>
                <h4 class="text-sm font-semibold text-slate-900">Database Design</h4>
                <p class="text-sm text-slate-600">{{ product.db }}</p>
              </div>

              <div class="flex gap-3">
                <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
                >
                  <Github class="mr-1 h-4 w-4" />
                  GitHub
                </a>
                <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
                >
                  <ExternalLink class="mr-1 h-4 w-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
        /Project Card
      </div> -->
    </div>
  </section>
</template>
<script setup>
import { Github, ExternalLink } from "lucide-vue-next";

const projects = [
    {
    title: "Property Management System",
    problem:
        "Property managers needed a centralized system to track tenants, leases, payments, and maintenance requests across multiple properties.",
    architecture:
        "Modular Laravel backend with Vue.js 3 frontend. Service Layer Pattern separates business logic. RESTful API with role-based access control.",
    tech: ["Vue.js 3", "Laravel", "MySQL", "TailwindCSS", "REST API"],
    challenges: [
        "Multi-tenant data isolation",
        "Automated lease renewal notifications",
        "Complex financial reporting with stored procedures",
    ],
    performance:
        "Indexed queries reduced report generation from 12s to under 1s for 50k+ records.",
    db:
        "Normalized schema with tenants, properties, leases, and payments tables. Stored procedures handle monthly billing calculations.",
    },
    {
    title: "Smart Farming Dashboard",
    problem:
        "Agricultural stakeholders needed real-time visibility into farm operations, crop yields, and resource allocation across multiple farms.",
    architecture:
        "Nuxt 3 SSR frontend consuming a Laravel API. Data aggregation layer with caching for dashboard metrics.",
    tech: ["Nuxt 3", "Laravel", "MySQL", "AWS S3", "TailwindCSS"],
    challenges: [
        "Real-time data aggregation",
        "Offline-capable data entry",
        "Dynamic chart generation for yield trends",
    ],
    performance:
        "Redis caching reduced dashboard load time by 70%. Pagination handles 100k+ crop records efficiently.",
    db:
        "Relational schema linking farms, fields, crops, and harvests. Composite indexes on date-range queries.",
    },
    {
    title: "Learner Promotion & Reporting System",
    problem:
        "Educational institutions required an automated system to evaluate learner performance, manage promotions, and generate regulatory reports.",
    architecture:
        "Laravel monolith with Vue.js components. Stored procedures for grade calculations. PDF report generation pipeline.",
    tech: ["Vue.js 3", "Laravel", "MySQL", "Stored Procedures"],
    challenges: [
        "Complex promotion rules engine",
        "Bulk grade processing for thousands of learners",
        "Regulatory-compliant report generation",
    ],
    performance:
        "Batch processing with chunked queries handles 10k+ learner records without timeouts.",
    db:
        "Learners, subjects, grades, and promotion_rules tables. Stored procedures encapsulate grading logic for consistency.",
    },
    {
    title: "Task Management System",
    problem:
        "Teams needed a performant task tracking system that could handle large datasets with complex filtering, sorting, and assignment workflows.",
    architecture:
        "Vue.js 3 SPA with Laravel API. Optimistic UI updates. Server-side filtering and pagination.",
    tech: ["Vue.js 3", "Laravel", "MySQL", "Docker", "AWS EC2"],
    challenges: [
        "Sub-second response times with 500k+ tasks",
        "Real-time assignment notifications",
        "Complex filter combinations",
    ],
    performance:
        "Composite indexes and query optimization achieved <200ms response times. Cursor-based pagination for infinite scroll.",
    db:
        "Tasks, users, teams, and tags with polymorphic relationships. Full-text search index on task titles and descriptions.",
    },
];

</script>
