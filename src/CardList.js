import React from 'react';
import Card from './Card'

const CardList = ({games} ) => {
    // console.log(games);
    let game = []
    let instruction = []
    Object.keys(games).map((key,index) => {
            
            
        if (key !== 'Instructions'){
            // console.log(key);
            // console.log(this.state.games[key]);
            game.push(games[key])
        }else{
            Object.keys(games['Instructions']).map((key,index)=>{
                // console.log(this.state.games['Instructions'][key]);
                instruction.push(games['Instructions'][key])
            })
        }
    }
    );
    // console.log(Object.keys(game) );
    // game.map((vals)=>{
    //     console.log(Object.values(vals)[0] );
    //     Object.values(vals)[0].key.map((x)=>{
            
    //     })
    // })
    // Object.values(game).map((vals)=>{
    //     console.log(Object(vals).bonus);
        
    // })
    // console.log(Object.values(game)[0]);
    
    
    return (
        <div>
            {Object.values(game).map((vals) =>
            <Card bonus={Object(vals).bonus}
             instruction={Object(vals).Instructions}
             description={Object(vals).description}
             items ={Object(vals).items}
             player_num ={Object(vals).player_num}
             name={Object(vals).name}
             />
            )}
        </div>
    );
}

export default CardList; 