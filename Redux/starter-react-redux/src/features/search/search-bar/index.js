export default function SearchBar() {
  const searchTerm = '';

  function handleChange({ target: { value } }) {}

  return (
    <form>
      <label htmlFor="search">Search your notes: </label>
      <input
        id="search"
        name="search"
        onChange={handleChange}
        placeholder="e.g., state"
        type="search"
        value={searchTerm}
      />
    </form>
  );
}
