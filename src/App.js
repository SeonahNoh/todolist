import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate.js';
import TodoInsert from './components/TodoInsert.js';
import TodoList from './components/TodoList.js';
import TodoEdit from './components/TodoEdit.js';

function App() {
    const [todos, setTodos] = useState([
        {id:1, text: '친구 같이 편안한 To Do List, 투두프렌즈!', checked: false},
        {id:2, text: '진행바로 확인하는 나의 목표 달성률', checked: false},
        {id:3, text: '투두프렌즈로 나의 일정 관리를 시작해보세요!', checked: false}
    ]);

    const nextId = useRef(4);

    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false 
        }
        setTodos(todos.concat(todo)); 
        nextId.current += 1;
    }, [todos]); 

    const onRemove = useCallback(id => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }, [todos]);

    const onToggle = useCallback(id => {
        const checkedTodos = todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo);
        setTodos(checkedTodos);
    }, [todos]);

    const [selectedTodo, setSelectedTodo] = useState(null);
    const [insertToddlge, setInsertToddlge] = useState(false);

    const onInsertToddlge = () => {
        if(selectedTodo) {
            setSelectedTodo(null);
        }
        setInsertToddlge((prev => !prev));
    };

    const onChangeSelectedTodo = (todo) => {
        setSelectedTodo(todo);
    }

    const onUpdate = useCallback((id, text) => {
        onInsertToddlge();
        const editTodos = todos.map(todo => todo.id === id ? {...todo, text} : todo);
        setTodos(editTodos);
    }, [onInsertToddlge, todos]);

    return (
        <TodoTemplate todos={todos}> 
            {/* Todo Item을 추가할 수 있는 input 박스 */}
            <TodoInsert onInsert={onInsert} />

            {/* 할 일 Item 리스트 */}
            <TodoList 
                todos={todos} 
                onRemove={onRemove} 
                onToggle={onToggle} 
                onInsertToddlge={onInsertToddlge}
                onChangeSelectedTodo={onChangeSelectedTodo}
            />

            {
                insertToddlge && <TodoEdit onUpdate={onUpdate} selectedTodo={selectedTodo} />
            }
        </TodoTemplate>
    );
}

export default App;
