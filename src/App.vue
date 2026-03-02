<script setup lang="ts">
import { RouterView } from 'vue-router';
import LogoLZF from '@/components/logoLZF.vue';


</script>

<template>

  <div class="grid grid-rows-[auto_1fr_auto] min-h-screen">

    <header class="bg-[#a6c89a] w-full ">
          <!-- header/barra de navegación -->

      <!-- div para el estilo de como se escriben las cosas en el header -->
      <div 
      class="flex flex-col md:flex-row items-center justify-start p-3 mx-auto max-w-450 md:px-10"> 

      <!-- <LogoSimpsons estilus="w-[8rem] h-auto"/> para insertar el logotipo -->
        
        <RouterLink to="/">
          <LogoLZF estilus="w-[15rem] pr-10"/>
        </RouterLink>


          <!-- div para espaciar los botones bien -->
          <div class="flex items-center gap-6 ">
                  <RouterLink to="/projects" active-class="font-bold">
                      Projects
                  </RouterLink>

                  <RouterLink to="/aboutMe" active-class="font-bold">
                      About me
                  </RouterLink>
          </div>

      </div>
          
    </header>

    <main>   
      <RouterView />
    </main>


  </div>
</template>

<style scoped>

</style>
