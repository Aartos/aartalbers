<template>
  <div class="font-body-md text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
    <NuxtRouteAnnouncer />
    <TheNavBar
        :brand-name="page?.brand_name"
    />
    <main class="mt-32">
      <NuxtPage />
    </main>
    <TheFooter
      :brand-name="page?.brand_name"
      :copyright="page?.footer_copyright"
      :links="page?.footer_links"
    />
  </div>
</template>

<script setup lang="ts">
import { GET_PAGE_BY_SLUG } from '~/queries/page'

const { query } = usePrepr()

const { data: page } = await useAsyncData<any | null>('homepage', async () => {
  try {
    const result = await query<{ Page: any }>(GET_PAGE_BY_SLUG, { slug: '/' })
    return result?.Page ?? null
  } catch {
    return null
  }
})

provide('brandName', computed(() => page.value?.brand_name))
provide('links', computed(() => page.value?.footer_links))
</script>
