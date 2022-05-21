import './App.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { theme } from './style/theme'
import './style/style.css'
import Layout from './layout'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      <Layout />
    </ChakraProvider>
  )
}

export default App
