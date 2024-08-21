import './App.scss';
import TodoList from "./4features/ui/Todolist/TodoList.tsx";
import NewTodo from "./4features/ui/NewTodos/NewTodo.tsx";

function App() {
    return (
        <div className="app-container">
            <h1 className="app-title">Todo App</h1>
            <NewTodo />
            <TodoList />
        </div>
    );
}

export default App;
