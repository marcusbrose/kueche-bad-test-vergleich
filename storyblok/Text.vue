<script setup>
const props = defineProps({ blok: Object })
const { render } = useStoryblokRichText({
  // options like resolvers
})

const root = () => render(props.blok.text)
</script>

<template>
  <div class="prose">
    <root />
  </div>
</template>