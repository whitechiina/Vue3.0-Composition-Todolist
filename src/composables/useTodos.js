import {
    ref,
    onMounted
} from "vue";

export default function useTodos() {
    // 创建简单数组  默认的todo数组
    const todos = ref([]);
    // 保存信息  添加todo
    const addTodo = (todo) => todos.value.push(todo);

    // 获取远程 todos
    const fetchTodos = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        const rawTodos = await response.json();
        todos.value = rawTodos.map((todo) => ({
            id: todo.id,
            content: todo.title,
            completed: todo.completed,
        }));
    };

    // 生命周期
    onMounted(() => {
        fetchTodos();
    });
    
    return {
        todos,
        addTodo,
    }
}