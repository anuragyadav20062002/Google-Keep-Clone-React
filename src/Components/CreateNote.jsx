/* eslint-disable no-unused-vars */
import React from "react"
import Button from "@mui/material/Button"
import AddIcon from "@mui/icons-material/Add"
import { useState } from "react"

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  })

  const inputEvent = (event) => {
    const value = event.target.value
    const name = event.target.name

    setNote((oldData) => {
      return {
        ...oldData,
        [name]: value,
        //checks if the name of field matches that in usestate the value is updated in usestate variable
      }
    })
  }
  const addEvent = () => {
    props.passNote(note)
  }
  return (
    <>
      <div className="main_note">
        <form action="">
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={inputEvent}
            placeholder="Title"
            autoComplete="off"
          />
          <textarea
            cols=""
            rows=""
            name="content"
            value={note.content}
            onChange={inputEvent}
            placeholder="Write a note"
          ></textarea>
          <Button onClick={addEvent}>
            <AddIcon className="plus_sign" />
          </Button>
        </form>
      </div>
    </>
  )
}

export default CreateNote
