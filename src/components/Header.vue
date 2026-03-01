<script setup>
import { ref } from "vue";
import { Menu, X, Sun, Moon } from "lucide-vue-next";

const navLinks = [
  { label: "Home.vue", href: "#home" },
  { label: "About.vue", href: "#about" },
  { label: "Skills.vue", href: "#skills" },
  { label: "Projects.vue", href: "#projects" },
  { label: "Architecture.vue", href: "#architecture" },
  { label: "Contact.vue", href: "#contact" },
];

const mobileOpen = ref(false);
const dark = ref(false);
const scrolled = ref(false);
</script>

<template>
  <header
    class="fixed left-0 right-0 top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <a href="#home" class="text-xl font-bold text-emerald-600">
        <span class="text-slate-900"> &lt;lehlohonolo-</span>mona /&gt;
      </a>

      <nav class="hidden items-center gap-8 md:flex">
        <a
          v-for="l in navLinks"
          :key="l.href"
          :href="l.href"
          class="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600"
        >
          {{ l.label }}
        </a>

        <button
          class="rounded-full p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-emerald-600"
          aria-label="Toggle theme"
          type="button"
        >
          <!-- <Sun v-if="dark" :size="18" />
          <Moon v-else :size="18" /> -->
        </button>
      </nav>

      <div class="flex items-center gap-2 md:hidden">
        <button
          class="rounded-full p-2 text-slate-600 hover:text-emerald-600"
          aria-label="Toggle theme"
          type="button"
        >
          <Sun v-if="dark" :size="18" />
          <Moon v-else :size="18" />
        </button>

        <button class="text-slate-900" aria-label="Menu" type="button">
          <X v-if="mobileOpen" :size="24" />
          <Menu v-else :size="24" />
        </button>
      </div>
    </div>

    <nav
      v-if="mobileOpen"
      class="flex flex-col gap-4 border-t border-slate-200 bg-white px-6 py-6 md:hidden"
    >
      <a
        v-for="l in navLinks"
        :key="l.href"
        :href="l.href"
        class="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600"
      >
        {{ l.label }}
      </a>
    </nav>
  </header>
</template>
