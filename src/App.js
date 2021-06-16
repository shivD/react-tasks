import React, {useState} from "react"
import LeftSidebar from "./components/LeftSidebar"
import MainContent from "./components/MainContent"
import "./components/scss/app.scss"
import Header from "./components/Header"

function App() {
   const [isSidebar, setisSidebar] = useState(false)
   console.log(isSidebar)
  return (
    <>
      <Header />
      <div className="container-fluid p-0">
        <div
          className="row no-gutters">
          <div className={`col-md-3  d-xl-block ${isSidebar === false ? "d-none" : "d-block"}`}>
            <LeftSidebar />
          </div>
          <div className="col">
            <div className="sidebar-toggle" onClick={()=>setisSidebar(!isSidebar)}>{'>>'}</div>
            <MainContent />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
