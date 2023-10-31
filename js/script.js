const { createApp } = Vue ;

createApp({
  data(){
    return{
      apiUrl: 'server.php',
      title: 'Todo-List',
      todoList: [],
      newTask: '',
      isDone: ''
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
      if(this.newTask){
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
      }
    },
    toggleTaskStatus(singleTask, index) {
      const data = new FormData();
      data.append('indexToggle', index);
      axios.post(this.apiUrl, data)
      .then(resp => {
        this.todoList = resp.data;
        console.log(singleTask.done);
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