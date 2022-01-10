const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredValue : '' ,
      personalData: {
        name: 'Anand Raja',
        job: 'Software Engineer'
      }
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
