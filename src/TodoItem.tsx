import React, { useState, useEffect, useRef } from "react";

const TodoItem = (props: any) => {
    const [selectText, setSelectText] = useState({ value: '' });//3
    const clickItem = () => {
        setSelectText({ ...selectText, value: props.item })
    }
    useEffect(() => {
        props.setText(selectText.value)
    }, [selectText])
    return (
        <div className="todo-item" onClick={clickItem} >
            {props.item}
        </div>
    )
}

export default TodoItem;