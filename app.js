const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  computed: {
    fullName() {
      console.log('Running...');
      return this.name + ' ' + 'Raja'
    }
  },
  methods: {
    add(num = 1) {
      this.counter = this.counter + num;
    },
    reduce(num = 1) {
      this.counter = this.counter - num;
    },
    submitForm() {
      alert('Submited!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetValue() {
      this.name = '';
    }
  }
});

app.mount('#events');
