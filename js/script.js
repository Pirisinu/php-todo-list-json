const { createApp } = Vue ;

createApp({
  data(){
    return{
      apiUrl: 'server.php',
      title: 'Todo-List',
      fintoArray:[
        "Fare una corsa",
        "Incontrare gli amici",
        "Andare in montagna",
        "Chiamare l'idraulico",
        "Pitturare casa"
      ],
      todoList: [],
      newTask: ''
    }
  },
  methods: {
    getTodoList(){
      axios
      .get(this.apiUrl)
      .then(resp => {
        this.todoList = resp.data
      })
      .catch(err => {
        console.log(err);
      });
    },
    addTask(){
      const data = new FormData();
      data.append('newTaskItem', this.newTask);
      axios.post(this.apiUrl, data)
        .then(resp => {
          this.todoList = resp.data
          this.newTask= '';
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted(){
    this.getTodoList();
  }
}).mount('#app');