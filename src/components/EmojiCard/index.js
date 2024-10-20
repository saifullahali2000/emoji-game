// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, updateScore} = props
  const {emojiUrl, emojiName, id} = emojiDetails
  const onClickEmoji = () => {
    updateScore(id)
  }
  return (
    <li className="emoji">
      <button type="button" className="button-emoji">
        <img src={emojiUrl} alt={emojiName} onClick={onClickEmoji} />
      </button>
    </li>
  )
}

export default EmojiCard
