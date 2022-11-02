import { fruitNames, fruits,  mixFruitnames, mixFruits } from "./exampleData"

function App() {

  const hello = function(name) { return `hallo aus der Funktion, ${name}`}

  const hello2 = (name) => {
    return `hallo aus hello2, ${name}`
  }

  const myNumbers = [1,3,6,9]

  const myNewNumbers = myNumbers.map((n, i) => n*(i + 1))

  console.log(myNewNumbers)

  const cars = ['Porsche', 'Mercedes', 'Tesla']

  const carHandler = (c, i) => console.log(c,i)
  cars.map(carHandler)

  const carHandler2 = (car, index) => (
      <li>
        <span>{index}</span>
        <span>{car}</span>
      </li>
    )


    // todo: mix fruits and render the resulting color...
  return (
    <div>
      <h1>Hallo Michael</h1>
      <p>{hello('Michael')}</p>
      <p>{hello2('Vogt')}</p>
      <ul>
      { cars.map(carHandler2)}
      </ul>
      <h2>todo: output of myNumers && myNewNumbers in an Ordered List</h2>
      ....
      <p>
        {mixFruitnames(fruitNames)}
      </p>
      <p>
        {
          fruitNames.indexOf('Banana') > -1 ? (<p>Banane ist drin</p>) : (<p>Keine Banane enthalten</p>)
          }
      </p>
      <p>
        {fruits.map(mixFruits)}
      </p>
    </div>

  );
}

export default App;
