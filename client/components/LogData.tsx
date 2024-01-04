'use client'

import React from 'react'
import { json } from 'stream/consumers'

export default function LogData() {
  const [data, setData] = React.useState(null)
  // Get the data when this component mounts
  React.useEffect(() => {
    fetch('http://localhost:3001/admins')
      .then((response) => response.json())
      .then((result) => {
        console.log('Got result:', result)
        setData(result)
      })
  }, [])
  return (
    <div>data && {JSON.stringify(data)}</div>
  )
}


