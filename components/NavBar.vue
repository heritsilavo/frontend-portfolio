<script setup>
   let showNav=useShowNav()
</script>

<template>
    <div :class="'col-12 d-flex align-items-center justify-content-between __nav_container__ '+( showNav.valueOf() ? '':'__hide_nav__' )">
        <div class="__logo__">HERITSILAVO</div>
        <ul class="m-0">
            <li><NuxtLink external to="/#_sec1_">Acceuil</NuxtLink> </li>
            <li><NuxtLink external to="/#_sec2_">A propos</NuxtLink> </li>
            <li><NuxtLink external to="/#_sec3_">Mes Projets</NuxtLink></li>
            <li><NuxtLink external to="/#_sec4_">Mes services</NuxtLink></li>
        </ul>
        <NuxtLink to="/proposer"><button class="btn btn-success">Proposer un projet</button></NuxtLink>
    </div>
    <div>
        <div class="__after_nav__"></div>
    </div>
</template>

<style scoped>
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