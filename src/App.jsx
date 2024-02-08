import './App.css'
import Button from './components/Button';


function App() {

  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button disabled={false}>to the collection</Button>
        <Button disabled={false}>shop all bags</Button>
        <Button disabled={true}>pre-orders</Button>
      </nav>
    </>
  )
}

export default App
