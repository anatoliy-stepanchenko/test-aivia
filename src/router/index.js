import { createRouter, createWebHistory } from 'vue-router';
import PageHome from '@/views/PageHome.vue';
import PageGame from '@/views/PageGame.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/game',
      name: 'game',
      component: PageGame,
      meta: {
        title: 'Game',
      },
    },
  ],
});

router.beforeEach(async (to) => {
  document.title = `${to.meta.title} | test-aivia`;
});

export default router;
