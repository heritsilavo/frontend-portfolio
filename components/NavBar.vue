<script setup>
   let showNav=useShowNav()

   let showvNav=ref(false)

   function showhamburger() {
    showvNav.value=true
   }

   function hidehamburger() {
    showvNav.value=false
   }
</script>

<template>
    <div @mouseleave="hidehamburger" :class="'col-12 d-flex align-items-center justify-content-between __nav_container__ '+( showNav.valueOf() ? '':'__hide_nav__' )">
        <div class="__logo__">HERITSILAVO</div>
        <img @mouseenter="showhamburger" class="d-inline-block d-md-none __bars__" src="/barswhite.svg" alt="bars">

        <div :class="'col-11  __v_nav_ '+(showvNav?'':' _not_show_ ')">
            <ul class="m-0">
                <li class="m-2 col-4"><NuxtLink class="col-12" external to="/#_sec1_">Acceuil</NuxtLink> </li>
                <li class="m-2 col-4"><NuxtLink class="col-12" external to="/#_sec2_">A propos</NuxtLink> </li>
                <li class="m-2 col-4"><NuxtLink class="col-12" external to="/#_sec3_">Mes Projets</NuxtLink></li>
                <li class="m-2 col-4"><NuxtLink class="col-12" external to="/#_sec4_">Mes services</NuxtLink></li>
                <li class="col-10 mb-2">
                    <NuxtLink to="/proposer"><button class="btn btn-success">Proposer un projet</button></NuxtLink>
                </li>
            </ul>
        </div>

        <ul class="d-none d-md-inline-block m-0">
            <li><NuxtLink external to="/#_sec1_">Acceuil</NuxtLink> </li>
            <li><NuxtLink external to="/#_sec2_">A propos</NuxtLink> </li>
            <li><NuxtLink external to="/#_sec3_">Mes Projets</NuxtLink></li>
            <li><NuxtLink external to="/#_sec4_">Mes services</NuxtLink></li>
        </ul>
        <NuxtLink class="d-none d-md-inline-block"to="/proposer"><button class="btn btn-success">Proposer un projet</button></NuxtLink>
    </div>
    <div>
        <div class="__after_nav__"></div>
    </div>
</template>

<style scoped>
.__bars__{
    cursor: pointer;
    height: calc(var(--navh) / 2);

}

.__v_nav_{
    position: absolute;
    top: 100%;right: 0;
    background: #070212;
    box-shadow: 2px 2px 2px 0px white;
    transition: all .1s;
}

._not_show_{
    transform-origin: top;
    transform: scaleY(0);
}
.__v_nav_ ul{
    height: 100%;
    display: flex;
    flex-wrap: wrap;
}
.__v_nav_ ul li a:hover{
    border-bottom: 1px solid whitesmoke;
}

.__logo__{
    color: rgb(255 163 0);
}
.__nav_container__{
    transition: all .2s;
    height: var(--navh);
    position: fixed;
    background: linear-gradient(180deg,#080314,#080314,#090416,#090416,transparent);
    color: whitesmoke;
    padding-left: 10px;
    padding-right: 10px;
    z-index: 99;
}
.__after_nav__{
    height: var(--navh);
    background: linear-gradient(180deg,#080314,#090416);

}

ul{
    list-style: none;
}
ul li{
    display: inline;
    margin: 0;
    margin-left: 10px;
    margin-right: 10px;
}
a{
    color: whitesmoke;
    text-decoration: none;
}

.__hide_nav__{
    transform: translateY(-100%);
}
</style>