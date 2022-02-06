const app = Vue.createApp({
    data(){
        return {
            number: 0,
            shownumber: false
        }
    },
    computed: {
        result() {
            if(this.number < 37) {
                return 'Not there yet'
            } else if(this.number === 37) {
                return this.number
            } else {
                return 'Too much!'
            }
        }
    },
    methods: {
        add(number){
            this.number += number
        },
    },
    watch: {
        result() {
        const that = this

            setTimeout(() => {
                that.number = 0
            }, 5000)
        }
    }
})

app.mount('#assignment')
