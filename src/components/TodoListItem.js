import {MdCheckBoxOutlineBlank, MdCheckBox, MdModeEdit, MdClear} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

function TodoListItem({todo, onRemove, onToggle, onInsertToddlge, onChangeSelectedTodo}) {
    const {id, text, checked} = todo;

    return (
        <div className="TodoListItem">
            {/* 체크박스 */}
            <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                {
                    checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />
                }
                <div className='text'>{text}</div>
            </div>

            {/* 수정 버튼 */}
            <div className='edit' onClick={() => {
                onChangeSelectedTodo(todo)
                onInsertToddlge();
            }}>
                <MdModeEdit />
            </div>
            
            {/* 삭제 버튼 */}
            <div className='remove' onClick={() => onRemove(id)}>
                <MdClear />
            </div>
        </div>
    )
}

export default TodoListItem;