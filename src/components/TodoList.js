import React from 'react';

const TodoList = props => {
	return (
		<div>
			<ul className="list-group">
				{props.todos.map((value, index) => {
					return (
						<li
							className={
								'list-group-item d-flex ' +
								'justify-content-between align-items-center'
							}
							key={index}
						>
							{value}
							<span type="button" onClick={() => props.deleteTodo(index)}>
								<i className="far fa-times-circle"></i>
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default TodoList;
