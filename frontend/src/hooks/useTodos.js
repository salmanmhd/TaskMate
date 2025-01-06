import { useState, useEffect } from 'react';

export function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('http://localhost:5000/todos', {
          headers: {
            Authorization: token,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setTodos(data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async (title, priority, category) => {
    const token = localStorage.getItem('token');
    const newTodo = {
      title,
      priority,
      category,
      completed: false,
      subtasks: [],
      notes: '',
    };

    try {
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(newTodo),
      });
      const data = await response.json();
      if (response.ok) {
        setTodos([data, ...todos]);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const toggleTodo = async (id) => {
    const token = localStorage.getItem('token');
    const todo = todos.find((t) => t._id === id);
    if (!todo) return;

    const updatedTodo = { ...todo, completed: !todo.completed };

    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({ completed: updatedTodo.completed }),
      });
      const data = await response.json();
      if (response.ok) {
        setTodos(todos.map((t) => (t._id === id ? { ...t, ...data } : t)));
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
      });
      if (response.ok) {
        setTodos(todos.filter((t) => t._id !== id));
      } else {
        const data = await response.json();
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const updateTodo = async (id, updates) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(updates),
      });
      const data = await response.json();
      if (response.ok) {
        setTodos(todos.map((t) => (t._id === id ? { ...t, ...data } : t)));
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return { todos, addTodo, toggleTodo, deleteTodo, updateTodo };
}
