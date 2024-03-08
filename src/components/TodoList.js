import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todo, onUpdate, onDelete }) {
    //todo는 객체를 담은 배열
    return (
        <div>

            {
                todo.map((it) => {

                return <TodoItem
                        id={it.id}
                        content={it.content}
                        idDone={it.isDone}
                        createDate={it.createDate}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                }
                )
            }
        </div>
    );
}

export default TodoList;