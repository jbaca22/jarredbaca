import React, { useState} from 'react';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'Check out my projects!',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
        {!contactSelected ? (
        <>
          <Portfolio currentCategory={currentCategory}></Portfolio>
          <About></About>
        </>
        ) : (
          <Contact></Contact>
        )}
        </div>
      </main>
    </div>
  );
}

export default App;
