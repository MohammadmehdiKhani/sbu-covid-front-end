import React from 'react';
import '../assets/Search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = { searchText: "" };
    }

    //this function will update the state
    setSearchText(event) {
        this.state.searchText = event.target.value;
    }

    //on changing the search box, the state will be update
    //on pressing the go-btn, the call back function that is given to this component will be triggerd with the searched text
    render() {
        return (
            <div className="navbar-left">
                <label className="title" htmlFor='search-country-box'>SBU covid</label>
                <input className="search-country-box" type="text" id='search-country-box' onChange={event => this.setSearchText(event)}></input>
                <button className="go-btn" onClick={i => this.props.onSearchBtnClicked(this.state.searchText)}>Go</button>
            </div >
        )
    }
}

export default Search;


























{/* <div className="w-80">
                    <Stack direction="horizontal" gap={3}>
                        <Form.Label><h4>SBU covid</h4></Form.Label>
                        <Form.Control onChange={event => this.setSearchText(event)} className="w-50" placeholder="Country to search ..." />
                        <Button onClick={i => this.props.onSearchBtnClicked(this.state.searchText)} variant="secondary">Go</Button>
                    </Stack>
                </div> */}