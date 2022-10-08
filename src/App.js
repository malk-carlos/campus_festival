import './App.css';

function Head() {
  const hw = 'Hello world!'
  return (
    <div className="Header">
      <header className="head">
        <h1>{hw}</h1>
        <a
          className="App-link"
          href="https://jw.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default Head;