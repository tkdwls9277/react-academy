import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = (props: any) => {
    return (
        <div>
            <h1>todo list</h1>
            {props.todoList.map((item: any, index: number) => <TodoItem key={index} item={item} setText={props.setText}></TodoItem>)}
        </div>
    )
}

export default TodoBoard;