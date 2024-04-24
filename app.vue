<template>
  <NuxtPage></NuxtPage>
</template>

<script setup>
  let showNav=useShowNav()

  onMounted(function() {
    console.log(showNav.value);
    let lastScrollValue=0
    const rootElement=document.getElementById("__nuxt")
    if (rootElement) {
      rootElement?.addEventListener('scroll',function(event) {
        if (rootElement?.scrollTop < lastScrollValue) showNav.value=true
        else showNav.value=false

        lastScrollValue=rootElement.scrollTop
      })
    }    
  })


</script>