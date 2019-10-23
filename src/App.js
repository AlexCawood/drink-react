import React, {Component} from 'react';
import CardList from './CardList'
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";
import { log } from 'util';
// import "firebase/firestore";

let firebaseConfig = {
    apiKey: "AIzaSyB0SXFvBdDpzHVKK_RWq3x8bSPoQS2P3Po",
    authDomain: "drink-react.firebaseapp.com",
    databaseURL: "https://drink-react.firebaseio.com",
    projectId: "drink-react",
    storageBucket: "drink-react.appspot.com",
    messagingSenderId: "387766960018",
    appId: "1:387766960018:web:ad5f526c7677e8034c4b4b",
    measurementId: "G-YZY3Z2QB3K"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database()

class App extends Component{
    constructor(){
        super()
        this.state ={
            'games':[]
        }
    }

    // let game_list = null
    async componentDidMount(){
            const response = await db.ref("games").once('value', snapshot=> {
            return snapshot.val()
        })

    let result = await response.toJSON();
    this.setState({'games':result})
    
    }

    the_games = ()=>{
        // console.log(this.state.games['instructions']);
        
        
        
        // return(
        //     <div>
        // <ul>{games.map((vals,index) =>
        //     <li key={index}>
        //         {Object.values(vals) }
        //     </li>)}
        //     </ul>
        //     <ul>
        //     {instruction.map((vals,index) =>
        //     <li key={index}>
        //         {Object.values(vals)}
        //     </li>)}
        //     </ul>
        //     </div>);
    }
    
    render(){
        // this.the_games()
        return(
            <div >
                <h1 className='tc'>Drinking Games</h1>
                {/* {this.the_games()} */}
                <CardList games={this.state.games}/>
            </div>
        )
    }
}

export default App;