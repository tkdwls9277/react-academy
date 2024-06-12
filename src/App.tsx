import React, { useState, useRef, useCallback, useEffect } from 'react';
import './App.css';
import TodoBoard from "./TodoBoard";

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState<{ id: number, checked: boolean, content: string }[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const addItem = () => {
    setTodoList([...todoList, { id: todoList[todoList.length].id + 1, checked: false, content: inputValue }])
  }
  const firstAddItems = (items: { id: number, checked: boolean; content: string }) => {
    // setTodoList([...todoList, ...items]);
    setTodoList([...todoList, items])
  }
  const setText = (text: string) => {
    // setInputValue(text)
    if (inputRef.current instanceof HTMLInputElement) {
      inputRef.current.value = text;
    }
  }
  // useEffect(() => {
  //   firstAddItems(testData[0])
  // }, []) // 빈 종속성 배열 []은 효과가 한 번만 실행되도록 보장.
  useEffect(() => {
    if (todoList.length < testData.length) {
      firstAddItems(testData[todoList.length]);
    }

  }, [todoList])


  return (
    <main>
      <input value={inputValue} type="text" onChange={(event) => setInputValue(event.target.value)} ref={inputRef}></input>
      <button onClick={addItem} >add</button>

      <TodoBoard todoList={todoList} setText={setText}></TodoBoard>
    </main>
  );
}

export default App;

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