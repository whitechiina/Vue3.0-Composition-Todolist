<template>
  <main>
    <div class="container">
      <h1>欢迎使用white的代办事项</h1>
      <todo-add />
      <todo-filter />
      <todo-list />
    </div>
  </main>
</template>

<script>
import TodoAdd from './components/TodoAdd';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
    TodoAdd,
    TodoFilter,
    TodoList
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
