function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    }
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 12)
      this.monsterHealth -= attackValue
      this.attackPlayer()
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15)
      this.playerHealth -= attackValue
    },
    getHealthBar(value) {
      return {
        width: value + '%',
      }
    },
    specialAttackMonster() {
      console.log('attack')
      const attackValue = getRandomValue(10, 25)
      this.monsterHealth -= attackValue
      this.attackPlayer()
    },
  },
})

app.mount('#game')
