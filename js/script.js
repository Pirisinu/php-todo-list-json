const { createApp } = Vue ;

createApp({
  data(){
    return{
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
      .get('todo-list.json')
      .then(resp => {
        console.log(resp.data);
        this.todoList = resp.data
      })
      .catch(err => {
        console.log(err);
      });
    },
    addTask(){
      console.log(this.newTask);
      this.todoList.push(this.newTask);
      this.newTask= '';
    }
  },
  mounted(){
    this.getTodoList();
  }
}).mount('#app');