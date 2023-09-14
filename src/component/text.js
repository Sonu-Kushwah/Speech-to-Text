import React, { useState } from 'react';
import useClipboard from "react-use-clipboard";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Text1() {
   const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    
    /*copy to clip*/
    const [textCopy, setTextCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textCopy);

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const stopListening = () => SpeechRecognition.stopListening();
    
    if (!browserSupportsSpeechRecognition) {
        return null;
    }

    return (
        <>
        <div className='main-div'>
        <div className='text-speech'>
                <h2>Speech to Text Converter Made <span>By  Sonu Kushwah</span></h2>
                <div className='main-content' onClick={() => setTextCopy(transcript)}>
                 <p>{transcript}</p>
                 <div className='button-style'>
                   <button onClick={setCopied}>
                     Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}
                   </button>
                    <button onClick={startListening}><i class="fa-solid fa-microphone"></i></button>
                    <button onClick={stopListening}>Stop listening</button>
                </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Text1;
