import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context'

const Photos = () => {
  const {
    fetchDataPhoto,
    uploadDataPhoto,
    startDownPhoto,
    endDownPhoto,
    startUpPhoto,
    endUpPhoto,
    dataPhoto,
  } = useContext(AppContext)

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetchDataPhoto()
  //   }, 5000)
  // }, [])
  // useEffect(() => {
  //   if (dataPhoto.length !== 0) {
  //     uploadDataPhoto()
  //   }
  // }, [dataPhoto])
  return (
    <div className="display">
      <p>Start: {startDownPhoto}</p>
      <p>End: {endDownPhoto}</p>
      <p>Start Save: {startUpPhoto}</p>
      <p>End Save: {endUpPhoto}</p>
    </div>
  )
}

export default Photos
