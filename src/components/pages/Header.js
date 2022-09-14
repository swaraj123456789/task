import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <div style={{marginTop:'10px', marginLeft:'0px'}}>
            <h4>User Data</h4>
            </div>
            <div style={{ marginTop: '30px', marginBottom: '18px'}}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Button</button>
            </div>
        </header>
    )
}

export default Header