<template>
<div>
  <Privacy></Privacy>
  <TermText></TermText>
  <Privacybox></Privacybox>
</div>
</template>

<script>
import Privacy from '../../components/Section/privacy.vue'
import TermText from '../../components/Section/term-text.vue'
import Privacybox from '../../components/Section/privacybox.vue'
export default {
    components:{ Privacy, TermText, Privacybox }
}
</script>

<style>

</style>