import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from './HogContainer'
import OrganizeHogs from "./OrganizeHogs";

class App extends Component {

  state = {
    clickedHogs: [],
    sortBy: '',
    filterGreasy: false,
  }

  showHogInfo =( hog )=> {
    let hogNames = [...this.state.clickedHogs]
    if (hogNames.includes(hog.name))
      hogNames = hogNames.filter( name => name !== hog.name)
    else
      hogNames.push(hog.name)

    this.setState({
      clickedHogs: hogNames
    })
  }

  changeSort =( sort )=> this.setState({ sortBy: sort },()=> console.log(this.state.sortBy))

  changeFilter =( filter )=> this.setState({ filterGreasy: !this.state.filterGreasy })

  filterHogs =()=> {
    let filteredHogs = [...hogs]
    if (this.state.filterGreasy)
      filteredHogs = filteredHogs.filter(hog => hog.greased)
    
    return this.sortHogs(filteredHogs)
  }

  sortHogs =(sortedHogs)=> {
    let sortBy = this.state.sortBy
    if (sortBy === 'Name')
      sortedHogs.sort((hog1, hog2) => {
        if (hog1.name > hog2.name)
          return 1
        else if (hog1.name < hog2.name)
          return -1
        else return 0
    })
    else if (sortBy === 'Weight')
      sortedHogs.sort((hog1, hog2) => hog1.weight - hog2.weight)

      return sortedHogs
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <br/>
        <OrganizeHogs
          changeFilter = {this.changeFilter}
          changeSort = {this.changeSort}
        />
        <p style={{ align: 'center' }}>Click a hog to see its information!</p>
        <HogContainer 
          hogs = {this.filterHogs()}
          clickedHogs = {this.state.clickedHogs}
          showHogInfo = {this.showHogInfo}
        />

      </div>
    );
  }
}

export default App;
