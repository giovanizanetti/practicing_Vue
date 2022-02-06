const app = Vue.createApp({
    data() {
        return {
            userInputClass: '',
            applyClass: false,
            isHidden: false,
            userBackground: ''

        }
    },
    
    methods: {
        handleClick(){
            this.isHidden = !this.isHidden
        }
    },
})
app.mount('#assignment');
