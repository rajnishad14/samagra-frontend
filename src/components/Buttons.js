import React, { useContext } from 'react'
import { AppContext } from '../context'

const Buttons = () => {
  const {
    fetchDataPhoto,
    uploadDataPhoto,
    fetchDataComment,
    uploadDataComment,
    fetchDataTodo,
    uploadDataTodo,
    fetchDataPost,
    uploadDataPost,
  } = useContext(AppContext)
  return (
    <div className="btn-container">
      <div className="four-btn">
        <button
          onClick={() => {
            fetchDataComment()
            uploadDataComment()
          }}
        >
          Button 1
        </button>
        <button
          onClick={() => {
            fetchDataTodo()
            uploadDataTodo()
          }}
        >
          Button 1
        </button>
        <button
          onClick={() => {
            fetchDataPhoto()
            uploadDataPhoto()
          }}
        >
          Button 1
        </button>
        <button
          onClick={() => {
            fetchDataPost()
            uploadDataPost()
          }}
        >
          Button 1
        </button>
      </div>
      <button>Current Unix TimeStamp</button>
    </div>
  )
}

export default Buttons
