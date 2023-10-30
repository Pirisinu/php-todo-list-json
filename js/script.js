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
      ]
    }
  }
}).mount('#app');