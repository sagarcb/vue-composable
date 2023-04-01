<script setup>
import {reactive, ref, toRef} from "vue";
// import counterMixin from "@/mixins/counter";
//
// const {count,incrementCount} = counterMixin();
import userCounter from "@/composables/useCounter";

const {count, incrementCount} = userCounter(50,15);

</script>

<template>
    <div>
        <h2 @mouseover="incrementCount">Hovered {{count}} times</h2>
    </div>
</template>

<style scoped>

</style>
