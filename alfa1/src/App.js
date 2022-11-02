function App() {

  const hello = function() { return 'hallo aus der Funktion'}

  return (
    <div>
      <h1>Hallo Michael</h1>
      <p>{hello()}</p>
    </div>
  );
}

export default App;
