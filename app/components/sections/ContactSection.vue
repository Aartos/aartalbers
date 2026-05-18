<template>
  <section id="contact" class="max-w-[1200px] mx-auto px-8 pb-32">
    <div class="bg-white rounded-xl overflow-hidden shadow-2xl border border-stone-100">
      <div class="p-16 bg-[#FDFBF7] flex flex-col justify-center space-y-8">
        <h2 class="font-headline-xl text-headline-xl text-primary-container" v-html="headlineHtml"/>
        <p class="font-body-lg text-body-lg text-on-surface-variant" v-html="subheading">
        </p>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-primary-container/5 rounded-full flex items-center justify-center text-primary-container">
              <span class="material-symbols-outlined">mail</span>
            </div>
            <a :href="`mailto:${email}`" :title="`Email sturen naar ${email}`" class="font-headline-md text-body-md tracking-widest text-stone-500 dark:text-stone-500 hover:text-[#0D4D4D] dark:hover:text-teal-300 transition-colors">
              {{ email }}
            </a>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-primary-container/5 rounded-full flex items-center justify-center text-primary-container">
              <span class="material-symbols-outlined">location_on</span>
            </div>
            <span class="font-headline-md text-body-md text-stone-500 dark:text-stone-500">{{ location }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  headline?: string | null
  subheading?: string | null
  email?: string | null
  location?: string | null
}>()

const headlineHtml = computed(() => {
  if (props.headline) return props.headline
  return "Let's build <br /><span class=\"text-secondary\">the future.</span>"
})

const subheading = computed(() => props.subheading ?? 'Currently open to fractional leadership roles or senior-level architectural consulting.')
const email = computed(() => props.email ?? 'hello@leadarchitect.systems')
const location = computed(() => props.location ?? 'Remote / London, UK')
</script>
