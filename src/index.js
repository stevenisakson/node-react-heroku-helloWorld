import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import App2 from './App2';
import TargetHeader from './TargetHeader';

import './index.css';
var element = React.createElement('h1', { className: 'greeting'}, 'Goodbye, world!'); 
function PageHeader(){
    return(
        <div>This is the header that's being updated</div>
    );
}
function ReturnName(props){
    return(
        <div>
        <p>This is my first name: {props.fName}</p>
        <p>This is my last name: {props.lName}</p>
        </div>
    );
}
function RootApp(){
    return(
        <div>
            <div styleClass="headerStyle">
                <TargetHeader /> 
            </div>
            <PageHeader />
            <ReturnName fName="Steve" lName="Isakson" />
            <ReturnName fName="Mark" lName="S" />
            
        </div>    
    );
}
//ReactDOM.render(<App />, document.getElementById('app2'));
//ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(<RootApp />,document.getElementById('root'));
registerServiceWorker();
