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

  return (
    <div className='space-y-2'>
      {todos.map((todo, i) => (
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
