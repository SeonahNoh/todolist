import TodoListItem from './TodoListItem.js';
import './TodoList.scss';


function TodoList({todos, onRemove, onToggle, onInsertToddlge, onChangeSelectedTodo}) {
    return (
        <div className="TodoList">
            {
                todos.map(todo => (
                    <TodoListItem 
                        todo={todo} 
                        key={todo.id} 
                        onRemove={onRemove} 
                        onToggle={onToggle}
                        onInsertToddlge={onInsertToddlge}
                        onChangeSelectedTodo={onChangeSelectedTodo}
                    />
                ))
            }
        </div>
    )
}

export default TodoList;