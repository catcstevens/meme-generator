import React from 'react';

function Header() {
    return(
        <div>
            <header className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex justify-around">
            <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
            alt="Problem?"    
            />
            <h1 className="text-6xl text-white">Meme Generator</h1>
            </header>
        </div>
    )
}

export default Header