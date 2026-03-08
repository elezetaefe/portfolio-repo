
<script setup lang="ts">
import Input from '@/components/ui/input/Input.vue';
import Select from '@/components/ui/select/Select.vue';
import SelectContent from '@/components/ui/select/SelectContent.vue';
import SelectItem from '@/components/ui/select/SelectItem.vue';
import SelectTrigger from '@/components/ui/select/SelectTrigger.vue';
import SelectValue from '@/components/ui/select/SelectValue.vue';
import { InstagramIcon, Mail } from 'lucide-vue-next';

</script>

<template>

    <div class="flex justify-center container mx-auto max-w-5xl px-4 my-20">

        <div class="flex flex-col justify-center items-start w-auto h-auto p-8">
            <h1 class="text-5xl font-bold mt-8 mb-6">Contact me</h1>

            <div class="flex flex-col justify-start w-auto">
                <div class="flex flex-row items-center mb-3">
                    <Mail class="w-5 h-5 mr-3 stroke-[#5e904d]"/>
                    <p class="text-[#5e904d] font-bold">
                        ele.zeta.efe@gmail.com
                    </p>
                </div>

                <div class="flex flex-row items-center">
                    <InstagramIcon class="w-5 h-5 mr-3 stroke-[#5e904d]"/>
                    <a href="https://www.instagram.com/ele.zeta.efe.dis/" target="_blank" 
                    class="hover:underline text-[#5e904d] font-bold">
                        ele.zeta.efe.dis
                    </a>
                </div>
            </div>
        </div>

    <div class="w-full max-w-md mx-auto lg:max-w-none lg:w-1/2 ">
        <form  class="space-y-6 bg-[#f6fff2] p-8 rounded-lg shadow-lg aspect-square m-10">
            <div class="space-y-2"> 
                <Label for="nomen">Full name</Label>
                    <Input id="nomen" required />
            </div>

            <div class="space-y-2">
                <Label for="email">E-mail</Label>
                    <Input id="email" required />
            </div>

            <div class="space-y-2">

                <Select required>
                    <SelectTrigger class="border-gray-200 bg-white text-gray-900">
                        <SelectValue placeholder="Select an issue" />
                    </SelectTrigger>

                    <SelectContent class="bg-white">
                        <SelectItem value="design">
                            Design commission
                        </SelectItem>

                        <SelectItem value="ilustr">
                            Illustrator commission 
                        </SelectItem>

                        <SelectItem value="project">
                            Project offer
                        </SelectItem>

                        <SelectItem value="info">
                            I need information
                        </SelectItem>

                        <SelectItem value="other">
                            Other (please specify below)
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div class="space-y-2">
                <Label for="text">Comentario</Label>
                <Input id="text" />
            </div>
           
            <div class="flex justify-center w-full">
                <Button 
                type="submit"
                class="w-80 bg-[#48784bdf] hover:bg-[#a6c89a] text-white text-md mt-4 rounded-xl"
                >
                    Enviar solicitud
                </Button>
            </div>
            
                        
        </form>
    </div>

    </div>

</template>

<style scoped>

</style>