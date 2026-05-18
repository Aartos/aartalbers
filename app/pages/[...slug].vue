<template>
  <template v-if="page">
    <meta property='prepr:id' :content="page._id"/>

    <component
        v-for="(element, index) in page.content"
        :key="element._id || index"
        :is="getComponent(element)?.component"
        v-bind="getComponent(element)?.props"
    />
  </template>
</template>

<script setup lang="ts">
import {GET_PAGE_BY_SLUG, type Page} from '~/queries/page'
import HeroSection from '~/components/sections/HeroSection.vue'
import LeadershipPhilosophy from '~/components/sections/LeadershipPhilosophy.vue'
import CoreCompetencies from '~/components/sections/CoreCompetencies.vue'
import ContactSection from '~/components/sections/ContactSection.vue'

// Compute the slug from the route params
const route = useRoute()
const slug = computed(() => {
  const s = route.params.slug
  if (Array.isArray(s)) {
    return s.join('/')
  }
  return s || '/'
})

// Fetch the page data using the slug
const {query} = usePrepr()
const {data: page} = await useAsyncData<any | null>(`page-${slug.value}`, async () => {
  try {
    const result = await query<{ Page: Page }>(GET_PAGE_BY_SLUG, {slug: slug.value})

    if (result?.Page) {
      return result.Page
    }

    return null
  } catch {
    return null
  }
})

// Map the component and props for each page element
const getComponent = (element: any) => {
  let components = [
    {
      name: 'HeroSection',
      component: HeroSection,
      props: {
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
    },
    {
      name: 'LeadershipPhilosophy',
      component: LeadershipPhilosophy,
      props: {
        headline: element.headline,
        body: element.body,
        valueCards: element.value_cards,
        quote: element.quote,
        quoteAttribution: element.quote_attribution
      }
    },
    {
      name: 'CoreCompetencies',
      component: CoreCompetencies,
      props: {
        headline: element.headline,
        subtitle: element.subtitle,
        cards: element.competency_cards
      }
    },
    {
      name: 'ContactSection',
      component: ContactSection,
      props: {
        headline: element.headline,
        subheading: element.subheading,
        email: element.email,
        location: element.location
      }
    },
  ];

  // Find based on `element.__typename`.
  return components.find((component) => component.name === element.__typename) ?? null;
};
</script>
