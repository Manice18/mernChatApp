import React, { useState } from "react";
import EmojiPicker from "./ChatFunctions/EmojiPicker";
import { BsEmojiLaughing, BsPlusCircleFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import ChatInputButtons from "./ChatFunctions/ChatInputButtons";

function ChatInput({ setCurMsg, sendMsg, setFileUploaded }) {
  const [showEmoji, setShowEmoji] = useState(false);
  const hiddenFileInput = React.useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    setFileUploaded(event.target.files[0]);
  };

  return (
    <div className="TextEditor">
      <ChatInputButtons />
      <div className="TextBox">
        <div
          id="ho3f38hg8iy4r8"
          contentEditable={true}
          type="text"
          data-text="Chat comes here..."
          className="ChatInput"
          onChange={(e) => {
            console.log(e.target.value)
            setCurMsg(e.target.value)
          }}
        />

        <div className="TextBoxButtons">
          <BsPlusCircleFill onClick={() => {
            handleClick()
          }} />
          <div className="horizontal-line" />
          <BsEmojiLaughing
            className="EmojiOn"
            size={"1.2rem"}
            onClick={() => setShowEmoji(!showEmoji)}
          />

          <div
            className="ChatInputSend"
            onClick={() => {
              setCurMsg(document.getElementById("ho3f38hg8iy4r8").innerHTML);
              sendMsg();
            }}
          >
            <IoMdSend
              className="inputSvg"
              size={"1.2rem"}
            />
          </div>
        </div>

        {showEmoji && <EmojiPicker setCurMsg={setCurMsg} />}
      </div>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none", position: "absolute" }}
      />
    </div>
  );
}

export default ChatInput;
