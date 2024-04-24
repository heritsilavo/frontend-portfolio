<script setup>
    const showSendMessage=useshowSendMessage()
    function sendMessage() {
        showSendMessage.value=true    
    }
</script>

<template>
    <div class="col-12 d-flex flex-column align-items-center justify-content-between __footer_container__">
        <div class="d-flex align-items-center justify-content-center col-12 flex-grow-1">
            <div class="d-none d-md-flex flex-column align-items-start justify-content-start m-2 col-0 col-md-3 ">
                <NuxtLink external to="/#_sec2_"> <span class="p-2 __footer_menu_link__">A propos de moi</span> </NuxtLink>
                <NuxtLink external to="/#_sec3_"> <span class="p-2 __footer_menu_link__">Mes projets</span> </NuxtLink>
                <NuxtLink external to="/#_sec4_"> <span class="p-2 __footer_menu_link__">Mes services</span> </NuxtLink>
            </div>

            <div class="m-2 col-11 col-md-7 d-flex align-items-center justify-content-between">
                <div class="col-5 d-flex flex-column align-items-start justify-content-start">
                    <span> <span>Email :</span>     <span class="badge" >heritsilavo4835@gmail.com</span> </span>
                    <span> <span>Tél :</span>       <span class="badge" >+261342631778</span> </span>
                    <span> <span>Facebook :</span>  <span class="badge" >heritsilavo ANDRIANTSILAVINA</span> </span>
                </div>
                <div class="col-6 d-flex flex-column align-items-end justify-content-between">
                    <button @click="sendMessage" class="btn btn-secondary mt-2">M'envoyer un message !</button>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column align-items-center justify-content-center col-12">
            <div class="col-10 col-sm-8 col-md-4 col-lg-3 mt-1 border"></div>
            Edité par Heritsilavo le 2024
        </div>
    </div>
</template>

<style scoped>
.__footer_container__{
    height: 200px;
    background: linear-gradient(#080414,#04010C);
    color: whitesmoke;
}
.__footer_menu_link__{
    cursor: pointer;
    color: whitesmoke;
}
.__footer_menu_link__ a{
    text-decoration: none;
}
#message{
    background: transparent;
    color: whitesmoke
}
</style>