import Goal from './components/Goal.tsx'
import './App.css'
import CustomizedTables from './components/CustomizedTables.tsx'
import { rows } from './components/data/dataset.tsx'

// console.log(rows)

export default function App() {
  return (
    <main>
      <Goal
        name = "book name 1"
        price = {9}
        category = "about the first book"
      />
      <br/>
      <CustomizedTables {...rows}/>
    </main>
  )
}

