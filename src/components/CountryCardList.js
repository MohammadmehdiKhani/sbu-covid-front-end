import React from 'react';
import '../assets/App.css';
import CountryCard from './CountryCard';

class CountryCardList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    //using map function, this comonent will show a list of country cards
    render() {
        return (
            <>
                {this.props.countries.map(c => <CountryCard key={c?.countryInfo?._id} country={c}></CountryCard>)}
            </>
        )
    }
}

export default CountryCardList;
