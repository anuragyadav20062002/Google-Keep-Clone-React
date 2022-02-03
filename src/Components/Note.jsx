import React from "react"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"

const Note = () => {
  return (
    <>
      <div className="note">
        <h1>Title</h1>
        <br />
        <p>This is the content</p>
        <button className="btn">
          <DeleteOutlineIcon className="deleteIcon" />
        </button>
      </div>
    </>
  )
}

export default Note
