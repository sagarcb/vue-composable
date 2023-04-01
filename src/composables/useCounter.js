import {ref} from 'vue'

export default function userCounter(initialCount, stepSize){
    const count = ref(initialCount);

    const incrementCount = () => {
        count.value = count.value + stepSize;
    };

    return {
        count,
        incrementCount
    }
}