import Header from './Header.js';
import ArtsCards from './ArtCards.js'
import './App.css';
import SwipBottom from './SwipBottom'; 

function App() {
  return (
    <div className="app">
      <Header />
      <ArtsCards />
      <SwipBottom />
    </div>
  );
}

export default App;
