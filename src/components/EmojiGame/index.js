/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    clickedList: [],
    topScore: 0,
    isGameActive: true,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  getShuffledList = () => {
    const shuffledList = this.shuffledEmojisList()
    return (
      <ul className="emojis-container">
        {shuffledList.map(eachEmoji => (
          <EmojiCard
            emojiDetails={eachEmoji}
            key={eachEmoji.id}
            updateScore={this.updateScore}
          />
        ))}
      </ul>
    )
  }

  resetGame = () => {
    this.setState({clickedList: [], isGameActive: true})
  }

  getResultCard = () => {
    const {emojisList} = this.props
    const {clickedList} = this.state
    const isWon = clickedList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedList.length}
        onClickPlayAgain={this.resetGame}
      />
    )
  }

  finishGameAndGiveScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > newTopScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameActive: false})
  }

  updateScore = id => {
    const {emojisList} = this.props
    const {clickedList} = this.state
    const isEmojiAlreadyClicked = clickedList.includes(id)
    const clickedLength = clickedList.length

    if (isEmojiAlreadyClicked) {
      this.finishGameAndGiveScore(clickedLength)
    } else {
      if (clickedLength === emojisList.length - 1) {
        this.finishGameAndGiveScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedList: [...prevState.clickedList, id],
      }))
    }
  }

  render() {
    const {clickedList, isGameActive, topScore} = this.state
    return (
      <div className="bg-container">
        <NavBar
          score={clickedList.length}
          topScore={topScore}
          isGameActive={isGameActive}
        />
        <div>
          {isGameActive ? this.getShuffledList() : this.getResultCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
