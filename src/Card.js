import React from 'react';

const Card = (props) => {
    return (
        <div className='fl w-30 bg-light-green dib br3 pa3 ma2 grow bw2 shadow-3'>
            <div className='fl w-40'>
                <h2>{props.name}</h2>
                <ul>
                    <li>
                        <h4>What is it:</h4>
                        <p>{props.description}</p>
                    </li>
                    <li>
                        <h4>Number of Players:</h4>
                        <p>{props.player_num}</p>
                    </li>
                    <li>
                        <h4>What You Need:</h4>
                        <p>{props.items}</p>
                    </li>

                </ul>
                </div>
                <div className='fl w-60'>
                <h4>
                    Instructions:
                </h4>
                <ol>
                    {Object.values(props.instruction).map((vals,index)=>
                    <li key={index}>
                        {vals}
                    </li>)}
                </ol>
                
            </div>
            <div className='fl w-100'>
            <h4>Bonus:</h4>
                <p>{props.bonus}</p>
            </div>
        </div>
    );
}

export default Card; 