import './App.css';
import React, {Component} from 'react';
import Person from './Person/Person';

class App extends Component {

    state = {
      persons : [
        { name : "Kumar" , age :  24},
        { name : "Devi" , age : 24},
        { name : "Durga" , age : 24},
        { name : "DurgaDevi" , age : 24},
        { name : "DurgaDeviChaganti" , age : 24}
      ],
      showPersons : false
    }

    switchNameHandler = (newName) => {
      //console.log("Switch Clicked");
     // dont do this - this.state.persons[0].name = "Devika";
     this.setState({
       persons :  [
        { name : newName , age :  24},
        { name : "Devi" , age : 24},
        { name : "Durga" , age : 24},
        { name : "DurgaDevi" , age : 24},
        { name : "DurgaDeviChaganti" , age : 25}
      ]
     })

    }

    nameChangedHandler = (event) =>{
      this.setState({
        persons :  [
         { name : "Kumar" , age :  24},
         { name : "Devi" , age : 24},
         { name : "Durga" , age : 24},
         { name : "DurgaDevi" , age : 24},
         { name : event.target.value , age : 25}
       ]
      })
 

    }
    toggleNameHandler =()=>{
        const doesShow = this.state.showPersons;
        this.setState({showPersons : !doesShow})

    }

    deletePersonHandler = (personIndex) =>{
      const persons = this.state.persons;
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
    }

  render(){
    const style ={
      backgroundColor : "white",
      font : 'inherit',
      padding : '8px',
      border : '1px solid blue',
      cursor : 'pointer'
    };
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div> {this.state.persons.map((person,index) =>{
              return <Person 
                      click ={() => this.deletePersonHandler(index)}
                      name ={person.name}
                      age = {person.age}/>

        }) }
        {/* <Person name ={this.state.persons[0].name} age ={this.state.persons[0].age}>My hobby is playing</Person>
        <Person name ={this.state.persons[1].name} age ={this.state.persons[1].age} click={this.switchNameHandler.bind(this,"Devika!!")}></Person>
        <Person name ={this.state.persons[2].name} age ={this.state.persons[2].age}></Person>
        <Person name ={this.state.persons[3].name} age ={this.state.persons[3].age}></Person>
        <Person name ={this.state.persons[4].name} age ={this.state.persons[4].age} changed ={this.nameChangedHandler}></Person> */}
        </div> 
      );
    }


   return (
    <div className="App">
      <h1>Hey This is my first React App!!! JSX</h1>
     {/* <Person name ="Ramudu" age="50">My Hobby is Playing cards</Person>
      <Person name ="Kasi" age="45"/>
      <Person name = "Seshu" age="26"/>
      <Person name = "Devi" age="24">My Hobby is sleeping</Person>
      <Person name = "Raja" age="22"/> */}

      <button  style={style} onClick={this.switchNameHandler.bind(this, "Devika")}>SwitchName</button>
      <br></br><br></br>
      <button  style={style} onClick={this.toggleNameHandler}>ToggleNameHandler</button>
      {/* Taking data from State data*/}
      {/* { this.state.showPersons ?
        <div>
      <Person name ={this.state.persons[0].name} age ={this.state.persons[0].age}>My hobby is playing</Person>
      <Person name ={this.state.persons[1].name} age ={this.state.persons[1].age} click={this.switchNameHandler.bind(this,"Devika!!")}></Person>
      <Person name ={this.state.persons[2].name} age ={this.state.persons[2].age}></Person>
      <Person name ={this.state.persons[3].name} age ={this.state.persons[3].age}></Person>
      <Person name ={this.state.persons[4].name} age ={this.state.persons[4].age} changed ={this.nameChangedHandler}></Person>
      </div> : null}
      */}
      {persons}
    </div>
     // return React.createElement('div',null,React.createElement('h1',null,"This is not JSX!!"));
   );
  }
  
}

export default App;
