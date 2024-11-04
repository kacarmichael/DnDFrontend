import React from "react";
import PropTypes from "prop-types";


class probabilityChart extends React.Component {
    static propTypes = {
        diceSet: PropTypes.object.isRequired,
        sum: PropTypes.number.isRequired
    }
    render() {

        return (
            <div>
                <h1>{this.diceSet}</h1>
                <h2>{this.sum}</h2>
            </div>
        );
    }
}

export default probabilityChart