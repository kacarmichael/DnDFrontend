// import { useState } from 'react'
import './App.css'
import DiceTable from "./components/dice_table.jsx";
import ProbabilityChart from "./components/probability_chart.jsx";
import ExampleDiceTable from "./components/example_dice.jsx";

import { env } from 'react-dotenv';

function App() {
    return (
        <>
            <div>
                <h1>{env.NODE_ENV}</h1>
                <ExampleDiceTable/>
                <DiceTable/>
                <div id="roll_output"></div>
                <ProbabilityChart key="1"/>
            </div>
        </>
    )
}

export default App
