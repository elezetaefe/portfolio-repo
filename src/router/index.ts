import AboutMe from "@/pages/aboutMe/aboutMe.vue";
import Detail from "@/pages/projects/Detail.vue";
import HomeLZF from "@/pages/home/HomeLZF.vue";
import Layout from "@/pages/projects/Layout.vue";
import Projects from "@/pages/projects/Projects.vue";
import Contact from "@/pages/contact/Contact.vue";

import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/', // #/
      name: 'HomeLZF',
      component: HomeLZF
    },
    {
      path: '/aboutMe', // #/aboutMe
      name: 'aboutMe',
      component: AboutMe
    },
    {
      path: '/Contact', // #/Contact
      name: 'contacto',
      component: Contact
    },
    {
      path: '/projects',
      component: Layout,
      children: [
        {
          path: '', // #/homeLZF/projects
          name: 'my-projects',
          component: Projects
        },
        {
          path: ':id', // :id es cualquier cosa, es una ruta variable
          name: 'my-projects-detail',
          component: Detail
        },
      ]
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})