// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isGameActive} = props

  return (
    <nav className="nav-bg">
      <div className="nav-items">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {isGameActive && (
        <div className="nav-items">
          <p className="text">Score: {score}</p>
          <p className="text">top score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
