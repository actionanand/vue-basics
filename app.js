const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://v3.vuejs.org/'
    };
  }
});

app.mount('#user-goal');

