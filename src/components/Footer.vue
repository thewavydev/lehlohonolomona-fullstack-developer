
<template>
  <footer class="border-t">
    <div class="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600">
      <p>© {{ year }} My Portfolio. Built with Vue 3 + Tailwind.</p>
    </div>
  </footer>
</template>
<script setup>
const year = new Date().getFullYear();
</script>
