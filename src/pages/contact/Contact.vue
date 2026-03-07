
<script setup lang="ts">
import Calendar from '@/components/ui/calendar/Calendar.vue';
import Input from '@/components/ui/input/Input.vue';
import Popover from '@/components/ui/popover/Popover.vue';
import PopoverContent from '@/components/ui/popover/PopoverContent.vue';
import PopoverTrigger from '@/components/ui/popover/PopoverTrigger.vue';
import Select from '@/components/ui/select/Select.vue';
import SelectContent from '@/components/ui/select/SelectContent.vue';
import SelectItem from '@/components/ui/select/SelectItem.vue';
import SelectTrigger from '@/components/ui/select/SelectTrigger.vue';
import SelectValue from '@/components/ui/select/SelectValue.vue';

import type { DateValue } from 'reka-ui';
import { ref } from 'vue';


    const dies = ref<DateValue>()

</script>

<template>

    <div class="container mx-auto max-w-5xl px-4 bg-amber-400">

    <div class="flex justify-start items-center w-auto bg-amber-300 h-auto p-8">
        <h1 class="text-5xl font-bold mt-8">Contact me</h1>
    </div>

    <div class="w-full max-w-md mx-auto lg:max-w-none lg:w-1/2 ">
        <form  class="space-y-6 bg-white p-8 rounded-lg shadow-lg aspect-square">
            <div class="space-y-2"> 
                <Label for="nomen">Nombre</Label>
                    <Input id="nomen" required />
            </div>
                            
            <div class="space-y-2">
                <Label for="cognomen">Apellidos</Label>
                    <Input id="cognomen" required />
            </div>

            <div class="space-y-2">

                <Select required>
                    <SelectTrigger class="border-gray-200 bg-white text-gray-900">
                        <SelectValue placeholder="Selecciona un tema a tratar" />
                    </SelectTrigger>

                    <SelectContent class="bg-white">
                        <SelectItem value="rescatare">
                            Comisión diseño
                        </SelectItem>

                        <SelectItem value="investigare">
                            Comisión ilustración 
                        </SelectItem>

                        <SelectItem value="persequi">
                            Propuesta de proyecto
                        </SelectItem>

                        <SelectItem value="defendere">
                            Solicitud de información
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

           

            <Button 
            type="submit"
            class="w-full bg-[rgb(106,90,205)] hover:[rgb(88,75,171)] text-white text-md mt-4"
            >
                Enviar solicitud
            </Button>
                        
        </form>
    </div>

    </div>

</template>

<style scoped>

</style>