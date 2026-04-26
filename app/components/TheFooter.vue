<template>
  <footer class="bg-[#FDFBF7] dark:bg-stone-950 w-full border-t border-stone-200 dark:border-stone-800 rounded-t-[48px]">
    <div class="flex flex-col md:flex-row justify-between items-center px-12 py-16 max-w-[1200px] mx-auto gap-8">
      <div class="text-xl font-bold text-[#0D4D4D] dark:text-teal-400 font-serif">{{ brandName }}</div>
      <p class="font-serif text-sm uppercase tracking-widest text-stone-500 dark:text-stone-500 text-center">
        &copy; {{ copyright }}
      </p>
      <div class="flex gap-8">
        <a
          v-for="link in resolvedLinks"
          :key="link.label"
          :href="link.url"
          class="font-serif text-sm uppercase tracking-widest text-stone-500 dark:text-stone-500 hover:text-[#0D4D4D] dark:hover:text-teal-300 transition-colors"
        >{{ link.label }}</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { SocialLinkItem } from '~/queries/homepage'

const props = defineProps<{
  brandName?: string | null
  copyright?: string | null
  socialLinks?: SocialLinkItem[] | null
}>()

const brandName = computed(() => props.brandName ?? 'Lead Architect')
const copyright = computed(() => props.copyright ?? '2024 Systems Engineering. Built with precision and intent.')

interface Link { label: string; url: string }

const resolvedLinks = computed<Link[]>(() => {
  if (!props.socialLinks?.length) return []
  return props.socialLinks.map((l) => ({ label: l.label, url: l.url }))
})
</script>
