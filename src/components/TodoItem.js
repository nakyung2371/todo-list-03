import React from 'react';

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
        <div>
            <div>
                <input type="checkbox" onChange={onClickUpdate} checked={isDone}/>
            </div>
            <div>
                {content}
            </div>
            <div>
                {new Date(createDate).toLocaleDateString()}
            </div>
            <div>
                <button onClick={onDelete}>삭제</button>
            </div>
        </div>
    );
}

export default TodoItem;