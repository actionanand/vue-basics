const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://v3.vuejs.org/'
    };
  },
  methods: {
    outputGoals() {
      const randomNum = Math.random();
      if(randomNum > .5) {
        return 'Master Vue';
      } else {
        return 'Learn Vue';
      }
    }
  }
});

app.mount('#user-goal');

