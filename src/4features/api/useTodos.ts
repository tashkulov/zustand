import { create } from "zustand";
import { nanoid } from "nanoid";
import { TodoState} from "../types/interface.ts";


export const useTodos = create<TodoState>((set) => ({
    todos: [
        { id: nanoid(), title: 'Eliza', completed: false },
        { id: nanoid(), title: 'Jonh Doe', completed: true },
        { id: nanoid(), title: 'Nadira', completed: false },
        { id: nanoid(), title: 'World', completed: true },
    ],
    loading: false,
    error: null,
    addTodo: (title: string) => set((state) => {
        const newTodo = { id: nanoid(), title, completed: false };
        return { todos: [...state.todos, newTodo] };
    }),
    toggleTodo: (id: string) => set((state) => {
        const updatedTodos = state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        return { todos: updatedTodos };
    }),
}));