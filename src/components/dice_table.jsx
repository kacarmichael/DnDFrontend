import {Component} from 'react';
import DiceCounter from "./dice_counter.jsx";
//import probabilityChart from "./probability_chart.jsx";

const get_apiURL = 'http://localhost:5025/api/Roll'

class DiceTable extends Component {
    render() {
        return (
            <div>
                <DiceCounter sides="4" value="0"/>
                <DiceCounter sides="8" value="0"/>
                <DiceCounter sides="10" value="0"/>
                <DiceCounter sides="12" value="0"/>
                <DiceCounter sides="20" value="0"/>
                <DiceCounter sides="100" value="0"/>
                <button onClick={get_roll}>Roll</button>
                <button onClick={get_probability}>Probability</button>
            </div>
        );

        function get_probability() {
            console.log("get_probability called")
            //document.getElementById("probability_output").innerHTML = <probabilityChart/>;
        }

        function get_roll() {
            if (import.meta.env.DEV) {
                const example_dice = {
                    "diceSet": {
                        "4": 0,
                        "8": 0,
                        "10": 0,
                        "12": 0,
                        "20": 1,
                        "100": 0
                    }
                }
                var sum = 0;
                for (const key in example_dice.diceSet) {
                    for(var i = 0; i < example_dice.diceSet[key]; i++) {
                        sum += Math.floor(Math.random() * key) + 1;
                    }
                }
                document.getElementById("roll_output").innerHTML = '<p>' + sum + '</p>';
            }
            else {
            var rollObj = {};
            rollObj['diceSet'] = {};
            var inputs = document.querySelectorAll("input.dice-input");
            inputs.forEach(function(input) {
                rollObj['diceSet'][input.name.slice(1)] = input.value === "" ? 0 : parseInt(input.value);
            });
            console.log(rollObj);

            fetch(get_apiURL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(rollObj)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                document.getElementById("roll_output").innerHTML = '<p>' + data.rollSum + '</p>';
            });
        }
        }
    }


}

export default DiceTable;