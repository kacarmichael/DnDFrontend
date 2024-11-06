// import { useState } from 'react'
import './App.css'
import DiceTable from "./components/dice_table.jsx";
//import probability_chart from "./components/probability_chart.jsx";
import ExampleDiceTable from "./components/example_dice.jsx";

function App() {
    return (
        <>
            <div>
                <ExampleDiceTable/>
                <DiceTable/>
                <div id="roll_output"></div>
            </div>
        </>
    )
}

export default App
