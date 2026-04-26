<template>
  <section class="max-w-[1200px] mx-auto px-8 py-32">
    <div class="text-center mb-20">
      <h2 class="font-headline-xl text-headline-xl text-primary-container mb-4">{{ headline }}</h2>
      <p class="font-body-lg text-body-lg text-on-surface-variant">{{ subtitle }}</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <template v-for="(card, index) in resolvedCards" :key="index">
        <!-- Featured large card (col-span-2, with image) -->
        <div
          v-if="card.is_featured"
          class="md:col-span-2 bg-white p-padding-card rounded-xl shadow-[0_20px_40px_-15px_rgba(13,77,77,0.04)] border border-stone-100 flex flex-col md:flex-row gap-8 items-center"
        >
          <div class="flex-1 space-y-6">
            <div class="inline-block bg-primary-container/10 text-primary-container px-4 py-1 rounded-full font-label-md text-label-md uppercase">
              {{ card.category }}
            </div>
            <h3 class="font-headline-lg text-headline-lg">{{ card.title }}</h3>
            <p class="font-body-md text-body-md text-on-surface-variant">{{ card.description }}</p>
            <div v-if="card.tags?.length" class="flex flex-wrap gap-2">
              <span
                v-for="tag in card.tags"
                :key="tag.body"
                class="px-4 py-2 bg-stone-100 rounded-full text-sm font-bold"
              >{{ tag.body }}</span>
            </div>
          </div>
          <div v-if="card.imageUrl" class="w-full md:w-1/3 aspect-square rounded-lg overflow-hidden">
            <img :alt="card.title" class="w-full h-full object-cover" :src="card.imageUrl" />
          </div>
        </div>

        <!-- Secondary background card (tall) -->
        <div
          v-else-if="card.background_style === 'secondary'"
          class="bg-secondary-fixed text-on-secondary-fixed p-padding-card rounded-xl flex flex-col justify-between"
        >
          <div class="space-y-6">
            <span class="material-symbols-outlined text-4xl">database</span>
            <h3 class="font-headline-md text-headline-md">{{ card.title }}</h3>
            <p class="font-body-md text-body-md">{{ card.description }}</p>
          </div>
          <button class="mt-8 flex items-center gap-2 font-bold group">
            Case Studies
            <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>

        <!-- Primary background card -->
        <div
          v-else-if="card.background_style === 'primary'"
          class="bg-primary-container p-padding-card rounded-xl text-white"
        >
          <h3 class="font-headline-md text-headline-md mb-4">{{ card.title }}</h3>
          <p class="font-body-md text-body-md text-white/70">{{ card.description }}</p>
        </div>

        <!-- Default white card -->
        <div
          v-else
          class="bg-white p-padding-card rounded-xl shadow-[0_20px_40px_-15px_rgba(13,77,77,0.04)] border border-stone-100"
        >
          <h3 class="font-headline-md text-headline-md mb-4">{{ card.title }}</h3>
          <p class="font-body-md text-body-md text-on-surface-variant">{{ card.description }}</p>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { CompetencyCardItem } from '~/queries/homepage'

const props = defineProps<{
  headline?: string | null
  subtitle?: string | null
  cards?: CompetencyCardItem[] | null
}>()

const headline = computed(() => props.headline ?? 'Core Competencies')
const subtitle = computed(() => props.subtitle ?? 'The tools and methodologies that define my output.')

interface ResolvedCard {
  category?: string
  title: string
  description: string
  imageUrl?: string
  tags?: { body: string }[]
  background_style?: 'white' | 'secondary' | 'primary'
  is_featured?: boolean
}

const defaultCards: ResolvedCard[] = [
  {
    category: 'Distributed Systems',
    title: 'Cloud Infrastructure & Microservices',
    description: 'Specializing in Kubernetes orchestration, AWS serverless patterns, and event-driven architecture with Kafka and RabbitMQ.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYnUC5EAmO6VAbjePgg8nBvhOkyuaBs6Zak_u-dm_egORhF4qard1UNbtgwECyWl6b3BQwLvNZr4Q_sDYnX5KlBzWaNFQAe8-g9Rji-wqnnpGFoRQdTIE4sn5Be_DFYFy93WCIeqPIw821jB-8SCPYAXMAJMGVTGexE7bY8wVt3-9iRdr3n7SgVRYyddeHs_a0lqZjpJwsklNqWL-B2tAGOgo1eOxRrRvb8SSJ9S-KWiro5qSDU4KYAIAQ0OskT5h1a54AQe5aQPE',
    tags: [{ body: 'AWS' }, { body: 'Kubernetes' }, { body: 'Terraform' }],
    background_style: 'white',
    is_featured: true,
  },
  {
    title: 'Data Resilience',
    description: 'Advanced PostgreSQL tuning, Redis caching strategies, and NoSQL modeling for high-throughput applications.',
    background_style: 'secondary',
    is_featured: false,
  },
  {
    title: 'Go & Rust',
    description: 'Writing high-performance, memory-safe backend services with a focus on concurrency.',
    background_style: 'white',
    is_featured: false,
  },
  {
    title: 'Observability',
    description: 'Implementing Prometheus, Grafana, and ELK stacks for real-time system health tracking.',
    background_style: 'white',
    is_featured: false,
  },
  {
    title: 'Security First',
    description: 'SOC2 compliance, OAuth2 implementation, and rigorous penetration testing protocols.',
    background_style: 'primary',
    is_featured: false,
  },
]

const resolvedCards = computed<ResolvedCard[]>(() => {
  if (!props.cards?.length) return defaultCards
  return props.cards.map((c) => ({
    category: c.category,
    title: c.title,
    description: c.description,
    imageUrl: c.image?.url,
    tags: c.tags,
    background_style: c.background_style,
    is_featured: c.is_featured,
  }))
})
</script>
