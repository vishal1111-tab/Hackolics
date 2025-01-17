import React, { createContext, useState, useEffect } from 'react';
import run from '../gemini';

export const datacontext = createContext();

function UserContext({ children }) {
  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.lang = 'en-GB';
    window.speechSynthesis.speak(utterance);
  }

  async function handleCommand(command) {
    document.querySelector('#voice-assistant').style.transform = 'scale(1)';
    document.querySelector('#voice-assistant').style.transition = '0.5s ease-in-out';

    let response = await run(command);
    speak(response);
  }

  const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognizer = new speechRecognition();

  recognizer.onresult = (e) => {
    const command = e.results[e.resultIndex][0].transcript.trim().toLowerCase();

    if (command === 'open google') {
      window.location.href = 'https://www.google.com';
    } else {
      handleCommand(command);
    }
  };

  const startListening = () => {
    recognizer.start();
  };

  const value = {
    recogni: recognizer,
    startListening,
  };

  return (
    <datacontext.Provider value={value}>
      {children}
    </datacontext.Provider>
  );
}

export default UserContext;
