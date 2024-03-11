import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList.jsx';
import ChoresList from './components/ChoresList.jsx';
import BookList from './components/BookList.jsx';
import HobbyLink from './components/hobbyLinks.jsx'


function App() {
  return (
    <div className="App">
      <ChoresList />
        <div className='similarComponents'>
      <MovieList />
      <BookList />
      <HobbyLink />
      </div>
    </div>
  );
}

export default App;
