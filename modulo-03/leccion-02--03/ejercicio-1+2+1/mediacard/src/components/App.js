/* EJERCICIO 1 Y 2 (3.2)
import lady from './lady.jpg';
import './App.scss';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const header = (
      <header className="App-header">
        <div className="interiorContainer">
          <img src={lady} className="profile-photo" alt="Profile photo" />
          <h2 className="author">Pepita Alegría</h2>
          <p className="date">Domingo 1 de noviembre de 2020</p>
          <p className="text">Lorem ipsum dolor sit amet. Est quam praesentium quo odio voluptatem aut officia enim. In unde tempora sit libero sunt cum Quis consequatur non alias culpa ut optio enim aut consequatur deleniti a vitae nihil. Aut rerum nulla id explicabo alias est atque eius? Id laborum quidem ea libero vero et repellendus voluptatibus! Sit sunt aperiam qui laudantium magnam est delectus nulla. Qui accusamus laborum ut rerum maxime qui officiis facere ab eveniet nulla et quos optio est odio rerum. </p>
          <a className="readMore" href="https://www.lipsum.com/" target="_blank" rel="noopener noreferrer">
            Leer más...
          </a>
          <p className="likes">99 ❤️ </p>
        </div>
      </header>
    );

    return <div className="App"> {header}</div>;
  }
}

export default App;
*/
import lady from '../images/lady.jpg';
import '../stylesheets/App.scss';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const header = (
      <header className="App-header">
        <div className="interiorContainer">
          <img src={lady} className="profile-photo" alt="Profile photo" />
          <h2 className="author">Pepita Alegría</h2>
          <p className="date">Domingo 1 de noviembre de 2020</p>
          <p className="text">Lorem ipsum dolor sit amet. Est quam praesentium quo odio voluptatem aut officia enim. In unde tempora sit libero sunt cum Quis consequatur non alias culpa ut optio enim aut consequatur deleniti a vitae nihil. Aut rerum nulla id explicabo alias est atque eius? Id laborum quidem ea libero vero et repellendus voluptatibus! Sit sunt aperiam qui laudantium magnam est delectus nulla. Qui accusamus laborum ut rerum maxime qui officiis facere ab eveniet nulla et quos optio est odio rerum. </p>
          <a className="readMore" href="https://www.lipsum.com/" target="_blank" rel="noopener noreferrer">
            Leer más...
          </a>
          <p className="likes">99 ❤️ </p>
        </div>
      </header>
    );

    return <div className="App"> {header}</div>;
  }
}

export default App;
