<template>
  <div class="font-body-md text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
    <NuxtRouteAnnouncer />
    <TheNavBar
        :brand-name="page?.brand_name"
    />
    <main class="mt-32">
      <HeroSection
        :badge="page?.hero_badge"
        :headline="page?.hero_headline"
        :subheading="page?.hero_subheading"
        :portrait-url="page?.hero_portrait?.url"
        :stats-number="page?.hero_stats_number"
        :stats-label="page?.hero_stats_label"
        :stats-subtitle="page?.hero_stats_subtitle"
        :primary-cta="page?.hero_primary_cta"
        :secondary-cta="page?.hero_secondary_cta"
        :social-links="page?.footer_social_links"
      />
      <LeadershipPhilosophy
        :headline="page?.philosophy_headline"
        :body="page?.philosophy_body"
        :value-cards="page?.philosophy_value_cards"
        :quote="page?.philosophy_quote"
        :quote-attribution="page?.philosophy_quote_attribution"
      />
      <CoreCompetencies
        :headline="page?.competencies_headline"
        :subtitle="page?.competencies_subtitle"
        :cards="page?.competency_cards"
      />
      <ContactSection
        :headline="page?.contact_headline"
        :subheading="page?.contact_subheading"
        :email="page?.contact_email"
        :location="page?.contact_location"
      />
    </main>
    <TheFooter
      :brand-name="page?.brand_name"
      :copyright="page?.footer_copyright"
      :social-links="page?.footer_social_links"
    />
  </div>
</template>

<script setup lang="ts">
import { GET_HOMEPAGE } from '~/queries/homepage'
import type { HomePage } from '~/queries/homepage'

const { query } = usePrepr()

const { data: page } = await useAsyncData<HomePage | null>('homepage', async () => {
  try {
    const result = await query<{ HomePage: HomePage }>(GET_HOMEPAGE)
    return result?.HomePage ?? null
  } catch {
    return null
  }
})
</script>
