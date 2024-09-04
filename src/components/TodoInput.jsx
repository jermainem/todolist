import React, { useState } from "react";

export default function TodoInput(props) {
	const { handleAddTodos, todoValue, setTodoValue } = props;
	const isButtonDisabled = todoValue.trim() === "";

	return (
		<header>
			<input
				value={todoValue}
				onChange={e => {
					setTodoValue(e.target.value);
				}}
				placeholder='Enter todo'
			/>
			<button
				disabled={isButtonDisabled}
				onClick={() => {
					handleAddTodos(todoValue);
					setTodoValue("");
				}}>
				Add
			</button>
		</header>
	);
}
