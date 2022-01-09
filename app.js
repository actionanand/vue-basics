const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: '<h3>Master Vue and build amazing apps!</h3>',
      vueLink: 'https://v3.vuejs.org/'
    };
  },
  methods: {
    outputGoals() {
      const randomNum = Math.random();
      if(randomNum > .5) {
        return this.courseGoalB;
      } else {
        return this.courseGoalA;
      }
    }
  }
});

app.mount('#user-goal');

