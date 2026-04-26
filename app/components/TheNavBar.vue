<template>
  <nav class="fixed top-0 w-full z-50 bg-[#FDFBF7] dark:bg-stone-950/80 backdrop-blur-md border-b border-stone-200/50 dark:border-stone-800/50 shadow-[0_20px_40px_-15px_rgba(13,77,77,0.04)]">
    <div class="flex justify-between items-center w-full px-8 py-6 max-w-[1200px] mx-auto">
      <div class="text-2xl font-bold font-serif text-[#0D4D4D] dark:text-teal-400">{{ brandName }}</div>
      <div class="hidden md:flex gap-12 items-center">
        <a
          href="#"
          class="font-serif text-lg tracking-tight text-[#0D4D4D] dark:text-teal-400 font-bold relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-[#B37000] after:rounded-full"
        >Systems</a>
        <a href="#" class="font-serif text-lg tracking-tight text-stone-600 dark:text-stone-400 hover:text-[#0D4D4D] dark:hover:text-teal-300 transition-all duration-300">Infrastructure</a>
        <a href="#" class="font-serif text-lg tracking-tight text-stone-600 dark:text-stone-400 hover:text-[#0D4D4D] dark:hover:text-teal-300 transition-all duration-300">Strategy</a>
        <a href="#" class="font-serif text-lg tracking-tight text-stone-600 dark:text-stone-400 hover:text-[#0D4D4D] dark:hover:text-teal-300 transition-all duration-300">Journal</a>
      </div>
      <button class="bg-[#0D4D4D] text-white px-8 py-3 rounded-full font-serif text-lg tracking-tight hover:bg-[#104f4f] transition-all active:scale-95">
        Get in Touch
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  brandName?: string | null
}>()

const brandName = computed(() => props.brandName ?? 'Lead Architect')
</script>
