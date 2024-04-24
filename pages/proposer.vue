<script setup>
    const router=useRouter()
    useHead({
        title:"Nouveau Projet",
        link:[{rel:'icon',href:'/logo.png'}]
    })

    let titre=ref("")
    let client=ref("")
    let contact=ref("")
    let description=ref("")
    let disableSubmit=ref(true)
    let loading=ref(false)

    watch([titre,client,contact,description],function(value) {
        disableSubmit.value = (value[0].trim()=="" || value[1].trim()=="" || value[2].trim()=="" || value[3].trim()=="")
    })

    async function onSubmit(event) {
        event.preventDefault()
        const today=new Date()

        const newOffre={
            title: titre.value,
            client: client.value,
            contact: contact.value,
            date: today.toISOString(),
            description: description.value,
        }
        loading.value=true
        const { data, pending, error, refresh } = await useFetch('https://heritsilavo-abeurkzi.b4a.run/offres', {
            method:"post",
            body:newOffre
        })
        router.push('/')
    }
</script>

<template>
    <section v-if="loading" class="d-flex align-items-center justify-content-center col-12" id="_sec-proposer_"> <span class="badge">chargement ...</span> </section>
    <section v-else class="d-flex flex-column align-items-center justify-content-start col-12" id="_sec-proposer_">
        <div class="__titre__ col-12 text-center mt-5">
            Me proposer un projet
        </div>
        <div class="mt-3 col-12 mt-2 d-flex justify-content-center">
            <form @submit="onSubmit" class="mb-4 col-11 col-md-6 d-flex flex-column align-items-center justify-content-start">
                
                <div class="col-11 mt-1">
                    <label for="nom" class="form-label">Votre Nom:</label>
                    <input v-model="client" type="text" name="nom" id="nom" class="form-control">
                </div>
                <div class="col-11 mt-1">
                    <label for="contact" class="form-label">Adresse mail :</label>
                    <input v-model="contact" type="mail" name="contact" id="contact" class="form-control">
                </div>
                <div class="col-11 mt-1">
                    <label for="titre" class="form-label">Nom du projet:</label>
                    <input v-model="titre" type="text" name="titre" id="titre" class="form-control">
                </div>
                <div class="col-11 mt-1">
                    <label for="description" class="form-label">Description du projet:</label>
                    <textarea v-model="description" name="description" id="" cols="30" rows="4" class="form-control"></textarea>
                </div>
                <div class="mt-2 col-11 d-flex align-items-center justify-content-between buttons">
                        <NuxtLink to="/"><button type="reset" class="btn btn-danger">Annuler</button></NuxtLink>
                        <button :disabled="disableSubmit" type="submit" class="btn btn-primary">Proposer</button>
                </div>
            </form>
        </div>
    </section>
</template>


<style scoped>
     #_sec-proposer_{
        min-height: calc( 100vh );
        background: linear-gradient(var(--bgCol-2),var(--bgCol-1));
        color: whitesmoke;
        position: relative;
    }

    .__titre__{
        font-size: 32px;
    }

    a{
        color: whitesmoke;
        text-decoration: none;
    }

    .page-enter-active,
    .page-leave-active {
        opacity: 1;
        transition: all 0.4s;
    }
    .page-enter-from,
    .page-leave-to {
        opacity: 0.5;
        filter: blur(1rem);
    }
</style>