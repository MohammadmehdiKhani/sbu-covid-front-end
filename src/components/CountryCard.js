import React from 'react';
import '../assets/CountryCard.css';


class CountryCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    //the country card will give the information from the parameter that is send to it and shows fields of that parameter in correct positions
    render() {
        return (
            <div className="country-card">
                <div className="header">{this.props.country?.country}</div>

                <div className="first-col">
                    <div className="first-row_of_first-col">
                        <label className="field">Today cases</label>
                        <div className="total-cases">{this.props.country?.todayCases}</div>
                    </div>

                    <label className="field">Critical</label>
                    <div className="critical">{this.props.country?.critical}</div>
                </div>
                <div className="second-col">
                    <div className="first-row_of_second-col">
                        <label className="field">Today deaths</label>
                        <div className="today-deaths">{this.props.country?.todayDeaths}</div>
                    </div>

                    <label className="field">Today recovered</label>
                    <div className="today-recovered">{this.props.country?.todayRecovered}</div>
                </div>
            </div>
        )
    }
}

export default CountryCard;
