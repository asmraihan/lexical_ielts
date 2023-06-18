import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './wordcard.style'

const WordCard = ({item}) => {
  return (
    <TouchableOpacity
    // style={styles.container(item)}
    onPress={() => {}}
    >
     <View style={styles.wordCardWrapper}>
     <Text style={styles.wordCardInfo}>{item.word} :</Text>
      <Text style={styles.wordCardInfo2}> {item.translation}</Text>
     </View>
    </TouchableOpacity>
  )
}

export default WordCard