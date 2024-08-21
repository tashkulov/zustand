import React from 'react';
import './TodoList.scss';
import {useTodos} from "../../api/useTodos.ts";
import {Todo} from "../../types/interface.ts";

const TodoList: React.FC = () => {
    const todos = useTodos((state) => state.todos);

    return (
        <div className="todo-list">
            {todos.length === 0 ? (
                <p>No todos available</p>
            ) : (
                todos.map((todo: Todo) => (
                    <div className={`todo-item ${todo.completed ? 'completed' : ''}`} key={todo.id}>
                        <h3>{todo.title}</h3>
                        <p>{todo.completed ? "Completed" : "Not Completed"}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default TodoList;
