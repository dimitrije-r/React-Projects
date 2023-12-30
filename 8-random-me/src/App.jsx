import React, { useState, useEffect } from 'react'
import { FaPhone, FaLock, FaUserAlt, FaEnvelope, FaCalendarAlt, FaMapMarkedAlt} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState(null)
  const [value, setValue] = useState('random person')
  const [title, setTitle] = useState('name')
  const getPerson = async () => {
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    const person = data.results[0]
    const { phone, email } = person
    const { large: image } = person.picture
    const { password } = person.login
    const { first, last } = person.name
    const {dob: { age }} = person
    const {street: { number, name }} = person.location

    const newPerson = { image, phone, email, password, age, street: `${number} ${name}`, name: `${first} ${last}`}
    setPerson(newPerson)
    setLoading(false)
    setTitle('name')
    setValue(newPerson.name)
  }

  useEffect(() => {
    getPerson()
  }, [])
  const handleHover = (e) => {
    if (e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.label
      setTitle(newValue)
      setValue(person[newValue])
    }
  }
  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img src={(person && person.image) || defaultImage} alt='random user' className='user-img'/>
          <p className='user-title'>My {title} is</p>
          <p className='user-value'>{value}</p>
          <div className='values-list'>
            <button className='icon' data-label='name' onMouseOver={handleHover}>
              <FaUserAlt />
            </button>
            <button className='icon' data-label='email' onMouseOver={handleHover}>
              <FaEnvelope />
            </button>
            <button className='icon' data-label='age' onMouseOver={handleHover}>
              <FaCalendarAlt />
            </button>
            <button className='icon' data-label='street' onMouseOver={handleHover}>
              <FaMapMarkedAlt />
            </button>
            <button className='icon' data-label='phone' onMouseOver={handleHover}>
              <FaPhone />
            </button>
            <button className='icon' data-label='password' onMouseOver={handleHover}>
              <FaLock />
            </button>
          </div>
          <button className='btn' type='button' onClick={getPerson}>
            {loading ? 'loading...' : 'random user'}
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
