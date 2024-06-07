import React, { useState, useEffect } from "react";

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


const testData: { id: number, checked: boolean; content: string }[] = [
    // 개수 20개
    { id: 1, checked: true, content: "aa" },
    { id: 2, checked: true, content: "bb" },
    { id: 3, checked: false, content: "cc" },
    { id: 4, checked: true, content: "dd" },
    { id: 5, checked: true, content: "ff" },
    { id: 6, checked: true, content: "gg" },
    { id: 7, checked: false, content: "hh" },
    { id: 8, checked: false, content: "oo" },
    { id: 9, checked: true, content: "pp" },
    { id: 10, checked: false, content: "qq" },
    { id: 11, checked: false, content: "rr" },
    { id: 12, checked: false, content: "ss" },
    { id: 13, checked: false, content: "tt" },
    { id: 14, checked: true, content: "uu" },
    { id: 15, checked: true, content: "vv" },
    { id: 16, checked: true, content: "ww" },
    { id: 17, checked: false, content: "xx" },
    { id: 18, checked: false, content: "yy" },
    { id: 19, checked: true, content: "zz" },
    { id: 20, checked: true, content: "ll" },
]