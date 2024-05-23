import React, { useState, useRef, useCallback, useEffect } from 'react';
import './App.css';
import TodoBoard from "./TodoBoard";

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const addItem = () => {
    setTodoList([...todoList, inputValue])
  }
  const setText = (text: string) => {
    // setInputValue(text)
    if (inputRef.current instanceof HTMLInputElement) {
      inputRef.current.value = text;
    }
  }

  return (
    <main>
      <input value={inputValue} type="text" onChange={(event) => setInputValue(event.target.value)} ref={inputRef}></input>
      <button onClick={addItem} >add</button>

      <TodoBoard todoList={todoList} setText={setText}></TodoBoard>
    </main>
  );
}

export default App;
