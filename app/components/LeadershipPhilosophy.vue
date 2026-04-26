<template>
  <section id="philosophy" class="bg-primary-container py-32 rounded-[4rem] mx-4 overflow-hidden relative">
    <div class="absolute top-0 right-0 w-1/3 h-full opacity-10">
      <img
        alt="Abstract Code Pattern"
        class="w-full h-full object-cover grayscale"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzhA3Orsqo9ZQ6hxkdkhfgb9QnMHeJfh2Z_Ys74femAcfgMod5kjmAV6jKPxYeTCfNeLvfUO1XnDpROAinIufurtimTzTI7nL0YG8WwWk8JtswoVOGzKBMtCKz-2mKn3ZW1OpyIF8X8FLkIZiTPjMqEWWmkv-mqOmb2mq9RsVDMJ2EAfSrSVJP_B-fT6BxrszncjNRQ054ipsm3hxt03B1Vy58aOzwCs7UP2Lxbu65YMr6g5nTVjm8nKJNz_fO5bHim0skA1HmmiY"
      />
    </div>
    <div class="max-w-[1200px] mx-auto px-8 relative z-10">
      <div class="grid md:grid-cols-12 gap-12 items-end">
        <div class="md:col-span-7 space-y-12">
          <div class="space-y-6">
            <h2 class="font-headline-xl text-headline-xl text-white" v-html="headlineHtml" />
            <p class="font-body-lg text-body-lg text-on-primary-container/80 leading-relaxed">
              {{ body }}
            </p>
          </div>
          <div class="grid grid-cols-2 gap-8">
            <div
              v-for="(card, index) in resolvedValueCards"
              :key="index"
              class="col-span-5 sm:col-span-1 p-8 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm"
            >
              <span class="material-symbols-outlined text-secondary-fixed mb-4">{{ card.icon }}</span>
              <h3 class="font-headline-md text-headline-md text-white mb-2">{{ card.title }}</h3>
              <p class="font-body-md text-body-md text-white/60">{{ card.description }}</p>
            </div>
          </div>
        </div>
        <div class="md:col-span-5 flex justify-end">
          <div class="bg-secondary-fixed p-12 rounded-[3rem] text-on-secondary-fixed shadow-2xl">
            <span class="material-symbols-outlined text-5xl mb-6">format_quote</span>
            <p class="font-headline-md text-headline-md italic mb-8">
              "{{ quote }}"
            </p>
            <p class="font-label-md text-label-md uppercase tracking-widest font-bold">— {{ quoteAttribution }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ValueCardItem } from '~/queries/homepage'

const props = defineProps<{
  headline?: string | null
  body?: string | null
  valueCards?: ValueCardItem[] | null
  quote?: string | null
  quoteAttribution?: string | null
}>()

const headlineHtml = computed(() => {
  if (props.headline) return props.headline
  return 'Philosophy of <br /><span class="text-secondary-fixed">Deep Systems</span>'
})

const body = computed(() => props.body ?? 'I believe backend architecture is an exercise in empathy. We build systems not just to handle loads, but to provide reliability to users and maintainability to developers. My leadership focuses on radical transparency and technical rigor.')

const quote = computed(() => props.quote ?? 'Complexity is a tax on productivity. My role is to simplify the core so the edges can flourish.')

const quoteAttribution = computed(() => props.quoteAttribution ?? "THE ARCHITECT'S CREED")

interface ValueCard {
  icon: string
  title: string
  description: string
}

const defaultValueCards: ValueCard[] = [
  { icon: 'psychology', title: 'Team Growth', description: 'Mentorship through pair programming and architectural reviews.' },
  { icon: 'hub', title: 'Scalability', description: "Designing for tomorrow's scale without over-engineering today." },
]

const resolvedValueCards = computed<ValueCard[]>(() => {
  if (!props.valueCards?.length) return defaultValueCards
  return props.valueCards.map((c) => ({
    icon: c.icon,
    title: c.title,
    description: c.description,
  }))
})
</script>
