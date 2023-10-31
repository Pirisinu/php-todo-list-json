const { createApp } = Vue ;

createApp({
  data(){
    return{
      apiUrl: 'server.php',
      title: 'Todo-List',
      todoList: [],
      newTask: '',
      isChecked: false
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
          this.todoList = resp.data;
          this.newTask= '';
        })
        .catch(err => {
          console.log(err);
        });
    },
    toggleTaskStatus(singleTask) {
      singleTask.done = !singleTask.done;
      console.log(singleTask.done);
    },
    deleteTask(index) {
      console.log('elemento ' + index);
    }
    ,
  },
  mounted(){
    this.getTodoList();
  }
}).mount('#app');