import React, { useState, useEffect } from 'react'
import listPersons from "./Comm"
import axios from "axios"

const Filter = (props) => {
    const [letters, setLetters] = useState("")

    const handleLetters = (event) => {
        setLetters(event.target.value);
        props.handleFilterBy(event.target.value)
    }

    return (<div>Filter shown with <input value={letters} onChange={handleLetters} /></div>)
}

const PersonForm = (props) => {
    // NOTE:
    // - We get persons and setPersons from parent component via props.
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('')

    const handleInputChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleAdding = (event) => {
        event.preventDefault();
        if (props.persons.some(item=> item.name === newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
          props.setPersons(props.persons.concat({name: newName, number: newNumber}));
          setNewName("");
          setNewNumber("");
      }
    }

    return (
        <form>
        <div>
        name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={handleAdding} >add</button>
        </div>
      </form>
    )
}

const Persons = (props) => {
    const persons = props.persons;
    const filterBy = props.filterBy;

    return (
        <div>
            {persons.filter(item => item.name.toLowerCase().indexOf(filterBy)>-1).map( item => {
                return (<p key={item.name+item.number}>{item.name} {item.number}</p>)
            })}
        </div>
    )
}

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ filterBy, setFilterBy ] = useState("")

  useEffect(
    ()=>{
      const fetchedPersons = listPersons();
      console.log(fetchedPersons)
      setPersons(fetchedPersons)
    }
    , []
  )

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter handleFilterBy={setFilterBy} />
    <h3>Add a new</h3>
        <PersonForm setPersons={setPersons} persons={persons} />
      <h3>Numbers</h3>
      <Persons persons={persons} filterBy={filterBy} />
    </div>
  )
}

export default App