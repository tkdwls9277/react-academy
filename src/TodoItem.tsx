import React, { useState, useEffect } from "react";

const TodoItem = (props: any) => {
    const [selectText, setSelectText] = useState({ value: '' });//3
    const clickItem = () => {
        setSelectText({ ...selectText, value: props.item.content })
    }
    useEffect(() => {
        props.setText(selectText.value)
    }, [selectText])

    // TODO: checkbox 클릭 시 상태변경 미완성
    // const changeCheckbox=(value)=>{
    //     props.setText
    // }
    return (
        <div className="todo-item" onClick={clickItem} >
            {/* <input type="checkbox" checked={props.item.checked}></input> */}
            {props.item.content}
        </div>
    )
}

export default TodoItem;