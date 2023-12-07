import { useState } from 'react';

export default function CreateNote() {
  const [note, setNote] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange({ target: { value } }) {
    setNote(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="note">Create a note: </label>
      <input
        id="note"
        name="note"
        onChange={handleChange}
        placeholder="e.g., my new note"
        type="text"
        value={note}
      />
      <input type="submit" />
    </form>
  );
}
