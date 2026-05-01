<template>
  <template v-if="page">
    <meta property='prepr:id' :content="page._id"/>

    <component
        v-for="(element, index) in page.content"
        :key="element._id || index"
        :is="getComponent(element.__typename)"
        v-bind="getProps(element)"
    />
  </template>
</template>

<script setup lang="ts">
import {GET_PAGE_BY_SLUG} from '~/queries/page'
import HeroSection from '~/components/HeroSection.vue'
import LeadershipPhilosophy from '~/components/LeadershipPhilosophy.vue'
import CoreCompetencies from '~/components/CoreCompetencies.vue'
import ContactSection from '~/components/ContactSection.vue'

const route = useRoute()
const {query} = usePrepr()

const slug = computed(() => {
  const s = route.params.slug
  if (Array.isArray(s)) {
    return s.join('/')
  }
  return s || ''
})

const {data: page} = await useAsyncData<any | null>(`page-${slug.value}`, async () => {
  try {
    const result = await query<{ Page: any }>(GET_PAGE_BY_SLUG, {slug: slug.value})

    if (result?.Page) {
      return result.Page
    }

    return null
  } catch {
    return null
  }
})

console.log('page', slug.value, page.value)

const getComponent = (typename: string) => {
  switch (typename) {
    case 'HeroSection':
      return HeroSection
    case 'LeadershipPhilosophy':
      return LeadershipPhilosophy
    case 'CoreCompetencies':
      return CoreCompetencies
    case 'ContactSection':
      return ContactSection
    default:
      return null
  }
}

const getProps = (element: any) => {
  if (element.__typename === 'HeroSection') {
    return {
      badge: element.badge,
      headline: element.headline,
      subheading: element.subheading,
      portraitUrl: element.portrait?.url,
      statsNumber: element.stats_number,
      statsLabel: element.stats_label,
      statsSubtitle: element.stats_subtitle,
      primaryCta: element.primary_cta,
      secondaryCta: element.secondary_cta,
      links: element.links
    }
  }
  if (element.__typename === 'LeadershipPhilosophy') {
    return {
      headline: element.headline,
      body: element.body,
      valueCards: element.value_cards,
      quote: element.quote,
      quoteAttribution: element.quote_attribution
    }
  }
  if (element.__typename === 'CoreCompetencies') {
    return {
      headline: element.headline,
      subtitle: element.subtitle,
      cards: element.competency_cards
    }
  }
  if (element.__typename === 'ContactSection') {
    return {
      headline: element.headline,
      subheading: element.subheading,
      email: element.email,
      location: element.location
    }
  }
  return element
}
</script>
