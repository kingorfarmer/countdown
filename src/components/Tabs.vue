<template>
    <div>
        <div>
            <span>{{ title }}</span>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="postcss">

</style>