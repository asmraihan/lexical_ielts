import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({

  wordCardWrapper: {
    flexDirection: "row",
    marginTop: 8,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: SIZES.xLarge,
    backgroundColor: "#FFFFFF",
    borderRadius: SIZES.medium,
  },
    wordCardInfo: {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
    },
    wordCardInfo2: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
    },


});

export default styles;
