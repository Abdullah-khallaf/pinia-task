import {defineStore} from 'pinia'

export const useHabitStore = defineStore('habitStore', {
    state: () => ({
        habits: JSON.parse(localStorage.getItem("habits")) || [ ]
    }),
    getters: {
        getHabitsCounter(){
            return this.habits.length
        },
        getHabitsDoneCounter(){
            return this.habits.reduce((P,C) => {
                return C.isDone ? P+1 : P;
            }, 0)
        },
        getHabitsDone(){
            return this.habits.filter((H) => H.isDone)
        }
    },
    actions:{
        addHabit(habit){
            this.habits.push(habit)
            localStorage.setItem('habits',JSON.stringify(this.habits))
        },
        removeHabit(habitId) {
            this.habits = this.habits.filter(habit => habit.id !== habitId);
            localStorage.setItem('habits',JSON.stringify(this.habits))
        }
    }
})