<script setup lang="ts">
    let project = useProject()
    let selected  =ref({title:"",societe:"",role:'',description:'',git:'',link:'',etat:''})

    function onchoose(p:any) {
        selected.value=p
    }

    onMounted(function() {
        selected.value=project.value[0]
    })
</script>

<template>
    <section class="d-flex flex-column align-items-center justify-content-start col-12" id="_sec3_">
        <div class="__titre__ col-12 text-center mt-5">
            Mes Projets
        </div>
        <div class="flex-grow-1  mt-3 col-12 mb-2 mt-2 d-flex flex-column flex-md-row-reverse">
            
            <div class="d-flex align-items-start justify-content-center m-5 mt-2 mb-2  col-10 col-md-4 __select_projet__">
                <ol class="m-0 col-10">
                    <NuxtLink v-for="proj in project.valueOf()" external to="/#_detail_projet_"> <li @click="()=>{ onchoose(proj) }" class="m-2 p-2 __list_item__"><h5> {{ proj.title }} </h5></li></NuxtLink>
                </ol>
            </div>

            <div id="_detail_projet_" class="m-5 mt-md-2 mb-2 flex-grow-1 d-flex flex-column align-items-center justify-content-between __detail_projet__">
                <div v-if="selected.title.trim()==''" class="__no_selection__ col-12 h-100 d-flex align-items-center justify-content-center">Veuillez selectionner un projet a afficher</div>

                <!-- Titres -->
                <div v-if="selected.title.trim()!=''" class="col-11 mt-3">
                    <h4>{{ selected?.title }}</h4>
                    <h6>Societe: {{ selected.societe }}</h6>
                    <h6>Mon rôle: {{ selected.role }}</h6>
                </div>
                <!-- description -->
                <div v-if="selected.description.trim()!=''" class="_descriptioin_ flex-grow-1 col-11 mt-2">
                    {{ selected.description }}
                </div>
                <!-- information a propos du projet -->
                <div class="col-11 d-flex align-items-center justify-content-between mt-2 __links__ mb-2">
                    <div class="h-100 d-flex">
                        <NuxtLink v-if="selected.git.trim()!=''" :to="selected.git" target="_blank">
                            <div class="m-2 mt-0 mb-0 d-flex align-items-center _git_">
                                <div class=" _link_ico_"> <img src="/github.svg" alt="git"> </div>
                                <span class="m-2 mt-0 mb-0">Git</span>
                            </div>
                        </NuxtLink>

                        <NuxtLink v-if="selected.link.trim()!=''" :to="selected.link" target="_blank">
                            <div class="m-2 mt-0 mb-0 d-flex align-items-center _git_">
                                <div class="border _link_ico_"></div>
                                <span class="m-2 mt-0 mb-0">Lien</span>
                            </div>
                        </NuxtLink>

                        
                    </div>

                    <span v-if="selected.etat.trim()!=''" class="justify-self-end m-2 mt-0 mb-0">encours</span>
                </div>
            </div>
        
        </div>
        
    </section>
</template>



<style scoped>
    .__links__{
        height: 30px;
    }
    ._link_ico_{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    ._descriptioin_{
        max-height: 45vh;
        overflow-y: hidden;
    }
   

     #_sec3_{
        min-height: calc( 100vh - var(--navh) );
        background: linear-gradient(var(--bgCol-1),var(--bgCol-2));
        color: whitesmoke;
        position: relative;
    }

    .__titre__{
        font-size: 32px;
    }
    .__detail_projet__,
    .__select_projet__{
        min-height: 70vh;
        position: relative;
        z-index: 10;
    }
    
    .__detail_projet__::before,
    .__select_projet__::before{
        content: "";
        position: absolute;top: 0;left: 0;
        background: transparent;
        width: 50%;
        height: 100px;
        border-top: 2px solid white;
        border-left: 2px solid white;
        border-top-left-radius: 20px;
        z-index: -1;
        transition: all .3s;
    }
    .__detail_projet__:hover::before,
    .__select_projet__:hover::before{
        width: 100%;
        height: 100%;
    }
    .__detail_projet__::after,
    .__select_projet__::after{
        content: "";
        position: absolute;bottom: 0;right: 0;
        background: transparent;
        width: 50%;
        height: 100px;
        border-bottom: 2px solid white;
        border-right: 2px solid white;
        border-bottom-right-radius: 20px;
        z-index: -1;
        transition: all .3s
    }
    .__detail_projet__:hover::after,
    .__select_projet__:hover::after{
        width: 100%;
        height: 100%;
    }

    .__select_projet__ ol{
        display: inline-block;
        height: 90%;
    }

    .__list_item__{
        cursor: pointer;
    }

    .__list_item__:hover{
        background: #6a6a6a31;
    }

    a{
        color: whitesmoke;
        text-decoration: none;
    }

    .__no_selection__{
        position: absolute;inset: 0;
    }
</style>