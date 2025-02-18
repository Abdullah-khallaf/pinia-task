import {defineStore} from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title:'task1', isDone: true},
            {id: 2, title:'task2', isDone: false},
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
            localStorage.setItem('tasks',JSON.stringify(tasks))
        },
        removeTask(taskId) {
            this.tasks = this.tasks.filter(task => task.id !== taskId);
            localStorage.removeItem('taskTitle')
        }
        
    }
})