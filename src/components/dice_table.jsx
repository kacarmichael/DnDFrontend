import {Component} from 'react';
import DiceCounter from "./dice_counter.jsx";

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
            </div>
        );

        function get_roll() {
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

export default DiceTable;