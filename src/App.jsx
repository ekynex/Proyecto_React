import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {  

  return (
    <ChakraProvider>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a mi tienda"/>
    </ChakraProvider>
  )
}

export default App
