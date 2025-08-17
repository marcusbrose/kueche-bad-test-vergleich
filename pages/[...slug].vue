<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()
const url = route.path.substring(1) || 'home'
const { pending, error, story } = await useAsyncStoryblok(url, {
  api: {
    version: config.public.storyblokDeliveryVersion as 'draft' | 'published' || 'published', // 'draft' or 'published'
  },
  bridge: {
    resolveRelations: [],
    resolveLinks: 'url',
  }
})

</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <StoryblokComponent v-else :blok="story.content" />
  <pre>{{ config.public }}</pre>
</template>