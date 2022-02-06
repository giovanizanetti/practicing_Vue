const app = Vue.createApp({
    data() {
        return {
            inputValue: '',
            inputValue2: ''
        }
    },
    methods: {
        handleChange(event){
            console.log(event.target.value)
            this.inputValue = event.target.value
        },
        handleChange2(event){
            console.log(event.target.value)
            this.inputValue2 = event.target.value
        },
        showAlert() {
            alert('this is an alert')
        }
    }
})
app.mount('#assignment')

