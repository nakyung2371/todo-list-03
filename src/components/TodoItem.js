import React from 'react';
import './TodoItem.css'

function TodoItem({id, content, isDone, createDate, onUpdate, onDelete}) {
    //onUpdate: TodoItem에서 발생되는 이벤트를, 체크 박스를 선택, 해제
    const onClickUpdate = () => {
        onUpdate(id);
    }

    //onDelete: 버튼에서 삭제를 클릭 시 삭제
    const onClickDelete = () => {
        onDelete(id);
    }
  
    return (
        <div className='TodoItem'>
            <div className='checkbox_col'>
                <input type="checkbox" onChange={onClickUpdate} checked={isDone}/>
            </div>
            <div className='title_col'>
                {content}
            </div>
            <div className='date_col'>
                {new Date(createDate).toLocaleDateString()}
            </div>
            <div className='btn_col'>
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
}

export default TodoItem;