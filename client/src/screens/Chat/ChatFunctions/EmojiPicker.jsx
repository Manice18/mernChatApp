import Picker from "emoji-picker-react";
function EmojiPicker() {
  //   const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event) => {
    document.getElementById("ho3f38hg8iy4r8").innerHTML +=
      " " + event.emoji;
  };

  return <Picker onEmojiClick={onEmojiClick} />;
}

export default EmojiPicker;
