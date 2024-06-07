import React, { useState, useRef, useCallback, useEffect, createContext, useContext } from 'react';
import './App.css';
import TodoBoard from "./TodoBoard";

const inputText = createContext<{ testText: string, setTestResult: (newValue: string) => void }>({ testText: "", setTestResult: (newValue: string) => { } });



export const useTextContext = () => {
  const { testText } = useContext(inputText);

  if (!inputText) {
    throw new Error("provider not found" + a);
  }

  return testText
}

export const useSetTextContext = () => {
  const { setTestResult } = useContext(inputText);

  if (!inputText) {
    throw new Error()
  }

  return setTestResult;
}


function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const addItem = () => {
    setTodoList([...todoList, testText])
  }
  const setText = (text: string) => {
    // setInputValue(text)
    if (inputRef.current instanceof HTMLInputElement) {
      inputRef.current.value = text;
    }
  }
  const [testText, setTestText] = useState<string>("");
  const text = useContext(inputText);
  const text = useTextContext();
  const setTestResult = useSetTextContext();

  const setTestResult = (newValue: string) => {
    setTestText(newValue)
  }

  return (
    <CountProvider>
      <input value={testText} type="text" onChange={(event) => setTestResult(event.target.value)} ref={inputRef}></input>
      <button onClick={addItem} >add</button>

      <TodoBoard todoList={todoList} setText={setText}></TodoBoard>
    </CountProvider>
  );
}

export default App;
