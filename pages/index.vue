<script setup>
    let projets=useProject()
    

    useHead({
        title:"Heritsilavo",
        link:[{rel:'icon',href:'/logo.png'}]
    })

    const { pending, data } = await useFetch('https://heritsilavo-abeurkzi.b4a.run/projets', {
        lazy: true
    })

    projets.value=data.value


    //send messages
    let author=ref("")
    let content=ref('')
    let disableBtnSemdMsg=ref(true)
    let showSendMessage=useshowSendMessage()
    
    const cancelSendMsg=function() {
        author.value=""
        content.value=""
        showSendMessage.value=false
    }

    const setAnonyme=function (event) {
        event.preventDefault()
        author.value="Anonyme"
    }

    const handleSendMessage=async function(event) {
        event.preventDefault()
        const today=new Date()
        const newMessage={
            "date": today.toISOString(),
            "auteur": author.value,
            "contenu": content.value
        }
        showSendMessage.value=false
        const { data, pending, error, refresh } = await useFetch('https://heritsilavo-abeurkzi.b4a.run/messages', {
            method:"post",
            body:newMessage
        })
        author.value=""
        content.value=""
    }

    watch([author,content],function(value) {
        disableBtnSemdMsg.value=(value[0].trim()=="" || value[1].trim()=="")
    })
    //...
</script>

<template>
    <div :class="'d-flex align-items-center justify-content-center _getnom_overlay_ '+(showSendMessage?'':' _hideSendMessage_ ')">
       <form @submit="handleSendMessage" class="d-flex flex-column align-items-center justify-content-start border rounded-2 col-10 col-sm-6 col-md-5 col-lg-4 __getnom_form__">
            
            <h5>M'envoyer un message</h5>
    
            <div class="mt-2 col-10 input-box">
                <label for="Auteur" class="form-label">Auteur du message</label>
                <div class="input-group">
                    <input v-model="author" type="text" name="Auteur" id="Auteur" class="form-control">
                    <button @click="setAnonyme" class="btn btn-secondary"> Anonyme </button>
                </div>
            </div>

            <div class="mt-2 col-10 input-box">
                <label for="Contenu" class="form-label">Contenu du message</label>
                <textarea v-model="content" name="Contenu" id="Contenu" class="form-control"></textarea>
            </div>
       
            <div class="col-10 mt-2 mb-2 d-flex align-items-center justify-content-between">
                <button @click="cancelSendMsg" type="reset" class="btn btn-danger">Annuler</button>
                <button :disabled="disableBtnSemdMsg" class="btn btn-primary">Envoyer</button>
            </div>
        </form>
    </div>
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
    ._getnom_overlay_{
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(20, 18, 18, 0.664);
        z-index: 99999;
        transition: all .1s;
        transform-origin: center;
    }
    .__getnom_form__{
        background: #080821;
        color: antiquewhite;
        max-height: 80%;
    }
    ._hideSendMessage_{
        transform: scale(0)
    }

    textarea{
        max-height: 150px;
    }
</style>