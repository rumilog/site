import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProjectDetails from '../views/ProjectDetails.vue';
import TikTokWork from '../views/ProjectPages/TikTokWork.vue';
import AdaptiveMouse from '../views/ProjectPages/AdaptiveMouse.vue';
import NauticalPhrases from '../views/ProjectPages/NauticalPhrases.vue';
import ResearchLab from '../views/ProjectPages/ResearchLab.vue';
import BoozAllen from '../views/ProjectPages/BoozAllen.vue';
import EcoMaps from '../views/ProjectPages/EcoMaps.vue' ;
import GymMate from '../views/ProjectPages/GymMate.vue' ;
import Jokes from '../views/ProjectPages/Jokes.vue' ;
import AudioVisual from '../views/ProjectPages/AudioVisual.vue';
import SmartAquarium from '../views/ProjectPages/SmartAquarium.vue';
import LateralLeap from '../views/ProjectPages/LateralLeap.vue';
import HumiditySensor from '../views/ProjectPages/HumiditySensor.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    // Explicitly define individual project pages first
    {
      path: '/projects/tiktok-work',
      name: 'tiktok-work',
      component: TikTokWork,
    },
    {
      path: '/projects/adaptive-mouse',
      name: 'adaptive-mouse',
      component: AdaptiveMouse,
    },
    {
      path: '/projects/nautical-phrases',
      name: 'nautical-phrases',
      component: NauticalPhrases,
    },
    {
      path: '/projects/research-lab',
      name: 'research-lab',
      component: ResearchLab,
    },
    {
      path: '/projects/booz-allen',
      name: 'booz-allen',
      component: BoozAllen,
    },
    {
      path: '/projects/eco-maps',
      name: 'eco-maps',
      component: EcoMaps,
    },
    {
      path: '/projects/gym-mate',
      name: 'gym-mate',
      component: GymMate,
    },
    {
      path: '/projects/jokes',
      name: 'jokes',
      component: Jokes,
    },
    {
      path: '/projects/audio',
      name: 'audio',
      component: AudioVisual,
    },
    {
      path: '/projects/smart-aquarium',
      name: 'smart-aquarium',
      component: SmartAquarium,
    },
    {
      path: '/projects/lateral-leap',
      name: 'lateral-leap',
      component: LateralLeap,
    },
    {
      path: '/projects/humidity-sensor',
      name: 'humidity-sensor',
      component: HumiditySensor,
    },

    // Fallback dynamic route for other projects
    {
      path: '/projects/:id', 
      name: 'project-details',
      component: ProjectDetails,
      props: true, 
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
});

export default router;
