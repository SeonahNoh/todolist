import { useState, useCallback } from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

function TodoInsert({onInsert}) {
    const [value, setValue] = useState('');
    
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    }, [onInsert, value]);

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <button type='submit'>
                <MdAdd />
            </button>
            <input 
                placeholder='Add To Do List' 
                value={value} 
                onChange={onChange}
            />
        </form>
    )
}

export default TodoInsert;