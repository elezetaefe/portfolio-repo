

<script lang="ts" setup>
import Button from '@/components/ui/button/Button.vue';
// import { scrollToSection } from '@/utils/ScrollToSection';

const photos = ["justice", "arkham", "superman", "varios", "villana", "villano", "grupo", "robin", "anne", "joker", "resplandor", "cat", "gafas", "league", "fondoVerde"]; 
</script>

<template>
    
    <div class="flex flex-col items-center justify-items-center mt-10 bg-amber-600">
        <img src="/imagenes/avatar-lzf-verd-web.png" alt="" class="w-100 h-auto"> 
                
        <h1 class="min-h-screen text-center text-6xl font-bold">
            Hi! I'm 
            <a class="hover:font-normal hover:text-[#5e904d]">Laura</a>
        </h1>    

        <Button variant="default" class="bg-[#5e904d] hover:bg-[#a6c89a]">
            <RouterLink to="/aboutMe">
            About me
            </RouterLink>
        </Button>

         <CarrusImaginum 
            :photos="photos"
            basePath="/imagines/batman"
            :autoPlayDelay="2000"
        />
    </div>
    
    

</template>

<style scoped>

</style>