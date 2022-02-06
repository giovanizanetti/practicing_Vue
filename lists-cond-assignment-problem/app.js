const app = Vue.createApp({
    data(){
        return {
            task: '',
            taskList: [],
            show: true,
        }
    },
    methods: {
        handleAddTask(task) {
            this.taskList = [...this.taskList, task ]
            this.task = ''
        },
        handleShowList() {
            this.show = !this.show
        },
        handleDeleteTask(task){
            this.taskList = this.taskList.filter(t => t !== task)
        }
    },
    computed: {
        buttonText() {
            return !this.show ? 'Show List' : 'Hide List'
        } 
    }
})

app.mount('#assignment')
