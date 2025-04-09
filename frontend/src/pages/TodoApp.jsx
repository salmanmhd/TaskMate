import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import TodoFiltersComponent from "../components/TodoFilters";
import TodoStats from "../components/TodoStats";
import { useTodos } from "../hooks/useTodos";

function TodoApp({ isDark, filters, setFilters }) {
  const { todos, addTodo, toggleTodo, deleteTodo, updateTodo } = useTodos();

  const filteredTodos = todos.filter((todo) => {
    const statusMatch =
      filters.status === "all"
        ? true
        : filters.status === "completed"
        ? todo.completed
        : !todo.completed;
    const priorityMatch =
      filters.priority === "all" || todo.priority === filters.priority;
    const categoryMatch =
      !filters.category || todo.category === filters.category;
    return statusMatch && priorityMatch && categoryMatch;
  });

  return (
    <>
      <TodoInput onAdd={addTodo} isDark={isDark} />
      {filteredTodos.length > 0 && (
        <TodoFiltersComponent
          filters={filters}
          onFilterChange={setFilters}
          isDark={isDark}
        />
      )}
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onUpdate={updateTodo}
        isDark={isDark}
      />
      {filteredTodos.length > 0 && (
        <TodoStats todos={filteredTodos} isDark={isDark} />
      )}
    </>
  );
}

export default TodoApp;
