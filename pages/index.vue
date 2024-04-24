<script setup>
    useHead({
        title:"Heritsilavo",
        link:[{rel:'icon',href:'/logo.png'}]
    })
</script>

<template>
    <NuxtLayout>
        <Acceuil></Acceuil>
        <Apropos></Apropos>
        <Projets></Projets>
        <Services></Services>
        <Footer></Footer>
    </NuxtLayout>
</template>

<style scoped>
    *{
        transition: all .2s;
    }
</style>