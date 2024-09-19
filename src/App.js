import './css/app.css';
import Logo from './assets/imgs/logo.svg';
import Menu from './assets/imgs/menu.svg';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);  // Estado inicial correto
  
  useEffect(() => {  // Usando useEffect para fetch
    fetch('./data.json', {
      headers: {
        Accept: "application/json"
      }
    }).then(res => res.json())
      .then(jsonData => {
        setData(jsonData);
      })
      .catch(err => console.log("Error fetching data:", err));
  }, []); 

  console.log(data);

  const copyToClipboard = (text, e) => {
    navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied to clipboard');
      const btn = e.target.closest('button');
      
      const originalSpan = btn.querySelector('.original');
      let copiedSpan = document.createElement('span');
      copiedSpan.className = 'copied';
      copiedSpan.textContent = 'copied!';
      btn.appendChild(copiedSpan);

      copiedSpan.style.color = 'white';
      copiedSpan.style.textAlign = 'center';

      originalSpan.style.visibility = 'hidden';
      copiedSpan.style.visibility = 'visible';

      
      btn.style.backgroundColor = 'black';
      btn.style.color = 'white';
    
       setTimeout(() => {
         btn.style.backgroundColor = 'white';
         btn.style.color = 'black';

         originalSpan.style.visibility = 'visible';
         copiedSpan = btn.removeChild(copiedSpan);
       }, 1000);
    })
    .catch((error) => {
      console.error('Error copying text: ', error);
    });
  }

  return (
    <div className="app">
      <menu>
        <button className="menu">
          <img src={Menu} alt="menu" />
        </button>
        <img src={Logo} alt="logo" />
      </menu>
      <div className="info-div">
        <span className="info">click to copy</span>
      </div>
      {Object.keys(data).map((index) => (
        <div className="category" key={index}>
          <h1>{index}</h1>
          <div className="text-to-copy-container">
            {data[index].map((item, i) => (
              <button className="text-to-copy" key={i} onClick={(e) => copyToClipboard(item, e)}>
                <span className="original">{item}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
