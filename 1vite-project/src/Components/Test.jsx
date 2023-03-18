import React from 'react'
import axios from 'axios'
import {BASE_URL} from '../api/url'
import { useEffect } from 'react'

export default function Test() {
    useEffect(() => {
        axios.get(`${BASE_URL}/user/read`)
            .then(response => console.log(response.data.response))
    },[])

  return (
    <div>Test</div>
  )
}
