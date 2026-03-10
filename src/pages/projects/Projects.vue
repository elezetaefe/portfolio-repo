
<script setup lang="ts">
import Card from '@/components/ui/card/Card.vue';
import { projects } from './data';
import { computed, ref } from 'vue';


const inPagina = 8

const nuncPagina = ref(1)

const listaProjects = computed(() => {
    const inicio = (nuncPagina.value - 1) * inPagina
    // restamos uno para q empiece en el 0 de la lista
    const fin = inicio + inPagina
    return projects.slice(inicio, fin)
})

</script>


<template>
   <div class="flex flex-col items-center justify-center my-8 mx-8">
      <div class="text-left w-full justify-start">
         <h1 class="text-4xl">
            my projects
         </h1>
      </div>

      <div class="grid grid-cols-2 h-full w-full justify-items-center-safe">
         <Card 
         class="cursor-pointer w-160 h-auto hover:ease-in mb-10"
         v-for="project in listaProjects"
         >

            <CardContent 
            class="flex flex-col items-start gap-1 w-full px-0"
            @click="$router.push(`/projects/${ project.id }`)"
            >

               <img :src="`/imagenes/todas/${project.imagen}`" alt="" />

               <h2 class="font-bold text-2xl">{{ project.nom }}</h2>
            </CardContent>

         </Card>
      </div>
   </div>
</template>



<style scoped>

</style>