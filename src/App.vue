<template>
  <main>
    <div class="container">
      <h1>欢迎使用white的代办事项</h1>
      <todo-add :tid="todos.length" @add-todo="addTodo" />
      <todo-filter />
      <todo-list :todos="todos" />
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
import TodoAdd from './components/TodoAdd';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
export default {
  name: 'App',
  components: {
    TodoAdd,
    TodoFilter,
    TodoList
  },
  setup() {
    // 创建简单数组  默认的todo数组
    const todos = ref([]); 
    const addTodo = (todo) => todos.value.push(todo);
    return {
      todos,
      addTodo
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}

/* 整个页面 */
main {
  width: 100vw;
  min-height: 100vh;
  padding: 10vh 0;
  display: grid;
  align-items: start;
  justify-items: center;
  background: #d8dfff;
}

.container {
  width: 60%;
  max-width: 400px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(245, 246, 252);
}

</style>
