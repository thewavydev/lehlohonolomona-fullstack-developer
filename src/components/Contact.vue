<script setup>
import { reactive } from "vue";
import { Send, Github, Linkedin } from "lucide-vue-next";

const form = reactive({
  name: "",
  email: "",
  message: "",
});
</script>

<template>
  <section id="contact" class="bg-slate-50/60 py-24">
    <div class="mx-auto max-w-7xl px-6">
      <h2 class="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
        Get In <span class="text-emerald-600">Touch</span>
      </h2>

      <p class="mx-auto mt-4 max-w-xl text-center text-slate-600">
        Have a project in mind or want to discuss a collaboration? Let's connect.
      </p>

      <div class="mx-auto mt-12 grid max-w-4xl gap-12 md:grid-cols-2">
        <form class="space-y-5">
          <div>
            <label for="name" class="text-sm font-medium text-slate-900">Name</label>
            <input
              id="name"
              v-model="form.name"
              required
              placeholder="Your name"
              class="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-emerald-600"
            />
          </div>

          <div>
            <label for="email" class="text-sm font-medium text-slate-900">Email</label>
            <input
              id="email"
              type="email"
              v-model="form.email"
              required
              placeholder="you@example.com"
              class="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-emerald-600"
            />
          </div>

          <div>
            <label for="message" class="text-sm font-medium text-slate-900">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              placeholder="Tell me about your project..."
              rows="5"
              class="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-emerald-600"
            />
          </div>

          <button
            type="submit"
            class="flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-3 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Send Message
            <Send class="ml-2 h-4 w-4" />
          </button>
        </form>

        <div class="flex flex-col justify-center gap-6">
          <h3 class="text-xl font-semibold text-slate-900">
            Let's Build Something Great
          </h3>

          <p class="leading-relaxed text-slate-600">
            Whether you need a scalable backend system, a polished Vue.js frontend, or full-stack architecture consulting —
            I'm ready to help bring your vision to life.
          </p>

          <div class="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:border-emerald-600/40 hover:text-emerald-600"
            >
              <Github class="h-5 w-5" />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/lehlohonolo-mona-74832b18a"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:border-emerald-600/40 hover:text-emerald-600"
            >
              <Linkedin class="h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
