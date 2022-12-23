import React, { useEffect, useState } from 'react'

export default function ApiCall() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => setData(data))
  }, []);
  return (
    <div>
      <h1>Todo:</h1>
      <p>ID: {data.id}</p>
      <p>Title: {data.title}</p>
      <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
    </div>
  );
}
