import { View, Text } from 'react-native'
import React from 'react'
import { AutenticationProvider } from './AutenticationProvider'
import Routes from './Routes'
const Index = () => {
  return (
  <AutenticationProvider>
    <Routes/>
  </AutenticationProvider>
  )
}

export default Index