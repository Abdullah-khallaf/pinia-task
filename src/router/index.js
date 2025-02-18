import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import DailyTasksView from '../pages/DailyTasksView.vue';
import HabitsView from '../pages/HabitsView.vue';
import CalendarView from '../pages/CalendarView.vue';
import Login from '../pages/Login.vue';
import Welcome from '../pages/Welcome.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/DailyTasks', name: 'DailyTasks', component: DailyTasksView },
  { path: '/Habits', name: 'Habits', component: HabitsView },
  { path: '/Calendar', name: 'Calendar', component: CalendarView },
  { path: '/Welcome', name: 'Welcome', component: Welcome },
  { path: '/Login', name: 'Login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
