import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context'

const Post = () => {
  const {
    uploadDataPost,
    fetchDataPost,
    startDownPost,
    endDownPost,
    startUpPost,
    endUpPost,
    dataPost,
  } = useContext(AppContext)

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetchDataPost()
  //   }, 5000)
  // }, [])
  // useEffect(() => {
  //   if (dataPost.length !== 0) {
  //     uploadDataPost()
  //   }
  // }, [dataPost])
  return (
    <div className="display">
      <p>Start: {startDownPost}</p>
      <p>End: {endDownPost}</p>
      <p>Start Save: {startUpPost}</p>
      <p>End Save: {endUpPost}</p>
    </div>
  )
}

export default Post
