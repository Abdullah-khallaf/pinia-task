import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import DailyTasksView from '@/pages/DailyTasksView.vue';
import HabitsView from '@/pages/HabitsView.vue';
import CalendarView from '@/pages/CalendarView.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/daily-tasks', name: 'DailyTasks', component: DailyTasksView },
  { path: '/habits', name: 'Habits', component: HabitsView },
  { path: '/calendar', name: 'Calendar', component: CalendarView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
