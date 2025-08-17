<script setup lang="ts">
const route = useRoute()
const url = route.path.substring(1) || 'home'
const { pending, error, story } = await useAsyncStoryblok(url, {
  api: {
    version: 'draft', // or 'published'
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
</template>