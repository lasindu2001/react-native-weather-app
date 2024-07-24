import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
      <Text>Current Weather</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center'
  },
  wrapper : {
    flex: 1
  }
})

export default App