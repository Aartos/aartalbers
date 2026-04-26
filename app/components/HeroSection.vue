<template>
  <section class="max-w-[1200px] mx-auto px-8 mb-24 grid md:grid-cols-2 gap-16 items-center">
    <div class="space-y-8">
      <div class="inline-flex items-center gap-2 bg-secondary-container/10 text-secondary px-4 py-1 rounded-full border border-secondary-container/20">
        <span class="material-symbols-outlined text-[18px]">verified</span>
        <span class="font-label-md text-label-md">{{ badge }}</span>
      </div>
      <h1 class="font-headline-xl text-headline-xl text-primary-container leading-tight" v-html="headlineHtml" />
      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
        {{ subheading }}
      </p>
      <div class="flex gap-4">
        <a
            v-for="(link, index) in resolvedLinks"
            :key="link.label"
            :href="link.url"
            target="_blank"
            :class="index === 0
              ? 'bg-primary-container text-on-primary px-10 py-4 rounded-full font-headline-md text-body-md hover:shadow-lg transition-all active:scale-95'
              : 'border-2 border-primary-container/20 text-primary-container px-10 py-4 rounded-full font-headline-md text-body-md hover:bg-stone-50 transition-all active:scale-95'"
        >{{ link.label }}</a>
      </div>
    </div>
    <div class="relative group">
      <div class="absolute -inset-4 bg-secondary-container/5 rounded-[4rem] -z-10 group-hover:bg-secondary-container/10 transition-all duration-700"></div>
      <div class="aspect-square w-full rounded-[4rem] overflow-hidden shadow-2xl">
        <img
          :alt="badge"
          class="w-full h-full object-cover"
          :src="portraitUrl"
        />
      </div>
      <div class="absolute -bottom-8 -right-8 bg-white p-8 rounded-xl shadow-xl border border-stone-100 max-w-[240px]">
        <span class="material-symbols-outlined text-secondary text-4xl mb-2">terminal</span>
        <p class="font-headline-md text-headline-md text-primary-container mb-1">{{ statsNumber }} {{ statsLabel }}</p>
        <p class="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">{{ statsSubtitle }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  badge?: string | null
  headline?: string | null
  subheading?: string | null
  portraitUrl?: string | null
  statsNumber?: string | null
  statsLabel?: string | null
  statsSubtitle?: string | null
  primaryCta?: string | null
  secondaryCta?: string | null
  socialLinks?: SocialLinkItem[] | null
}>()

const badge = computed(() => props.badge ?? 'EXECUTIVE LEADERSHIP')
const subheading = computed(() => props.subheading ?? 'Senior Backend Engineer & Team Lead specializing in distributed systems, high-concurrency architecture, and the human side of technical excellence.')
const portraitUrl = computed(() => props.portraitUrl ?? 'https://lh3.googleusercontent.com/aida-public/AB6AXuBReVHKJvI9ASVaG9FrN-0E_FFuACqzohxhKFnXBKiI2-nfFLw6mSpAK4ERnwCCpksf2EE_K3yG06HMUa96XtvH-XKAw-zkVuT29ONxVKW8BYcYtwfQKQb0M01uNULcUpKSaRCULrxEeOlokC7f1fMbnOtPGQ_AJglKjr23uEMtcJ_z3Pv7-2ydgwpKHcPSY9ukytKTQKv5ECm6VrXsRPiZJTC2enonCRK0ym3piHCp5sPoQoetcJTmZlNjS-9ucc4fBDAFe2ibJsU')
const statsNumber = computed(() => props.statsNumber ?? '12+')
const statsSubtitle = computed(() => props.statsSubtitle ?? 'Architectural Mastery')
const primaryCta = computed(() => props.primaryCta ?? 'View Portfolio')
const secondaryCta = computed(() => props.secondaryCta ?? 'Download CV')

const headlineHtml = computed(() => {
  if (props.headline) return props.headline
  return 'Architecting Resilient <br /><span class="text-secondary italic">Digital Ecosystems</span>'
})


import type { SocialLinkItem } from '~/queries/homepage'
interface Link { label: string; url: string }

const resolvedLinks = computed<Link[]>(() => {
  if (!props.socialLinks?.length) return []
  return props.socialLinks.map((l) => ({ label: l.label, url: l.url }))
})
</script>
