import React, { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todos = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = newTodo => {
		if (newTodo) {
			setTodos(prevTodos => {
				return [...prevTodos, newTodo];
			});
		}
	};

	const deleteTodo = todoIndexToDelete => {
		setTodos(prevTodos => {
			return prevTodos.filter((__value, index) => {
				return index !== todoIndexToDelete;
			});
		});
	};

	return (
		<div>
			<TodoInput addTodo={addTodo} />
			<TodoList todos={todos} deleteTodo={deleteTodo} />
		</div>
	);
};

export default Todos;
