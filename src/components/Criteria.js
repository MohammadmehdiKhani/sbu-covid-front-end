import React from 'react';
import '../assets/App.css';
import '../assets/Criteria.css';

class Citeria extends React.Component {
    constructor(props) {
        super(props);

        this.state = { selectedCriteria: "todayCases" };
    }

    //on changing each of the radio btns, the state of this component will update
    render() {
        return (
            <div className="navbar-right">
                <div className="item-group">
                    <input type="radio" id="todayCases" name="criteria" value="todayCases" onChange={event => this.setState({ selectedCriteria: event.target.value })} />
                    <label htmlFor="todayCases">Today cases</label>
                </div>

                <div className="item-group">
                    <input type="radio" id="todayDeathes" name="criteria" value="todayDeaths" onChange={event => this.setState({ selectedCriteria: event.target.value })} />
                    <label htmlFor="todayDeathes">Today deathes</label>
                </div>

                <div className="item-group">
                    <input type="radio" id="todayRecovered" name="criteria" value="todayRecovered" onChange={event => this.setState({ selectedCriteria: event.target.value })} />
                    <label htmlFor="todayRecovered">Today recovered</label>
                </div>
            </div>
        )
    }
}

export default Citeria;



















{/* <Stack className="justify-content-md-center" direction="horizontal" gap={3}>
                    <Form.Check type="radio" value="todayDeaths" name="orderBy" label="todayDeaths" />
                    <Form.Check type="radio" value="todayCases" name="orderBy" label="todayCases" />
                    <Form.Check type="radio" value="recovered" name="orderBy" label="recovered" />
                </Stack> */}
