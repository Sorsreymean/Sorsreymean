<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <SectionQA />
    <SectionAskQuetion />
    <SectionQuetions />
  </div>
</template>

<script>
export default {
  head: {
    title: 'my website Slug',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}
</script>

<style></style>
