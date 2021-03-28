import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
    return (
        <div>
            Selamat datang di web jelek
        </div>
    )
}

ReactDOM.render(
    <App />, 
document.getElementById('root')
);
// ReactDOM.render(<App />, document.querySelector('#root'))