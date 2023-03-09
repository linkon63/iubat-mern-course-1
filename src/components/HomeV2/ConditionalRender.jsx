import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function ConditionalRender({ id }) {

  let ref = useRef();

  const [users, setUsers] = useState()

  useLayoutEffect(() => {
    setUsers(id)
    // console.log("Hit before dom represent")
    // setUsers("Hit before dom represent")
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json)
    //     // setUsers(json)
    //   })
  }, []);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json)
  //       setUsers(json)
  //     })
  // }, [])


  function handleClick() {
    console.log("Ref", ref)
    // ref.current.nodeName = "INPUT"
    // ref.current.inputMode = "text"
    // ref.current.outerHTML = <input type="text" placeholder="im from ref" />
    // ref.current = ref.current + 1;
    // You clicked 11 times!
    // alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <>
      <div ref={ref}>
        <button onClick={handleClick} >
          Click me!
        </button>
      </div>
      {/* <h1>{users}</h1> */}
      {
        // users.length > 0 ?
        //   <div>
        //     <h1>Hello users</h1>
        //   </div>
        //   :
        //   <div>
        //     <h1>Hello non users</h1>
        //   </div>
      }
    </>
  )
}
