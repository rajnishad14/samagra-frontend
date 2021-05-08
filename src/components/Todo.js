import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context'

const Todo = () => {
  const {
    uploadDataTodo,
    fetchDataTodo,
    startDownTodo,
    endDownTodo,
    startUpTodo,
    endUpTodo,
    dataTodo,
  } = useContext(AppContext)

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetchDataTodo()
  //   }, 5000)
  // }, [])
  // useEffect(() => {
  //   if (dataTodo.length !== 0) {
  //     uploadDataTodo()
  //   }
  // }, [dataTodo])
  return (
    <div className="display">
      <p>Start: {startDownTodo}</p>
      <p>End: {endDownTodo}</p>
      <p>Start Save: {startUpTodo}</p>
      <p>End Save: {endUpTodo}</p>
    </div>
  )
}

export default Todo
