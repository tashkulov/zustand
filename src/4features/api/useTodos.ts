import { create } from "zustand";
import { nanoid } from "nanoid";
import {Todo, TodosState} from "../types/interface.ts";

// Определяем типы для каждого элемента в списке todos

export const useTodos = create<TodosState>((set) => ({
    todos: [
        { id: "1", title: 'Eliza', completed: false },
        { id: "2", title: 'John Doe', completed: true },
        { id: "3", title: 'Nadira', completed: true },
        { id: "4", title: 'World', completed: true },
    ],
    loading: false,
    error: null,
    addTodo: (title: string) =>
        set((state) => {
            const newTodo: Todo = { id: nanoid(), title, completed: false };
            return { todos: [...state.todos, newTodo] };
        }),
}));
