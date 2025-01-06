import TodoItem from './TodoItem';

export default function TodoList({
  todos = [],
  onToggle,
  onDelete,
  onUpdate,
  isDark,
}) {
  if (todos.length === 0) {
    return (
      <div
        className={`text-center py-8 text-xl ${
          isDark ? 'text-gray-500' : 'text-gray-400'
        }`}
      >
        No tasks found. Add some tasks to get started!
      </div>
    );
  }

  const priorityOrder = { high: 1, medium: 2, low: 3 };
  const sortedTodos = [...todos].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );

  return (
    <div className='space-y-2'>
      {sortedTodos.map((todo, i) => (
        <TodoItem
          key={i}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
          isDark={isDark}
        />
      ))}
    </div>
  );
}
