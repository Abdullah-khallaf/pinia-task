import {defineStore} from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title:'task1', isDone: true},
            {id: 2, title:'task2', isDone: false},
            {id: 3, title:'task3', isDone: true},
            {id: 4, title:'task4', isDone: false}
        ]
    }),
    getters: {
        doneTasks() {
            return this.tasks.filter((t) => t.isDone)
        },
        doneTasksCount() {
            return this.tasks.reduce((P,C) => {
                return C.isDone ? P+1 : P
            },0)
        },
        allCount: (state) => {
            return state.tasks.length
        }
    },
    actions:{
        addTask(task){
            this.tasks.push(task)
        }
    }
})