import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


class Timer extends React.Component {
    constructor(){
        super();
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount(){
        this.intetvalID = setInterval(() => {       
        this.setState({
        time: new Date().toLocaleTimeString()
        })
        },1000);
    }

    render(){
        return(
            <div>
                <h2>{this.state.time}</h2>
            </div>
        )
    }

}
export default Timer;