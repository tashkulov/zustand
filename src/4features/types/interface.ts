export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export interface TodoState {
    todos: Todo[];
    loading: boolean;
    error: string | null;
    addTodo: (title: string) => void;
    toggleTodo: (id: string) => void; // Добавляем функцию для переключения статуса
}


export interface FilterState {
    filter: string;
    setFilter: (value: string) => void;
}