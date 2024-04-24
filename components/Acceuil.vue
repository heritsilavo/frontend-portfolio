<template>
    <section class="d-flex align-items-center justify-content-evenly col-12" id="_sec1_">
        <div class="flex-grow-1 h-75 m-2 __acceuil_1__">
            <h1 class="__acc_txt__ _64px_">Bonjour,</h1>
            <h1 class="__acc_txt__ _64px_">Je suis Tsilavo</h1>
            <h1 class="__acc_txt__ _32px_">Developpeur web fullstack</h1>
            <button class="btn btn-success __acc_txt__">Telecharger CV</button>
        </div>
        <div class="col-0 col-md-5 h-100 __acceuil_2__"></div>
        <div class="d-none d-md-flex flex-column justify-content-between align-items-center __socials__">
            <NuxtLink href="https://www.facebook.com/her.tslav/" target="_blank"><div class="rounded m-3 __socials_item__"> <img src="/facebook.svg" alt="facebook"> </div></NuxtLink>
            <NuxtLink href="https://www.linkedin.com/in/heritsilavo-andriantsilavina-86b4302b4/?originalSubdomain=mg" target="_blank"><div class="rounded m-3 __socials_item__"> <img src="/linkedin.svg" alt="linkedin"> </div></NuxtLink>
            <NuxtLink href="https://github.com/heritsilavo" target="_blank"><div class="rounded m-3 __socials_item__"> <img src="/github.svg" alt="github"> </div></NuxtLink>
        </div>
    </section>
</template>

<style scoped>
     #_sec1_{
        height: calc( 100vh - var(--navh) );
        background: linear-gradient(180deg,var(--bgCol-1),var(--bgCol-2));
        color: whitesmoke;
        position: relative;
    }
    ._64px_{
        font-size: 64px;
    }
    ._32px_{
        font-size: 32px;
    }
    .__acc_txt__{
        margin-left: 30px;
    }
    .__acceuil_2__{
        background-image: url("/logo.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        margin-right: 20px;
    }
    .__socials__{
        width: 55px;
        background: rgba(201, 194, 194, 0.21);
        height:250px;
        margin-top: calc(0px - var(--navh));
        border-top-left-radius:    10px;
        border-bottom-left-radius: 10px;
    }
    .__socials_item__{
        width: 40px;
        height: 40px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: whitesmoke;
    }
</style>