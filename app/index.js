import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from '../constants'
import { ScreenHeaderBtn, Welcome } from '../components'
import Vocabularies from "../components/home/vocabularies/Vocabularies";
const Home = () => {
    const router = useRouter();
    const handleMenu = () => {
        alert("Lexical IELTS is an advanced vocabulary app that helps you improve your vocabulary and prepare for IELTS exam.             \n Developed by Raihan             \n Version 1.0.0")
    }
    const handleProfile = () => {
        router.push("https://github.com/asmraihan")
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.lightWhite,
                    },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn handlePress={handleMenu} iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn handlePress={handleProfile} iconUrl={images.profile} dimension="100%" />
                    ),
                    headerTitle: ""

                }}
            />
    <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex:1, padding:SIZES.medium}}>
                    <Welcome />
                    <Vocabularies></Vocabularies>
                </View>
    </ScrollView>
        </SafeAreaView>
    )
}

export default Home;