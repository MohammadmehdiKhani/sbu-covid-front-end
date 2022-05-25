import React from 'react';
import '../assets/SearchHistory.css';

class History extends React.Component {
    constructor(props) {
        super(props);

        this.state = { historyList: [] };
    }

    //maping on the elements in historyList
    //if clear btn is pressed the state will be empty from its elements
    render() {
        return (
            <>
                <div className="history-card">
                    <div class="search-history-text">Search history</div>
                    {this.state.historyList.map(h => <div> {h} </div>)}
                    <button class="search-history-btn" onClick={() => this.setState({ historyList: [] })} > Clear </button>
                </div>
            </>
        )
    }
}

export default History;
