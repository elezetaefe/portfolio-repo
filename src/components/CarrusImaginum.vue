
<script setup lang="ts">

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

interface Props {
    photos: string[]
    basePath: string
    autoPlayDelay?: number
    loop?: boolean
    dragFree?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    autoPlayDelay: 2000,
    loop: true,
    dragFree: true
}) 

</script>

<template>
    
    <Carousel 
        class="w-full max-w-md md:max-w-2xl lg:max-w-4xl"
        :opts="{
            loop: props.loop,
            dragFree: props.dragFree,
        }"

        :plugins="[Autoplay({
            delay: props.autoPlayDelay,
        })]"
    >
        <CarouselContent>
            <CarouselItem v-for="(photo, index) in props.photos" :key="index">
                <div class="p-1">
                    <Card class="">
                        <CardContent class=" flex  items-center justify-center p-6">
                                
                            <img 
                            :src="`${ props.basePath }/${ photo }.png`" 
                            alt="`Image ${ index + 1 }`"
                            class="w-full h-full object-full"
                            >
                                <!-- el alt es el texto alternativo de la imagen por si no la encuentra -->

                        </CardContent>
                    </Card>
                </div>
            </CarouselItem>
         </CarouselContent>

        <!-- <CarouselPrevious class="bg-white text-[#5e904d] border-3 border-[#5e904d] hidden md:flex justify-center items-center"/>
        <CarouselNext class="bg-white text-[#5e904d] hidden md:flex justify-center items-center" /> -->
    </Carousel>

</template>


<style scoped>

</style>