import {defineStore} from 'pinia'

export const useHabitStore = defineStore('habitStore', {
    state: () => ({
        habits: [
            {id: 5, title:'habit1', time:'09:00 Am', isDone: false },
            {id: 6, title:'habit1', time:'12:30 Pm', isDone: true },
        ]
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
            this.habits.push(habit);
        }
    }
})