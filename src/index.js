import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import 'tachyons';
// import { QuerySnapshot } from '@google-cloud/firestore';

// TODO: Replace the following with your app's Firebase project configuration




//   console.log(game_list);
  
//   let database = firebase.database();

const rootElement =  document.getElementById('root')
// const content = "Hello World!"
// const myClassName = "container"
// const props = {
//     className:'container',
//     children:'Hello world'
// }
// const element = <div {...props} className='my-class'/>
// const element = <div className={myClassName}>{(() => content)()}</div>


ReactDOM.render(
    <App  name={'Alex'}/>,
    rootElement
  );