import React from 'react'
import './form.css'
import axios from 'axios'
import { BASE_URL } from '../../api/url'
import { useRef } from 'react'

export default function Form() {

  let form = useRef()
  let name = useRef()
  let lastName = useRef()
  let dni = useRef()

  async function newUser(event) {
    event.preventDefault()

    let registerData = {
      name: name.current.value,
      lastName: name.current.value,
      dni: dni.current.value,
    }

    try {
      let res = await axios.post(`${BASE_URL}/user/create`, registerData)
      if (res.data.success) {
        alert('usuario creado')
        form.current.reset()
      } else {
        alert('usuario no creado')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

return (
  <form action="#" className="register" onSubmit={newUser} ref={form}>
    <input type="text" name="name" className="input" placeholder="Name" ref={name}/>
    <input type="text" name="lastName" className="input" placeholder="Last name" ref={lastName}/>
    {/* <input type="text" name="text" className="input" placeholder="Email" /> */}
    <input type="number" name="dni" className="input" placeholder="DNI" ref={dni} />
    {/* <input type="text" name="text" className="input" placeholder="Type here..." /> */}
    <input type="submit" className="input" value='registrar' />
  </form>
)
}