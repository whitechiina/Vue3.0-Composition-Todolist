<template>
    <div class="todo-list">
        <todolist-item 
            v-for="todo in todos"
            :key="todo.id" 
            :todo-item="todo"
            @change-state="todo.completed = $event.target.checked"
            ></todolist-item>
    </div>
</template>

<script>
    import TodolistItem from './TodoListItem.vue';
    export default {
        name: 'TodoList',
        components: { TodolistItem },
        props: ['todos']
    }
</script>

<style>
    .todo-list {
        display: grid;
        row-gap: 14px;
    }
</style>