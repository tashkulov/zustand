import React from 'react';
import './TodoList.scss';
import { useTodos } from "../../api/useTodos.ts";
import { useFilter } from "../../api/useFilter.ts";
import { Todo } from "../../types/interface.ts";

const TodoList: React.FC = () => {
    const todos = useTodos((state) => state.todos);
    const filter = useFilter((state) => state.filter);
    const toggleTodo = useTodos((state) => state.toggleTodo);

    const filteredTodos = todos.filter((todo: Todo) => {
        if (filter === "completed") return todo.completed;
        if (filter === "uncompleted") return !todo.completed;
        return true;
    });

    return (
        <div className="todo-list">
            {filteredTodos.length === 0 ? (
                <p>No todos available</p>
            ) : (
                filteredTodos.map((todo: Todo) => (
                    <div
                        className={`todo-item ${todo.completed ? 'completed' : ''}`}
                        key={todo.id}
                        onClick={() => toggleTodo(todo.id)} // Добавляем обработчик клика
                    >
                        <h3>{todo.title}</h3>
                        <p>{todo.completed ? "Completed" : "Not Completed"}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default TodoList;
