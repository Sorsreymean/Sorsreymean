<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="pt-[20px]">
    <SectionHero />
    <SectionFeature />
    <SectionFaceAzureDesktopAndOnline />
    <SectionTitle />
    <SectionQuickBooksDesktopAndOnline />
    <SectionTwoProduct />
    <SectionOneProduct />
    <SectionFAQ />
    <SectionConsulting />
  </div>
</template>

<script>

export default {

  head: {
    title: 'FaceAzure - QuickBooks Add-on application',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'content="QuickBooks Add-on to simplify business requirements to be in compliance with Cambodian GDT’s regulations.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'Image/favicon.ico' }]
  }
}
</script>
