<template>
<div>
    <Termofuse></Termofuse>
    <TermText></TermText>
    <Termbox></Termbox>
</div>
</template>

<script>
import Termofuse from '../../components/Section/termofuse.vue';
import TermText from '../../components/Section/term-text.vue';
import Termbox from '../../components/Section/termbox.vue';
export default {
    components: { Termofuse, TermText, Termbox }
}
</script>

<style>

</style>