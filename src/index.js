import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Button, Display,App} from './App';
import reportWebVitals from './reportWebVitals';
/*
ReactDOM.render(
    <React.StrictMode>
        <Button />
    </React.StrictMode>,
    document.getElementById('root')
);

 */

/*
ReactDOM.render(
[<Button />, <Display />],
    document.getElementById('root')
);
*/

/*
ReactDOM.render(
    <div>
        <Button />
        <Display />
    </div>
        ,
    document.getElementById('root')
);

*/

ReactDOM.render(
    <App />,
    document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
