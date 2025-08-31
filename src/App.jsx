import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Timer from './Timer.jsx';
import Title from './Title.jsx'
class App extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className='main' >
                <h1><Title/></h1>
                <h2><Timer/></h2>
            </div>
        )
    }
}

export default App;
