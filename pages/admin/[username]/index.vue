<script setup>
definePageMeta({
    middleware:[
        function(to,from) {
            console.log("Cet user peut entrer: ",to.params.username);
        }
    ]
})
</script>

<template>
    ...
</template>