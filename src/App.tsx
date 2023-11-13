import Goal from './components/Goal.tsx'
import './App.css'

export default function App() {
  return (
    <main>
      <Goal
        name = "book name 1"
        prices = {9}
        category = "about the first book"
      />
    </main>
  )
}

