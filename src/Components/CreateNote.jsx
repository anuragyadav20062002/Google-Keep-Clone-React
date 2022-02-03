import React from "react"
import Button from "@mui/material/Button"
import AddIcon from "@mui/icons-material/Add"

const CreateNote = () => {
  return (
    <>
      <div className="main_note">
        <form action="">
          <input type="text" placeholder="Title" autoComplete="off" />
          <textarea cols="" rows="" placeholder="Write a note"></textarea>
          <Button>
            <AddIcon className="plus_sign" />
          </Button>
        </form>
      </div>
    </>
  )
}

export default CreateNote
