<script setup lang="ts">
import { RouterView } from 'vue-router';
import LogoLZF from '@/components/logoLZF.vue';
import LogoLZFneg from './components/logoLZFneg.vue';


</script>

<template>

  <div class="grid grid-rows-[auto_1fr_auto] min-h-screen">

    <header class="bg-[#a6c89a] w-full ">
          <!-- header/barra de navegación -->

      <!-- div para el estilo de como se escriben las cosas en el header -->
      <div 
      class="flex flex-col md:flex-row items-center justify-start p-3 mx-auto max-w-450 md:px-10"> 

          <!-- div para espaciar los botones bien -->
          <div class="flex items-center gap-6 ">

            <RouterLink to="/">
              <LogoLZF estilus="w-[15rem] pr-10"/>
            </RouterLink>

            <RouterLink to="/projects" active-class="font-bold">
                Projects
            </RouterLink>

            <RouterLink to="/aboutMe" active-class="font-bold">
                About me
            </RouterLink>

            <RouterLink to="/contact" active-class="font-bold">
                Contact
            </RouterLink>

          </div>

      </div>
          
    </header>

    <main>   
      <RouterView />
    </main>

    <footer class="bg-[#48784bdf] w-full text-center">

      <div class=" flex flex-row items-center justify-between p-8 ">

        <LogoLZFneg estilus="w-10"/>
        <p class="text-xs text-white">
          © 2026 Laura Zaragoza Ferrando. All rights reserved.</p>

      </div>


    </footer>
  </div>
</template>

<style scoped>

</style>
