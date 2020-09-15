import React from "react"
import Todos from "./components/Todos"
import ModeContextProvider from "./context/ModeContext"
import AppContainer from "./components/AppContainer"
import ModeSwitch from "./components/ModeSwitch"

function App() {
  return (
    <ModeContextProvider>
      <AppContainer>
    <div className="container my-4">
      <ModeSwitch/>
      <h1 className="text-center">ToDos App</h1>
      <Todos />
      <p className="mt-5">
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </p>
    </div>
    </AppContainer>
    </ModeContextProvider>
  )
}

export default App
