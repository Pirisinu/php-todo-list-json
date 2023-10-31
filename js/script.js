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
          console.log(resp.data);
          this.newTask= '';
        })
        .catch(err => {
          console.log(err);
        });
    },
    toggleTaskStatus(singleTask) {
      singleTask.done = !singleTask.done;
      console.log(singleTask.done);
      const data = new FormData();
      data.append('newTaskStatus', singleTask.done);
      axios.post(this.apiUrl, data)
        .then(resp => {
          this.todoList = resp.data;
          this.newTask= '';
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteTask(index) {
      console.log('elemento ' + index);
    }
    ,
  },
  mounted(){
    this.getTodoList();
    this.addTask()
  }
}).mount('#app');