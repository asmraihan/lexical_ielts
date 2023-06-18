import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import styles from './vocabularies.style'
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '../../../constants'
import WordCard from '../../common/cards/word/WordCard'
import useFetch from '../../../hooks/useFetch'
const Vocabularies = () => {
  const router = useRouter()
  // const loading = false
  // const error = false
  const {data, loading, error} = useFetch()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          English     ---     Bangla
        </Text>
      </View>
      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text >Something went wrong </Text>
        ) : (
          <FlatList
            //create some data
            data={data.words}
            renderItem={({item})=> (
              <WordCard
              item={item}
              ></WordCard>
            )}
            keyExtractor={(item) => item?.word} //FIXME: keyExtractor should be unique
            contentContainerStyle={{columnGap: SIZES.medium}}
            // horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Vocabularies