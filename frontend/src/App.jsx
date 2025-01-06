import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFiltersComponent from './components/TodoFilters';
import TodoStats from './components/TodoStats';
import { useTodos } from './hooks/useTodos';
import { useTheme } from './hooks/useTheme';
import Signup from './components/Signup';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import UserProfile from './components/UserProfile';

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    category: '',
  });

  return (
    <Router>
      <div
        className={`min-h-screen ${
          isDark
            ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white'
            : 'bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900'
        } transition-colors duration-300`}
      >
        <div className='container mx-auto px-4 py-8 max-w-3xl'>
          <div className='flex justify-between items-center'>
            <Header isDark={isDark} onThemeToggle={toggleTheme} />
            <UserProfile />
          </div>
          <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route
              path='/'
              element={
                <ProtectedRoute>
                  <TodoApp
                    isDark={isDark}
                    filters={filters}
                    setFilters={setFilters}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// New component to encapsulate the todo logic
function TodoApp({ isDark, filters, setFilters }) {
  const { todos, addTodo, toggleTodo, deleteTodo, updateTodo } = useTodos();

  const filteredTodos = todos.filter((todo) => {
    const statusMatch =
      filters.status === 'all'
        ? true
        : filters.status === 'completed'
        ? todo.completed
        : !todo.completed;
    const priorityMatch =
      filters.priority === 'all' || todo.priority === filters.priority;
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
