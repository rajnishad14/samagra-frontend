import './App.css'
import { Comments, Todo, Post, Photos, Buttons } from './components/index'
import { AppContextProvider } from './context'

function App() {
  return (
    <AppContextProvider>
      <div className="app">
        <p className="head">Test App</p>
        <Comments />
        <Todo />
        <Photos />
        <Post />
        <Buttons />
      </div>
    </AppContextProvider>
  )
}

export default App
