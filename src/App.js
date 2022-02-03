/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import CreateNote from "./Components/CreateNote"
import Note from "./Components/Note"

const App = () => {
  const [addItem, setAddItem] = useState([])
  const addNote = (note) => {
    setAddItem((oldData) => {
      return [...oldData, note]
    })
  }

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
          />
        )
      })}
      <Footer />
    </>
  )
}

export default App
