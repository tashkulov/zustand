import './App.scss';
import TodoList from "./4features/ui/Todolist/TodoList.tsx";
import NewTodo from "./4features/ui/NewTodos/NewTodo.tsx";
import Filter from "./4features/ui/FIlter/Filter.tsx";

function App() {
    return (
        <div className="app-container">
            <h1 className="app-title">Todo App</h1>
            <Filter/>
            <NewTodo />
            <TodoList />
        </div>
    );
}

export default App;
