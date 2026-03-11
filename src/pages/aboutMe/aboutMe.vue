
<script setup lang="ts">
import { ref } from 'vue';


    const imagoCirca = ref<string>('avatar-lzf-verd-web.png')

</script>


<template>
    <div class="flex flex-col lg:flex-row lg:justify-between md:items-center w-full max-w-[1400] md:mx-auto my-8 gap-8 px-5 md:px-20">

        <div class="flex flex-col lg:flex-row w-full justify-between lg:max-w-[1400] gap-4 order-1 text-center p-6">

            <figure class="flex justify-start md:justify-center min-w-min max-w-xl lg:order-1 h-100 lg:h-125 mr-20">
            <!-- puedes poner pie de foto, texto alternativo etc. -->
                <img 
                class="object-contain h-full w-auto" 
                :src="`/imagenes/${ imagoCirca }`" 
                alt=""
                @mouseenter="imagoCirca='avatar-lzf-like-web.png'"
                @mouseleave="imagoCirca='avatar-lzf-verd-web.png'"
                >
            </figure>

            <div class="max-w-2xl text-2xl text-left order-2 content-center">

                <h1 class="font-bold text-5xl mb-5"> 
                    Hello!
                </h1>

                <p class="mb-3">
                    I'm a design student studying in UPV's bachelor's degree: Design and creative technologies.
                </p>
                        
                <p class="mb-3">
                    I'm specially interested in 
                    <a class="text-[#5e904d] font-bold">graphic design, editorial design</a> 
                    and 
                    <a class="text-[#5e904d] font-bold">narrative illustration!</a> 
                    I look for interesting and fun projects that challenge me.
                </p>

                <p class="mb-3">
                    I believe design has the power of 
                    <a class="text-[#5e904d] font-bold">helping society</a> 
                    and making everyday life easier. I am often inspired by other designers, artists and nature in general.
                </p>
            </div>
        </div>

    </div>

    <div class="flex flex-col lg:flex-row w-full justify-around items-center mb-30">

        <div class=" w-fit h-fit mb-8 px-10 lg:px-0">
            <h2 class="text-2xl font-bold mb-3 text-[#5e904d]">
                Studies
            </h2>

            <p class="mb-1">
                - Bachelor's Degree at UPV: Design and creative technologies (currently)
            </p>
            <p class="mb-1">
                - Artistic "Bachillerato" (2022-2023)
            </p>
            <p class="">
                - Compulsary school
            </p>
        </div>

        <div class="w-fit h-fit px-10 lg:px-0">
            <h2 class="text-2xl font-bold text-[#5e904d] mb-3 lg:mb-0">
                Skill set
            </h2>

            <div class="flex flex-row w-fit">
                <img src="/imagenes/habs-01.png" alt="" class="w-50 lg:w-70 h-auto pr-1.5">
                <img src="/imagenes/habs-02.png" alt="" class="w-50 lg:w-70 h-auto pl-1.5">
            </div>
            
        </div>
        

    </div>


</template>



<style scoped>

</style>