import './App.css'
import { PlusIcon } from './assets/Icons/PlusIcon'
import Button from './components/UI/Button/Button'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold">
        Hello world!
        <Button text="Click me!" variant="primary" size="md" startIcon={<PlusIcon />} />
        <Button text="Click me!" variant="secondary" size="lg" startIcon={<PlusIcon />} />
      </h1>
    </>
  )
}

export default App
