<template>
  <section class="max-w-[1200px] mx-auto px-8 pb-32">
    <div class="bg-white rounded-xl overflow-hidden shadow-2xl border border-stone-100 grid md:grid-cols-2">
      <div class="p-16 bg-[#FDFBF7] flex flex-col justify-center space-y-8">
        <h2 class="font-headline-xl text-headline-xl text-primary-container">
          Let's build <br />
          <span class="text-secondary">the future.</span>
        </h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant">
          Currently open to fractional leadership roles or senior-level architectural consulting.
        </p>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-primary-container/5 rounded-full flex items-center justify-center text-primary-container">
              <span class="material-symbols-outlined">mail</span>
            </div>
            <span class="font-headline-md text-body-md">hello@leadarchitect.systems</span>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-primary-container/5 rounded-full flex items-center justify-center text-primary-container">
              <span class="material-symbols-outlined">location_on</span>
            </div>
            <span class="font-headline-md text-body-md">Remote / London, UK</span>
          </div>
        </div>
      </div>
      <div class="p-16 bg-white">
        <form class="space-y-6">
          <div class="space-y-2">
            <label class="font-label-md text-label-md uppercase text-on-surface-variant">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              class="w-full px-6 py-4 rounded-full border border-stone-200 focus:ring-2 focus:ring-primary-container focus:outline-none transition-all"
            />
          </div>
          <div class="space-y-2">
            <label class="font-label-md text-label-md uppercase text-on-surface-variant">Email Address</label>
            <input
              type="email"
              placeholder="john@company.com"
              class="w-full px-6 py-4 rounded-full border border-stone-200 focus:ring-2 focus:ring-primary-container focus:outline-none transition-all"
            />
          </div>
          <div class="space-y-2">
            <label class="font-label-md text-label-md uppercase text-on-surface-variant">Project Brief</label>
            <textarea
              rows="4"
              placeholder="Tell me about your architectural needs..."
              class="w-full px-6 py-4 rounded-xl border border-stone-200 focus:ring-2 focus:ring-primary-container focus:outline-none transition-all"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-secondary-container text-on-secondary-container font-headline-md text-headline-md py-6 rounded-full hover:bg-secondary-fixed transition-all active:scale-[0.98]"
          >
            Initiate Connection
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
