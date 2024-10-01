import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { NavBar } from './components'
import { MainRouter } from './routes'
import { CartProvider } from './context'

function App() {  

  return (
    <ChakraProvider>      
      <CartProvider>
        <MainRouter />
      </CartProvider> 
    </ChakraProvider>
  )
}

export default App;
