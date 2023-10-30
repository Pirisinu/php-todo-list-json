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
      todoList: []
    }
  },
  created(){
    axios.get('todo-list.json')
      .then(resp => {
        console.log(resp.data);
        this.todoList = resp.data
      })
  }
}).mount('#app');