import { useCallback, useState, useEffect } from "react";
import './TodoEdit.scss';


function TodoEdit({selectedTodo, onUpdate}) {
    const [value, setValue] = useState('');
    
    const onChange = useCallback(e => {
      setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
      onUpdate(selectedTodo.id, value);
      setValue('');
      e.preventDefault();
    }, [onUpdate, value]);

    useEffect(() => {
      if(selectedTodo) {
          setValue(selectedTodo.text);
      }
    }, [selectedTodo])

    return (
      <div className="TodoEdit">
        <form className="TodoEdit-form" onSubmit={onSubmit}>
          <input 
            onChange={onChange}
            value={value}
            placeholder="수정할 내용을 입력하세요."
          />
          <button type="submit" className="edit-btn">수정하기</button>
        </form>
      </div>
    )
}

export default TodoEdit;