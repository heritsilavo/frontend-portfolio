<script setup>
    useHead({
        title:"Nouveau Projet",
        link:[{rel:'icon',href:'/logo.png'}]
    })
</script>

<template>
    <section class="d-flex flex-column align-items-center justify-content-start col-12" id="_sec-proposer_">
        <div class="__titre__ col-12 text-center mt-5">
            Me proposer un projet
        </div>
        <div class="mt-3 col-12 mt-2 d-flex justify-content-center">
            <form class="mb-4 col-11 col-md-6 d-flex flex-column align-items-center justify-content-start">
                
                <div class="col-11 mt-1">
                    <label for="nom" class="form-label">Votre Nom:</label>
                    <input type="text" name="nom" id="nom" class="form-control">
                </div>
                <div class="col-11 mt-1">
                    <label for="contact" class="form-label">Adresse mail :</label>
                    <input type="mail" name="contact" id="contact" class="form-control">
                </div>
                <div class="col-11 mt-1">
                    <label for="titre" class="form-label">Nom du projet:</label>
                    <input type="text" name="titre" id="titre" class="form-control">
                </div>
                <div class="col-11 mt-1">
                    <label for="description" class="form-label">Description du projet:</label>
                    <textarea name="description" id="" cols="30" rows="4" class="form-control"></textarea>
                </div>
                <div class="mt-2 col-11 d-flex align-items-center justify-content-between buttons">
                        <NuxtLink to="/"><button type="reset" class="btn btn-danger">Annuler</button></NuxtLink>
                        <button type="submit" class="btn btn-primary">Proposer</button>
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
</style>