import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import "./speechToText.css";

function SpeechToText() {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isCopied, setCopied] = useClipboard(transcript);

  return (
    <div className="container">
      <h1 className="heading">SpeakToType</h1>
      <h3>
        Transform spoken words into text effortlessly with SpeakToType. Say it,
        and we'll write it for you.
      </h3>
      <div className="textContainer">
        <p>
          {transcript}
        </p>
      </div>
      <div className="btnContainer">
        <button className="btn"
          onClick={() => SpeechRecognition.startListening({ continuous: true })}
        >
          Start Listening
        </button>
        <button className="btn" onClick={() => SpeechRecognition.stopListening()}>
          Stop Listening
        </button>
        <button className="btn" onClick={resetTranscript}>Clear text</button>
        <button className="btn" onClick={setCopied}>{isCopied ? "Copied! 👍" : "Copy?"}</button>
      </div>
    </div>
  );
}

export default SpeechToText;
