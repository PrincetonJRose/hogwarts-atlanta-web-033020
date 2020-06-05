import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from './HogContainer'
import OrganizeHogs from "./OrganizeHogs";

class App extends Component {
  constructor() {
    super()
    // console.log('I hit the constructor')
    
    this.state = {
      hogs: [],
      clickedHogsIds: [],
      sortBy: '',
      filterByGreased: false,
    }
  }

  componentDidMount =()=> {
    // console.log("I hit the lifecycle")

   //fetch my data
   //setting my state with the response
   let addHogIds = [...hogs] // making a copy of the array with the spread operator

   // map over array to add in ids
   addHogIds = addHogIds.map((hog, index) => {
     return {...hog, id: index}
   })
   this.setState({
     hogs: addHogIds
   })
  }

  flipHogCard =( hog )=> {
    let clicked = [...this.state.clickedHogsIds]
    if (clicked.includes(hog.id))
      clicked = clicked.filter(id => id !== hog.id)
    else
      clicked.push(hog.id)

    this.setState({
      clickedHogsIds: clicked
    })
  }

  filterHogs =()=> {
    let filteredHogs = [...this.state.hogs]
    if (this.state.filterByGreased)
      filteredHogs = filteredHogs.filter( hog => hog.greased )
    
    return this.sortHogs(filteredHogs)
  }

  sortHogs =(hogs)=> {
    if (this.state.sortBy === 'Name')
      hogs.sort((hog1, hog2) => {
        if (hog1.name > hog2.name)
          return 1
        else if (hog1.name < hog2.name)
          return -1
        else return 0
      })
    else if (this.state.sortBy === 'Weight')
      hogs.sort((hog1, hog2) => hog1.weight - hog2.weight )
    
    return hogs
  }

  changeSort =( value )=> this.setState({ sortBy: value }, ()=> console.log(this.state.sortBy))
  changeFilter =( value )=> this.setState({ filterByGreased: !this.state.filterByGreased })

  render() {
    // console.log('I hit the render')
    return (
      <div className="App">
        <Nav />
        <br/>

        <OrganizeHogs
          changeFilter = {this.changeFilter}
          changeSort = {this.changeSort}
        />
        <br/>

        <HogContainer
          hogs = {this.filterHogs()}
          clickedHogsIds = {this.state.clickedHogsIds}
          flipHogCard = {this.flipHogCard}
        />
      </div>
    );
  }
}

export default App;
