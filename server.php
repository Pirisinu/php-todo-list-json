<?php
//Accedo al file Json sotto forma di stringa
$json_todo_string = file_get_contents('todo-list.json');

//Trasformo la stringa in array PHP
$list_todo = json_decode($json_todo_string, true);

  /*Logica Per Ricodifica array json*/
/* NEW TASK */
if(isset($_POST['newTaskItem'])){
  $newTask = [
    "task" => $_POST['newTaskItem'],
    "done" => false
  ];
  //Push new task nella lista
  $list_todo[] = $newTask;
  file_put_contents('todo-list.json', json_encode($list_todo));
}
/* TASK TOGGLE DONE */
if (isset($_POST['indexToggle'])) {
  $index = $_POST['indexToggle'];
  $list_todo[$index]["done"] = !$list_todo[$index]["done"] ;
  file_put_contents('todo-list.json', json_encode($list_todo));
}
/* TASK DELETE */
if (isset($_POST['indexDel'])) {
  $index = $_POST['indexDel'];
  if ($list_todo[$index]["done"]) {
    array_splice($list_todo, $index, 1);
    file_put_contents('todo-list.json', json_encode($list_todo));
  }
}

//Trasformo il file PHP in un file Json
header('Content-Type: application/json');

//Stampo la lista ricodificata in base alla logica
//La lista PHP torna ad essere stringa e viene stampata
echo json_encode($list_todo);
