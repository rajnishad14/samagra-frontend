import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context'

const Comments = () => {
  const {
    uploadDataComment,
    fetchDataComment,
    startDownComment,
    endDownComment,
    startUpComment,
    endUpcomment,
    dataComment,
  } = useContext(AppContext)

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetchDataComment()
  //   }, 5000)
  // }, [])
  // useEffect(() => {
  //   if (dataComment.length !== 0) {
  //     uploadDataComment()
  //   }
  // }, [dataComment])
  return (
    <div className="display">
      <p>Start: {startDownComment}</p>
      <p>End: {endDownComment}</p>
      <p>Start Save: {startUpComment}</p>
      <p>End Save: {endUpcomment}</p>
    </div>
  )
}

export default Comments
