import React from "react"

function MainContent() {
  return (
    <div className="tab-content" id="v-pills-tabContent">
      <div
        className="tab-pane fade show active"
        id="v-pills-home"
        role="tabpanel"
        aria-labelledby="v-pills-home-tab"
      >
        <div className="contant-title">differentiator</div>
        <div className="carousel-wrapper">
          <ul className="carousel">
            <li className="item active">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <h2>usability</h2>
            </li>
            <li className="item">
      
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <h2>Automation</h2>
            </li>
            <li className="item">
              
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <h2>Configurability</h2>
            </li>
          </ul>
        </div>

        <div className="controls">
          <a href="#" className="previous btn btn-primary">
            Previous
          </a>
          <a href="#" className="next btn btn-primary">
            Next
          </a>
        </div>
      </div>
      <div
        className="tab-pane fade"
        id="v-pills-profile"
        role="tabpanel"
        aria-labelledby="v-pills-profile-tab"
      >
        <div className="contant-title">Advantages</div>
        
      </div>
    </div>
  )
}

export default MainContent
