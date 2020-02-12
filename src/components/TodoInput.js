import React, { useState } from 'react';

const TodoInput = props => {
	const [todoInput, setTodoInput] = useState('');

	const formSubmitHandler = event => {
		event.preventDefault();
		props.addTodo(todoInput);
		setTodoInput('');
	};

	const todoInputOnChangeHandler = event => {
		setTodoInput(event.target.value);
	};

	return (
		<div>
			<form onSubmit={formSubmitHandler}>
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Enter new Todo"
						aria-label="Enter new Todo"
						value={todoInput}
						onChange={todoInputOnChangeHandler}
					/>

					<div className="input-group-append">
						<button className="btn btn-primary" type="submit">
							Add
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default TodoInput;
