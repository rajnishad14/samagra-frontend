import axios from 'axios'
import React, { useState, createContext } from 'react'

const AppContext = createContext()
const AppContextProvider = ({ children }) => {
  //photo
  const [startDownPhoto, setStartDownPhoto] = useState('')
  const [endDownPhoto, setEndDownPhoto] = useState('')
  const [startUpPhoto, setStartUpPhoto] = useState('')
  const [endUpPhoto, setEndUpPhoto] = useState('')
  const [dataPhoto, setDataPhoto] = useState([])

  const uploadDataPhoto = async () => {
    let startTime = new Date()
    let currentStartTime = `${startTime.getHours()}:${startTime.getMinutes()}:${startTime.getSeconds()}`
    setStartUpPhoto(currentStartTime)
    dataPhoto.forEach(async (item) => {
      await axios
        .post('https://samagra-backend.herokuapp.com/photo', item)
        .then((res) => {
          console.log(res)
        })
    })
    let endTime = new Date()
    let currentEndTime = `${endTime.getHours()}:${endTime.getMinutes()}:${endTime.getSeconds()}`
    setEndUpPhoto(currentEndTime)
  }

  const fetchDataPhoto = async () => {
    let startTime = new Date()
    let currentStartTime = `${startTime.getHours()}:${startTime.getMinutes()}:${startTime.getSeconds()}`
    setStartDownPhoto(currentStartTime)
    await axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        setDataPhoto([...res.data])
        console.log(res.data)
        let endTime = new Date()
        let currentEndTime = `${endTime.getHours()}:${endTime.getMinutes()}:${endTime.getSeconds()}`
        setEndDownPhoto(currentEndTime)
      })
  }

  //comments
  const [startDownComment, setStartDownComment] = useState('')
  const [endDownComment, setEndDownComment] = useState('')
  const [startUpComment, setStartUpComment] = useState('')
  const [endUpcomment, setEndUpComment] = useState('')
  const [dataComment, setDataComment] = useState([])

  const uploadDataComment = async () => {
    let startTime = new Date()
    let currentStartTime = `${startTime.getHours()}:${startTime.getMinutes()}:${startTime.getSeconds()}`
    setStartUpComment(currentStartTime)
    dataComment.forEach(async (item) => {
      await axios
        .post('https://samagra-backend.herokuapp.com/comment', item)
        .then((res) => {
          console.log(res)
        })
    })
    let endTime = new Date()
    let currentEndTime = `${endTime.getHours()}:${endTime.getMinutes()}:${endTime.getSeconds()}`
    setEndUpComment(currentEndTime)
  }

  const fetchDataComment = async () => {
    let startTime = new Date()
    let currentStartTime = `${startTime.getHours()}:${startTime.getMinutes()}:${startTime.getSeconds()}`
    setStartDownComment(currentStartTime)
    await axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        setDataComment([...res.data])
        let endTime = new Date()
        let currentEndTime = `${endTime.getHours()}:${endTime.getMinutes()}:${endTime.getSeconds()}`
        setEndDownComment(currentEndTime)
      })
  }

  //Todo
  const [startDownTodo, setStartDownTodo] = useState('')
  const [endDownTodo, setEndDownTodo] = useState('')
  const [startUpTodo, setStartUpTodo] = useState('')
  const [endUpTodo, setEndUpTodo] = useState('')
  const [dataTodo, setDataTodo] = useState([])

  const uploadDataTodo = async () => {
    let startTime = new Date()
    let currentStartTime = `${startTime.getHours()}:${startTime.getMinutes()}:${startTime.getSeconds()}`
    setStartUpTodo(currentStartTime)
    dataTodo.forEach(async (item) => {
      await axios
        .post('https://samagra-backend.herokuapp.com/todo', item)
        .then((res) => {
          console.log(res)
        })
    })
    let endTime = new Date()
    let currentEndTime = `${endTime.getHours()}:${endTime.getMinutes()}:${endTime.getSeconds()}`
    setEndUpTodo(currentEndTime)
  }

  const fetchDataTodo = async () => {
    let startTime = new Date()
    let currentStartTime = `${startTime.getHours()}:${startTime.getMinutes()}:${startTime.getSeconds()}`
    setStartDownTodo(currentStartTime)
    await axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setDataTodo([...res.data])
        let endTime = new Date()
        let currentEndTime = `${endTime.getHours()}:${endTime.getMinutes()}:${endTime.getSeconds()}`
        setEndDownTodo(currentEndTime)
      })
  }

  //post
  const [startDownPost, setStartDownPost] = useState('')
  const [endDownPost, setEndDownPost] = useState('')
  const [startUpPost, setStartUpPost] = useState('')
  const [endUpPost, setEndUpPost] = useState('')
  const [dataPost, setDataPost] = useState([])

  const uploadDataPost = async () => {
    let startTime = new Date()
    let currentStartTime = `${startTime.getHours()}:${startTime.getMinutes()}:${startTime.getSeconds()}`
    setStartUpPost(currentStartTime)
    dataPost.forEach(async (item) => {
      await axios
        .post('https://samagra-backend.herokuapp.com/post', item)
        .then((res) => {
          console.log(res)
        })
    })
    let endTime = new Date()
    let currentEndTime = `${endTime.getHours()}:${endTime.getMinutes()}:${endTime.getSeconds()}`
    setEndUpPost(currentEndTime)
  }

  const fetchDataPost = async () => {
    let startTime = new Date()
    let currentStartTime = `${startTime.getHours()}:${startTime.getMinutes()}:${startTime.getSeconds()}`
    setStartDownPost(currentStartTime)
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setDataPost([...res.data])
        let endTime = new Date()
        let currentEndTime = `${endTime.getHours()}:${endTime.getMinutes()}:${endTime.getSeconds()}`
        setEndDownPost(currentEndTime)
      })
  }
  return (
    <AppContext.Provider
      value={{
        fetchDataPhoto,
        uploadDataPhoto,
        startDownPhoto,
        endDownPhoto,
        startUpPhoto,
        endUpPhoto,
        dataPhoto,
        uploadDataComment,
        fetchDataComment,
        startDownComment,
        endDownComment,
        startUpComment,
        endUpcomment,
        dataComment,
        uploadDataTodo,
        fetchDataTodo,
        startDownTodo,
        endDownTodo,
        startUpTodo,
        endUpTodo,
        dataTodo,
        uploadDataPost,
        fetchDataPost,
        startDownPost,
        endDownPost,
        startUpPost,
        endUpPost,
        dataPost,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }
