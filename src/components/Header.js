import React from 'react';

function Header() {
    //windows + . : 이모티콘

    return (
        <div>
            <h3>오늘은 🐹🐭🐺</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
}

export default Header;