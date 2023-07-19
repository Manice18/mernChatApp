import { TextEditorOptions } from ".";

function ChatInputButtons() {

  return (
    <div className="TextEditorOptions">
      {TextEditorOptions.map((option, key) => (
        <button
          className="ChatRichBtn"
          key={key}
          onClick={(e) => {
            var linkURL = null;
            if (option.title === "createLink") {
              linkURL = prompt("Enter a URL:", "http://");
            } else if (option.title === "formatBlock") {
              linkURL = "<pre>";
            }
            else if (option.title === "codeSnippet") {
              linkURL = "<code>";
            }

            document.execCommand(option.title, false, linkURL);
          }}
        >
          {option.icon}
        </button>
      ))}
    </div>
  );
}

export default ChatInputButtons;
