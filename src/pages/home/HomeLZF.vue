

<script lang="ts" setup>
import CarrusImaginum from '@/components/CarrusImaginum.vue';
import Button from '@/components/ui/button/Button.vue';
// import { scrollToSection } from '@/utils/ScrollToSection';

const photos = ["img-01", "img-02", "img-03", "img-04", "img-05", "img-06", "img-07", "img-08"]; 

</script>

<template>
    
    <div class="flex flex-col items-center justify-center mt-10 min-h-screen w-full gap-5">
        <img src="/imagenes/avatar-lzf-verd-web.png" alt="" class="w-100 h-auto"> 
                
        <h1 class="text-center text-6xl font-bold mb-3">
            Hi! I'm 
            <a class="hover:font-normal hover:text-[#5e904d]">Laura</a>
        </h1>    

        <Button variant="default" class="bg-[#5e904d] hover:bg-[#a6c89a] rounded-4xl mb-20">
            <RouterLink to="/aboutMe">
            About me
            </RouterLink>
        </Button>

        <div class="flex flex-row justify-around items-center gap-5 w-full mb-20">
            
            <h1 class="text-5xl ml-20 text-[#5e904d]">
                my projects
            </h1>

            <RouterLink to="/projects">
                <CarrusImaginum 
                :photos="photos"
                basePath="/imagenes/todas"
                :autoPlayDelay="2000"
                class="w-auto h-auto"
                />
            </RouterLink>
            
        </div>
         
    </div>
    
    

</template>

<style scoped>

</style>