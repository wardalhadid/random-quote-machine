import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];
  const bgColor = colors[Math.floor(Math.random() * colors.length)];
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
	const quotesArray = async () => {
    await fetch("https://type.fit/api/quotes")
	 .then( (response) => response.json())
	 .then((data) => {
     const random = Math.floor(Math.random() * data.length)
     setQuote(data[random].text);
     setAuthor(data[random].author);
    });
	};
	useEffect(() => {	quotesArray(); }, []);
  const handleOnClick = () => {
    quotesArray();
  };
  return (
    <div style={{background: bgColor}} className='main' id="quote-box">
    <div className="container">
      <div>
        <p style = {{color: bgColor}} id="text"> <i class="fa-duotone fa-quote-left fa"> </i>
          {` ${quote} `} 
        <i class="fa-duotone fa-quote-right fa"></i> </p>
        <p className="author" style={{color: bgColor}} id="author" > - {author}  </p>
			</div>
      <div className="buttons">
        <a
         href= {"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + quote + "- " + author}
          target="_noopener"
          style={{color: bgColor}}
          id="tweet-quote"
          >
         <i className='fab fa-twitter fa-2x'></i> 
        </a>
			<button
      className='btn btn-dark'
      id="new-quote"
       onClick = {handleOnClick}
      >New Quote </button>
			</div>
		</div>
    </div>
  );
}

export default App;
