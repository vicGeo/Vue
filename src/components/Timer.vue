<template>
    <div>
        <p>{{ timer }}</p>
    </div>
</template>

<script>
export default {
    name: 'Timer',
    props: ['timer', 'state']
}
</script>