import {defineStore} from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title:'task1', isDone: true},
            {id: 2, title:'task2', isDone: false}
        ]
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isDone)
        }
    }
})