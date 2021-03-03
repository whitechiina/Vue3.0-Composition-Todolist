<template>
    <div class="list">
        <todolist-item v-for="(item,index) in todolist" :key="index"></todolist-item>
    </div>
</template>

<script>
    import TodolistItem from './TodoListItem.vue';
    export default {
        name: 'TodoList',
        data() {
            return {
                todolist: ['测试1', '测试2', '测试3']
            }
        },
        components: {
            TodolistItem
        }
    }
</script>

<style>
    .todo-list {
        display: grid;
        row-gap: 14px;
    }
</style>