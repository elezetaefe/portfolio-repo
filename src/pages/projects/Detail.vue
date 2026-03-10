

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { projects, type Project } from './data';


const route = useRoute()


const project = ref <Project | undefined>(
    projects.find(proj => proj.id === Number(route.params.id))
)

</script>

<template>
    <div v-if="project" class="flex flex-col lg:flex-row lg:justify-between md:items-center w-full max-w-[1400] md:mx-auto my-8 gap-8 px-8">
        
        
        <div>

            <h1 class="titulo"> 
                {{ project.nom }}
            </h1>

            <div class="info-quote">
                <p class="fecha">
                    {{ project.fecha }}
                </p>

                <p class="autor">
                    {{ project.autor }}
                </p>
                        
                <div>
                    <p class="brief"> 
                        {{ project.brief }}
                    </p>

                    <p class="sol"> 
                        {{ project.solution }}
                    </p>
                </div>
            </div>
        </div>

        <figure class="figure-quote">
            <img :src="`/imagenes/todas/${project.imagen}`" alt="" />
        </figure>
    </div>
</template>



<style scoped>

.titulo {
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-bottom: 1.25rem;
}

@media (min-width: 1024px) {
  .titulo {
    font-size: 3rem;
    line-height: 1;
  }
}

.arca-quote {
  background-color: rgb(239 68 68);
  padding: 1.25rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 48rem;
}
 
.brief {
  color: black;
  text-align: left;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin-bottom: 1.25rem; 
}

.sol {
  color: black;
  text-align: left;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 1.25rem; 
}
 
@media (min-width: 1024px) {
  .quote {
    font-size: 2.2rem;
    line-height: 2.5rem;
  }
}
 
.fecha {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  max-width: 48rem;
}

.autor {
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
  max-width: 48rem;
}
 
@media (min-width: 1024px) {
  .descriptione {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}
 
@media (min-width: 1024px) {
  .info-quote {
    max-width: 48rem;
  }
}

.figure-quote {
  display: flex;
  justify-content: center;
  min-width: min-content;
}

.figure-quote > img {
  object-fit: contain;
}

</style>