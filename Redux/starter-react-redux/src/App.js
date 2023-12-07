import CreateNote from './features/notes/create';
import NotesList from './features/notes/list';
import SearchBar from './features/search/search-bar';

function App() {
  return (
    <>
      <h1>My Notes</h1>
      <SearchBar />
      <CreateNote />
      <NotesList />
    </>
  );
}

export default App;
