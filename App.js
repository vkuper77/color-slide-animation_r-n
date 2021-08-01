import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

const CIRCLE_SIZE = 100

const Circle = ({ onPress }) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.circleContainer]}>
      <View style={styles.circle}>
        <TouchableOpacity>
          <View style={[styles.circle, styles.circleButton]}>
            <AntDesign name="arrowright" size={28} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default function App() {
  const onPress = () => {
    return
  }
  return (
    <View style={styles.container}>
      <Circle onPress={onPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  circleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 8,
    paddingBottom: 100,
    backgroundColor: 'gold',
  },
  circle: {
    backgroundColor: '#444',
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: 50,
  },
  circleButton: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
