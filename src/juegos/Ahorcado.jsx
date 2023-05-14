/*import React, { useState } from 'react';

const Hangman = () => {
  const [words, setWords] = useState(['coche', 'perro', 'gato', 'mesa']); // lista de palabras
  const [selectedWord, setSelectedWord] = useState(''); // palabra seleccionada aleatoriamente
  const [hiddenWord, setHiddenWord] = useState(''); // palabra oculta con guiones bajos
  const [usedLetters, setUsedLetters] = useState([]); // letras utilizadas
  const [remainingAttempts, setRemainingAttempts] = useState(6); // intentos restantes

  // función para elegir una palabra aleatoria del array de palabras
  const chooseRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setSelectedWord(words[randomIndex].toLowerCase());
  };

  // función para generar la palabra oculta con guiones bajos
  const generateHiddenWord = () => {
    const hidden = selectedWord.split('').map(letter => '_').join('');
    setHiddenWord(hidden);
  };

  // función para manejar la introducción de una letra por el usuario
  const handleLetterInput = (letter) => {
    const used = usedLetters.includes(letter);
    if (!used) {
      setUsedLetters([...usedLetters, letter]);
      const newHiddenWord = hiddenWord.split('').map((char, index) => {
        if (selectedWord.charAt(index) === letter) {
          return letter;
        }
        return char;
      }).join('');
      setHiddenWord(newHiddenWord);
      if (!newHiddenWord.includes(letter)) {
        setRemainingAttempts(remainingAttempts - 1);
      }
    }
  };

  // función para reiniciar el juego
  const handleRestart = () => {
    chooseRandomWord();
    setUsedLetters([]);
    setRemainingAttempts(6);
  };

  //efecto para elegir una nueva palabra y generar la palabra oculta al montar el componente
 const useEffect =()=> {
    chooseRandomWord();
    generateHiddenWord([]);
  };

  // efecto para comprobar si el usuario ha ganado o perdido al actualizar la palabra oculta o los intentos restantes
useEffect (() => {
    if (hiddenWord === selectedWord) {
      alert('¡Has ganado!');
    } else if (remainingAttempts === 0) {
      alert(`Has perdido... La palabra era "${selectedWord}".`);
      handleRestart();
    }
  }, [handleRestart, hiddenWord, remainingAttempts, selectedWord]);

  return (
    <div>
      <h1>Juego del ahorcado</h1>
      <p>Intentos restantes: {remainingAttempts}</p>
      <p>Palabra: {hiddenWord}</p>
      <p>Letras utilizadas: {usedLetters.join(', ')}</p>
      <div>
        <p>Elige una letra:</p>
        {Array.from(Array(26), (_, i) => String.fromCharCode('a'.charCodeAt(0) + i)).map(letter => (
          <button key={letter} onClick={() => handleLetterInput(letter)} disabled={usedLetters.includes(letter)}>
            {letter}
          </button>
        ))}
      </div>
      <button onClick={handleRestart}>Empezar de nuevo</button>
    </div>
  );
};

export default Hangman;*/
