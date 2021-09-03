Vue.createApp({
    data() {
        return {
            inputValue: 0,
            temp: '0', // display process 
            result: 0, // display result
            // cacheData: 0,
            // operator: '+',
            formula: '',
            isComputed: false,
            history: [],
        }
    },
    methods: {
        click(num) {
            // at first, display 0, then click number will turn to number
            if(this.inputValue === 0) {
                this.inputValue = ''
            }
        },
        clickOperator(operator) {
        },
        compute() {
            
            // display in history
            this.history.push({
                formula: this.formula,
                result: eval(this.formula)
            })
            // maintain 10 records
            if (this.history.length > 10) {
            this.history.splice(0, 1)
            }
            // storage in local
            localStorage.setItem("MWmEWpv", JSON.stringify(this.history))

            this.reset()
        },
        // click AC or esc
        reset() {
            this.inputValue = 0
            this.temp = '0'
            this.result = 0
            this.formula = ''
            this.isComputed = false
        },
        // let empty history
        clear() {
            this.history = []
            localStorage.clear()
        }
    },
    mounted() {
    this.history = JSON.parse(localStorage.getItem("MWmEWpv")) || []
    }
}).mount('#app')