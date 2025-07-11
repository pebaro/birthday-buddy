import { useState } from "react"
import { peopleData } from '../data'

import { Person } from "./Person"

const List = () => {
  const [people, setPeople] = useState(peopleData)

  const removePerson = id => {
    setPeople(
      people.filter(
        person => person.id !== id
      )
    )
  }

  return (
    <section className="container">
      <h3 className='center'>{people.length} Birthdays Today</h3>

     { 
        people.map(
          person => <div key={person.id} className="person-container">
            <Person {...person} width='' />
            <button type='button' className="removePerson" onClick={() => removePerson(person.id)}>
              x
            </button>
          </div>
        )
      }

      <div className="buttons">
        <button type="button" className="btn-block" onClick={() => setPeople([])}>
          Clear List
        </button>

        <button type='button' className="btn-block" onClick={() => setPeople(peopleData)}>
          Rebuild List
        </button>
      </div>
    </section>
  )
}

export default List