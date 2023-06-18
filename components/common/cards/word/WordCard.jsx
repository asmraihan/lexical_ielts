import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './wordcard.style'

const WordCard = ({item}) => {
  return (
    <TouchableOpacity
    // style={styles.container(item)}
    onPress={() => {}}
    >
      <Text> text </Text>
    </TouchableOpacity>
  )
}

export default WordCard