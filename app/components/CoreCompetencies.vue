<template>
  <section class="max-w-[1200px] mx-auto px-8 py-32">
    <div class="text-center mb-20">
      <h2 class="font-headline-xl text-headline-xl text-primary-container mb-4">Core Competencies</h2>
      <p class="font-body-lg text-body-lg text-on-surface-variant">The tools and methodologies that define my output.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Large Card -->
      <div class="md:col-span-2 bg-white p-padding-card rounded-xl shadow-[0_20px_40px_-15px_rgba(13,77,77,0.04)] border border-stone-100 flex flex-col md:flex-row gap-8 items-center">
        <div class="flex-1 space-y-6">
          <div class="inline-block bg-primary-container/10 text-primary-container px-4 py-1 rounded-full font-label-md text-label-md uppercase">
            Distributed Systems
          </div>
          <h3 class="font-headline-lg text-headline-lg">Cloud Infrastructure &amp; Microservices</h3>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Specializing in Kubernetes orchestration, AWS serverless patterns, and event-driven architecture with Kafka and RabbitMQ.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-4 py-2 bg-stone-100 rounded-full text-sm font-bold">AWS</span>
            <span class="px-4 py-2 bg-stone-100 rounded-full text-sm font-bold">Kubernetes</span>
            <span class="px-4 py-2 bg-stone-100 rounded-full text-sm font-bold">Terraform</span>
          </div>
        </div>
        <div class="w-full md:w-1/3 aspect-square rounded-lg overflow-hidden">
          <img
            alt="Cloud Systems"
            class="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYnUC5EAmO6VAbjePgg8nBvhOkyuaBs6Zak_u-dm_egORhF4qard1UNbtgwECyWl6b3BQwLvNZr4Q_sDYnX5KlBzWaNFQAe8-g9Rji-wqnnpGFoRQdTIE4sn5Be_DFYFy93WCIeqPIw821jB-8SCPYAXMAJMGVTGexE7bY8wVt3-9iRdr3n7SgVRYyddeHs_a0lqZjpJwsklNqWL-B2tAGOgo1eOxRrRvb8SSJ9S-KWiro5qSDU4KYAIAQ0OskT5h1a54AQe5aQPE"
          />
        </div>
      </div>

      <!-- Vertical Card -->
      <div class="bg-secondary-fixed text-on-secondary-fixed p-padding-card rounded-xl flex flex-col justify-between">
        <div class="space-y-6">
          <span class="material-symbols-outlined text-4xl">database</span>
          <h3 class="font-headline-md text-headline-md">Data Resilience</h3>
          <p class="font-body-md text-body-md">
            Advanced PostgreSQL tuning, Redis caching strategies, and NoSQL modeling for high-throughput applications.
          </p>
        </div>
        <button class="mt-8 flex items-center gap-2 font-bold group">
          Case Studies
          <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>

      <!-- Small Grid Items -->
      <div class="bg-white p-padding-card rounded-xl shadow-[0_20px_40px_-15px_rgba(13,77,77,0.04)] border border-stone-100">
        <h3 class="font-headline-md text-headline-md mb-4">Go &amp; Rust</h3>
        <p class="font-body-md text-body-md text-on-surface-variant">
          Writing high-performance, memory-safe backend services with a focus on concurrency.
        </p>
      </div>
      <div class="bg-white p-padding-card rounded-xl shadow-[0_20px_40px_-15px_rgba(13,77,77,0.04)] border border-stone-100">
        <h3 class="font-headline-md text-headline-md mb-4">Observability</h3>
        <p class="font-body-md text-body-md text-on-surface-variant">
          Implementing Prometheus, Grafana, and ELK stacks for real-time system health tracking.
        </p>
      </div>
      <div class="bg-primary-container p-padding-card rounded-xl text-white">
        <h3 class="font-headline-md text-headline-md mb-4">Security First</h3>
        <p class="font-body-md text-body-md text-white/70">
          SOC2 compliance, OAuth2 implementation, and rigorous penetration testing protocols.
        </p>
      </div>
    </div>
  </section>
</template>
