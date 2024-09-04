import React from "react";

export default function TodoCard(props) {
	const { children, handleDeleteTodo, handleEditTodo, index } = props;
	return (
		<li className='todoItem'>
			{children}
			<div className='actionsContainer'>
				<button
					onClick={() => {
						handleDeleteTodo(index);
					}}>
					<i class='fa-solid fa-trash'></i>
				</button>
				<button
					onClick={() => {
						handleEditTodo(index);
					}}>
					<i class='fa-solid fa-pen-to-square'></i>
				</button>
			</div>
		</li>
	);
}
