<template>
  <header
    class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-2xl transition-all duration-300"
    :class="[
      scrolled
        ? 'scale-[0.98] bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg shadow-emerald-500/5 border border-white/30 dark:border-slate-700/40'
        : 'scale-100 bg-emerald-500/10 backdrop-blur-2xl shadow-xl shadow-emerald-500/10 border border-emerald-400/20'
    ]"
  >
    <!-- Glass Gradient Overlay -->
    <div
      class="pointer-events-none absolute inset-0 rounded-6xl bg-gradient-to-r from-emerald-400/5 via-transparent to-emerald-400/5"
    ></div>

    <div class="relative flex items-center justify-between px-6 py-4 md:px-8">
      
      <!-- Logo -->
      <a href="#home" class="text-xl font-bold text-emerald-600">
        <span class="text-slate-900 dark:text-white">
          &lt;lehlohonolo-</span>mona /&gt;
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden items-center gap-8 md:flex">
        <a
          v-for="l in navLinks"
          :key="l.href"
          :href="l.href"
          class="text-sm font-medium text-slate-700 transition-colors hover:text-emerald-600 dark:text-slate-300"
        >
          {{ l.label }}
        </a>

        <!-- Dark Mode Button -->
        <button
          @click="toggleDark"
          class="rounded-full p-2 text-slate-700 transition-colors hover:bg-emerald-500/10 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-emerald-400/10"
          aria-label="Toggle theme"
          type="button"
        >
          <Sun v-if="dark" :size="18" />
          <Moon v-else :size="18" />
        </button>
      </nav>

      <!-- Mobile Controls -->
      <div class="flex items-center gap-2 md:hidden">

        <!-- Dark Mode -->
        <button
          @click="toggleDark"
          class="rounded-full p-2 text-slate-700 hover:text-emerald-600 dark:text-slate-300"
          aria-label="Toggle theme"
          type="button"
        >
          <Sun v-if="dark" :size="18" />
          <Moon v-else :size="18" />
        </button>

        <!-- Burger Menu -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="text-slate-900 dark:text-white"
          aria-label="Menu"
          type="button"
        >
          <X v-if="mobileOpen" :size="24" />
          <Menu v-else :size="24" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="mobileOpen"
        class="flex flex-col gap-4 border-t border-emerald-400/20 bg-white/70 px-6 py-6 backdrop-blur-xl dark:bg-slate-900/70 md:hidden"
      >
        <a
          v-for="l in navLinks"
          :key="l.href"
          :href="l.href"
          @click="closeMobile"
          class="text-sm font-medium text-slate-700 transition-colors hover:text-emerald-600 dark:text-slate-300"
        >
          {{ l.label }}
        </a>
      </nav>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
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

/* -----------------------
   Dark Mode Setup
-----------------------*/
onMounted(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    dark.value = true;
    document.documentElement.classList.add("dark");
  }

  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function toggleDark() {
  dark.value = !dark.value;

  if (dark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

/* -----------------------
   Scroll Detection
-----------------------*/
function handleScroll() {
  scrolled.value = window.scrollY > 10;
}

/* -----------------------
   Close Mobile Menu
-----------------------*/
function closeMobile() {
  mobileOpen.value = false;
}
</script>