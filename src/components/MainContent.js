import React, { useEffect } from "react"


function MainContent() {
  function hndleLoad() {
    var carousel = document.querySelector(".carousel1")
    var carousel1 = document.querySelector("#carousel")

    var figure = carousel.querySelector("figure")
    var figure1 = carousel1.querySelector("figure")
    var nav = carousel.querySelector("nav")
    var nav1 = carousel1.querySelector("navs")
    console.log(nav)
    var numImages = figure.childElementCount
    var numImages1 = figure1.childElementCount
    var theta = (2 * Math.PI) / numImages
    var theta1 = (2 * Math.PI) / numImages1
    var currImage = 0
    var currImage1 = 0

    nav.addEventListener("click", onClick, true)
    function onClick(e) {
      console.log(e.target)
      e.stopPropagation()

      var t = e.target
      if (t.tagName.toUpperCase() != "BUTTON") return

      if (t.classList.contains("next")) {
        currImage++
      } else {
        currImage--
      }

      figure.style.transform = `rotateY(${currImage * -theta}rad)`
    }
    nav1.addEventListener("click", onClick1, true)
    function onClick1(e) {
      console.log(e.target)
      e.stopPropagation()

      var t = e.target
      if (t.tagName.toUpperCase() != "BUTTON") return

      if (t.classList.contains("next")) {
        currImage1++
      } else {
        currImage1--
      }

      figure1.style.transform = `rotateY(${currImage1 * -theta1}rad)`
    }
  }

  useEffect(() => {
    hndleLoad()
  }, [])
  return (
    <div className="tab-content" id="v-pills-tabContent">
      <div className="tab-pane fade show active"  id="v-pills-home" role="tabpanel"
        aria-labelledby="v-pills-home-tab">
        <div className="contant-title">differentiator</div>
        <div className="carousel carousel1">
          <figure>
            <div className="slider-item">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              <h2>What is Lorem Ipsum</h2>
            </div>
            <div className="slider-item">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              <h2>What is Lorem Ipsum</h2>
            </div>
            <div className="slider-item">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              <h2>What is Lorem Ipsum</h2>
            </div>
          </figure>
          <nav className="d-flex">
            <button className="nav prev btn btn-primary">Prev</button>
            <button className="nav next btn btn-primary">Next</button>
          </nav>
        </div>
      </div>
      <div
        className="tab-pane fade"
        id="v-pills-profile"
        role="tabpanel"
        aria-labelledby="v-pills-profile-tab">
        <div className="contant-title">Advantages</div>
        <div className="carousel" id="carousel">
          <figure>
            <div className="slider-item">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              <h2>What is Lorem Ipsum</h2>
            </div>
            <div className="slider-item">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              <h2>What is Lorem Ipsum</h2>
            </div>
            <div className="slider-item">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              <h2>What is Lorem Ipsum</h2>
            </div>
          </figure>
          <navs className="d-flex">
            <button className="nav prev btn btn-primary mr-2 px-2">Prev</button>
            <button className="nav next btn btn-primary px-2">Next</button>
          </navs>
        </div>
      </div>
    </div>
  )
}

export default MainContent
