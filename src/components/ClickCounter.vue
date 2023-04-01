<script setup>
// import counterMixin from "@/mixins/counter";
// const {count,incrementCount} = counterMixin();
import userCounter from "@/composables/useCounter";

const {count, incrementCount} = userCounter(100, 10);
</script>


<template>
    <div>
        <button @click="incrementCount">Clicked {{count}} times</button>
    </div>
</template>

<style scoped>

</style>
