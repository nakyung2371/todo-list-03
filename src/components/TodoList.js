import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'; 
 

function TodoList({todo, onUpdate, onDelete }) {
        // todo는 객체를 담은 배열 

        // 검색 상태 변화 
    const [search, setSearch] = useState(''); 

    const onChangSearch = (e) => {
        setSearch(e.target.value); 
    }

    //검색어를 처리하는 함수 : todo.filter()  <== 배열의 값을 필터해서 새로운 배열에 저장 
    const getSearchResult = () => {

        return search ==="" ?           // 삼항연산자(조건) , 검색어가 비어 있을때 
                todo :                  // 참
                todo.filter( (it) =>        // 거짓
                    it.content.toLowerCase().includes(search.toLowerCase())
                        
                );
    }




    return (
        <div className='TodoList'>
            <h4> Todo List 🥩🍗🥗🥙 </h4>

            {/*  검색 기능 추가   */}

            <input 
                value = {search}
                onChange={onChangSearch}
                className ="searchbar"
                placeholder="검색어를 입력 하세요"
            />


            <div className='list_wrapper'>

                { /*      <== 검색어 기능을 사용하지 않고  todo.map() 

                    todo.map( (it) => {

                    return  <TodoItem 
                        key = {it.id}
                        id = {it.id}
                        content = {it.content}
                        isDone={it.isDone}
                        createDate={it.createDate}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                    }
                    )
                    */ 
                }

                {/* 검색어를 사용해서 처리함 */}

                {
                    getSearchResult().map( (it) => 
                        <TodoItem 
                            key = {it.id}
                            id = {it.id}
                            content = {it.content}
                            isDone={it.isDone}
                            createDate={it.createDate}
                            onUpdate = {onUpdate}
                            onDelete = {onDelete}
                        
                        />
                  
                    )
                }



            </div>
            
        </div>
    );
}

export default TodoList;