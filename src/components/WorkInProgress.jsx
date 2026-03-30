import './WorkInProgress.css'

function WorkInProgress() {
  return (
    <div className="loader-container">
      <div className="excavator-wrapper">
        <div className="excavator-body">
          <div className="cabin"></div>
          <div className="arm-joint">
            <div className="arm-main">
              <div className="arm-bucket"></div>
            </div>
          </div>
        </div>
        <div className="tracks"></div>
      </div>

      <h2 className="loading-text">
        WORK IN PROGRESS
        <span className="loading-dot d1">.</span>
        <span className="loading-dot d2">.</span>
        <span className="loading-dot d3">.</span>
      </h2>
    </div>
  )
}

export default WorkInProgress
