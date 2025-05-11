import { useState } from 'react'
import CarouselContainer from './components/CarouselContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CarouselContainer />
    </>
  )
}

export default App
