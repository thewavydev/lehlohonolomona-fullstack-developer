<template>
  <section id="experience" class="py-24">
    <div class="mx-auto max-w-7xl px-6">
      <h2 class="text-center text-3xl font-bold sm:text-4xl">
        Work <span class="text-primary">Experience</span>
      </h2>

      <p class="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
        A timeline of my professional journey building scalable systems and solving complex business problems.
      </p>

      <div class="relative mx-auto mt-14 max-w-3xl">
        <div class="absolute left-6 top-0 hidden h-full w-px bg-border md:block" />

        <div class="flex flex-col gap-10">
          <div
            v-for="(exp, i) in experiences"
            :key="i"
            class="relative flex gap-6 md:pl-16"
          >
            <!-- Timeline dot -->
            <div
              class="absolute left-4 top-1 hidden h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background md:flex"
            >
              <div class="h-2 w-2 rounded-full bg-primary" />
            </div>

            <div class="w-full rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-md hover:border-primary/40">
              <div class="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 class="text-lg font-semibold">
                    {{ exp.role }}
                  </h3>
                  <p class="text-sm font-medium text-primary">
                    {{ exp.company }}
                  </p>
                  <p
                    v-if="exp.location"
                    class="text-xs text-muted-foreground"
                  >
                    {{ exp.location }}
                  </p>
                </div>

                <span
                  class="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium whitespace-nowrap"
                >
                  <Calendar class="h-3 w-3" />
                  {{ exp.period }}
                </span>
              </div>

              <div class="mt-3 flex items-start justify-between gap-4">
                <p class="text-sm leading-relaxed text-muted-foreground">
                  {{ exp.description }}
                </p>

                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs hover:text-primary transition"
                  @click="toggleDetails(i)"
                >
                  <template v-if="openIndex === i">
                    Hide <ChevronUp class="h-4 w-4" />
                  </template>
                  <template v-else>
                    Details <ChevronDown class="h-4 w-4" />
                  </template>
                </button>
              </div>

              <ul v-if="openIndex === i" class="mt-4 space-y-2">
                <li
                  v-for="(h, j) in exp.highlights"
                  :key="j"
                  class="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Briefcase class="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  {{ h }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Briefcase, Calendar, ChevronDown, ChevronUp } from "lucide-vue-next"

const openIndex = ref<number | null>(null)

function toggleDetails(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}

const experiences = [
  {
    role: "Junior Full Stack Software Developer",
    company: "Clear Access",
    period: "Apr 2023 — Present",
    location: "Centurion, Gauteng, South Africa",
    description:
      "Full-time developer building scalable Vue.js and Laravel-based systems.",
    highlights: [
      "Built reusable Vue.js components",
      "Designed responsive interfaces with Tailwind CSS",
      "Developed Laravel systems with CRUD and authentication",
      "Integrated REST APIs",
      "Optimized performance across the stack",
    ],
  }
//   {
//     role: "Full-Stack Developer",
//     company: "Freelance / Contract",
//     period: "2022 — 2023",
//     description:
//       "Built scalable business systems across multiple sectors.",
//     highlights: [
//       "Property management platforms",
//       "Optimized REST APIs handling 50k+ records",
//       "Deployed production systems on AWS",
//     ],
//   },
]
</script>
