import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { NavBar } from './components'
import { MainRouter } from './routes'

function App() {  

  return (
    <ChakraProvider>
      {/* <NavBar/> */}
      <MainRouter/>
    </ChakraProvider>
  )
}

export default App;
