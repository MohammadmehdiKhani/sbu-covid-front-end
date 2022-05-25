import React from 'react';
import Search from './Search';
import Criteria from './Criteria';
import History from './History';
import '../assets/App.css';
import Popup from './Popup';
import CountryCardList from './CountryCardList';

class App extends React.Component {
  constructor(props) {
    super(props);

    //creating a refrence to Criteria and History components to using their states
    this.criteriaRef = React.createRef();
    this.historyRef = React.createRef();

    //in the first the value of this component states are null
    this.state = { countries: null, searchHistory: null, errorMessage: null, criteria: null }
  }

  //acording to value that user enterd into search box, this function decides to run which fetching function
  SearchCountries(searchedText) {
    if (searchedText === "") {
      //reading the state of criteria with ref
      const selectedCriteria = this.criteriaRef.current.state.selectedCriteria;
      this.fetchByCriteria(selectedCriteria);
    }
    else {
      //reading the state of History component with ref
      const historyList = this.historyRef.current.state.historyList;
      //adding the searched country into the array
      historyList.push(searchedText);
      //updating the state of History component
      this.historyRef.current.setState({ historyList: historyList });
      this.fetchSingleCountry(searchedText);
    }
  }

  //fetch a single country according to searched country
  fetchSingleCountry(country) {
    let url = `https://corona.lmao.ninja/v2/countries/${country}?yesterday=true&strict&query%20`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          //if response was not ok there is no such country, go to catch block because the with 404 error we does not go in catch. so we throw an Error with our custom error message 
          this.setState({ countries: null });
          throw Error("There is no such country. Watch your spelling...");
        }
        //if the response was ok we set errorMessage to null (because we use error message value in render function to decide to show or not show Popup component)
        this.setState({ errorMessage: null });
        return res.json();
      })
      //putting data between brackets because countries is an array of countries
      .then(data => this.setState({ countries: [data] }))
      .catch(err => this.setState({ errorMessage: err.message }));
  }

  //fetch multiple countries by selected criteria
  fetchByCriteria(criteria) {
    let url = `https://corona.lmao.ninja/v2/countries?yesterday=true&sort=${criteria}`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          this.setState({ countries: null });
          throw Error("There is no such country. Watch your spelling...");
        }
        this.setState({ errorMessage: null });
        return res.json();
      })
      .then(data => this.setState({ countries: data }))
      .catch(err => this.setState({ errorMessage: err.message }));
  }


  //we give a call back function to search and it will triggerd when the go-btn is pressed, this call back will give the text that entered to search box, to first function of app
  //we give a call back function to critria and it will triggerd when one of radio buttons is pressed
  //showing popup depends on error message. if error message is null we dont show popup (this is conditional template)
  //history component will show the search history
  //showing countries depends on countries state ... (conditioal template)
  render() {
    return (
      <>
        <nav className="nav-list">
          <Search onSearchBtnClicked={i => this.SearchCountries(i)}></Search>
          <Criteria ref={this.criteriaRef} onCriteriaChanged={i => this.setState({ criteria: i })}></Criteria>
        </nav>
        {this.state.errorMessage && <Popup handleClose={() => this.setState({ errorMessage: null })} content={this.state.errorMessage}></Popup>}

        <div className="history-and-countries">
          <div className="history">
            <History ref={this.historyRef}></History>
          </div>

          <div className="countries">
            {this.state.countries && <CountryCardList countries={this.state.countries.slice(0, 5)}></CountryCardList>}
          </div>
        </div>
      </>
    )
  }
}

export default App;