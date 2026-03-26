
<template>
  <section id="architecture" class="py-24">
    <div class="mx-auto max-w-7xl px-6">
      <h2 class="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
        System <span class="text-emerald-600">Architecture</span>
      </h2>

      <p class="mx-auto mt-4 max-w-xl text-center text-slate-600">
        How I approach building systems that are robust, maintainable, and ready to scale.
      </p>

      <!-- Diagram placeholder -->
      <!-- <div
      class="mx-auto mt-12 flex h-64 max-w-4xl items-center justify-center rounded-xl border-2 border-dashed border-emerald-600/30 bg-slate-50"
      >
        <p class="text-slate-500">Architecture Diagram Placeholder</p>
      </div> -->

      <div class="mt-12 grid gap-6 sm:grid-cols-2">
        <div
        v-for="p in pillars"
        :key="p.title"
        class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-emerald-600/40 hover:shadow-md"
        >
          <div class="mb-3 flex items-center gap-3">
            <component :is="p.icon" class="h-6 w-6 text-emerald-600" />
            <h3 class="text-lg font-semibold text-slate-900">
              {{ p.title }}
            </h3>
          </div>
          <p class="text-sm leading-relaxed text-slate-600">
            {{ p.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Layers, Database, Server, Zap } from "lucide-vue-next";

const pillars = [
  {
    icon: Layers,
    title: "API Layer",
    desc: "RESTful endpoints organized by resource. Controllers delegate to service classes. Request validation via Form Requests. Consistent JSON response structure with proper HTTP status codes.",
  },
  {
    icon: Database,
    title: "Database Schema",
    desc: "Normalized relational schemas with strategic denormalization for read-heavy operations. Migrations version-controlled. Stored procedures for complex calculations. Composite indexes on frequently queried columns.",
  },
  {
    icon: Server,
    title: "Service Architecture",
    desc: "Service Layer Pattern separates business logic from HTTP concerns. Repository pattern for data access abstraction. Dependency injection for testability. Event-driven communication between modules.",
  },
  // {
  //   icon: Zap,
  //   title: "Scaling Strategy",
  //   desc: "Redis caching for computed metrics and session management. Queue-based async processing for emails and reports. Cursor-based pagination for large datasets. Horizontal scaling via AWS EC2 auto-scaling groups.",
  // },
];
</script>