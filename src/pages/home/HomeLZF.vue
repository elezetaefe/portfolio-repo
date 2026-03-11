

<script lang="ts" setup>
import CarrusImaginum from '@/components/CarrusImaginum.vue';
import Button from '@/components/ui/button/Button.vue';
import { ArrowDown } from 'lucide-vue-next';
// import { scrollToSection } from '@/utils/ScrollToSection';

const photos = ["img-09", "img-10", "img-11", "img-12", "img-13", "img-14", "img-05", "img-02"]; 

</script>

<template>
    
    <div class="flex flex-col items-center justify-center mt-10 min-h-screen w-120 lg:w-full gap-5">
        <img src="/imagenes/avatar-lzf-verd-web.png" alt="" class="w-50 lg:w-80 h-auto"> 
                
        <h1 class="text-center text-6xl font-bold mb-3">
            Hi! I'm 
            <a class="hover:font-normal hover:text-[#5e904d]">Laura</a>
        </h1>    

        <Button variant="default" class="bg-[#5e904d] hover:bg-[#a6c89a] rounded-4xl mb-7">
            <RouterLink to="/aboutMe">
            About me
            </RouterLink>
        </Button>

        <ArrowDown class="w-10 h-10 animate-bounce mb-5 lg:mb-0"/>

        <div class="flex flex-col lg:flex-row justify-around items-center gap-5 w-full lg:mb-20">
            
            <h1 class="text-2xl lg:text-5xl lg:ml-20 text-[#5e904d]">
                my projects
            </h1>

            <RouterLink to="/projects">
                <CarrusImaginum 
                :photos="photos"
                basePath="/imagenes/fotosCarrus"
                :autoPlayDelay="2000"
                class="w-auto h-auto"
                />
            </RouterLink>
            
        </div>
         
    </div>
    
    

</template>

<style scoped>

</style>