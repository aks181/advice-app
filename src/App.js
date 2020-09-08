import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
    
    state = { advice: '' }
    
    componentDidMount() {
        this.getAdvice();
    }

    getAdvice() {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const myAdvice = response.data.slip.advice;
                this.setState({advice: myAdvice})
            })
            .catch((err)=> {
                console.log("Error");
            });
    }

    render () {
        const { advice } = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">
                        {advice}
                    </h1>
                    <button onClick= {()=>this.getAdvice()} className="btn">
                        <span>Give me Advice !</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;