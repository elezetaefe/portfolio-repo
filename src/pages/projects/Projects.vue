
<script setup lang="ts">
import Card from '@/components/ui/card/Card.vue';


</script>


<template>
   <div class="flex flex-col items-center justify-center gap-8 w-full max-w-350 my-8 mx-auto">
      <div class="text-left w-full justify-start">
         <h1 class="text-4xl">
            my projects
         </h1>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
         <Card 
         class="cursor-pointer w-55 h-[240] hover:bg-[#a6c89a]"
         >

         </Card>
      </div>
   </div>
   

</template>



<style scoped>

</style>