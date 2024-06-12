import React, { useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";

const TodoBoard = (props: { setText, todoList: { id: number, checked: boolean; content: string }[] }) => {
    const itemRef = useRef<HTMLInputElement>(null);
    const [ddd, setDdd] = useState<{ id: number, checked: boolean, content: string, }[]>([])
    useEffect(() => {
        // console.log("props.todoList" + props.todoList.content)
        // debugger;
        if (itemRef.current) {
            console.log("offsetHeight: " + itemRef.current.offsetHeight);
            // setDdd([...ddd, {
            //     id: props.todoList[props.todoList.length].id, checked: props.todoList[0].checked, content: props.todoList[0].content, paging: itemRef.current.offsetHeight / 400
            // }])
        }

    }, [props.todoList])
    props.todoList[0].content = "11";
    // setDdd()
    return (
        <div ref={itemRef}>
            <h1>todo list</h1>
            {props.todoList.map((item: any, index: number) => <TodoItem key={index} item={item} setText={props.setText}></TodoItem>)}
        </div>
    )
}

export default TodoBoard;