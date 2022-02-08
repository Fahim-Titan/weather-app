// import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
const { REACT_APP_APPID } = process.env;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        This is Header
      </header>
      <section className="App-main-section">
        This is the main section
        <SearchForm/>
      </section>
      <footer className="App-footer">
        Made with care and love by 
        <span>
          <a href="https://www.linkedin.com/in/al-masum-fahim/">Al Masum Fahim</a>
        </span>
      </footer>
    </div>
  );
}

export default App;
