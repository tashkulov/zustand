export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export interface TodosState {
    todos: Todo[];
    loading: boolean;
    error: string | null;
    addTodo: (title: string) => void;
}
