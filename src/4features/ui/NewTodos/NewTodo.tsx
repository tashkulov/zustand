import React, { useState } from 'react';
import './NewTodo.scss';
import {useTodos} from "../../api/useTodos.ts";

const NewTodo: React.FC = () => {
    const addTodo = useTodos((state) => state.addTodo);
    const [title, setTitle] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            addTodo(title);
            setTitle("");
        }
    };

    return (
        <div className="new-todo">
            <form onSubmit={handleSubmit} className="todo-form">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter new todo"
                    className="todo-input"
                />
                <button type="submit" className="todo-submit">Add Todo</button>
            </form>
        </div>
    );
};

export default NewTodo;
