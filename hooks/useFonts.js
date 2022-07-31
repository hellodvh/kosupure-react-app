import * as Font from "expo-font";
import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";

export default useFonts = async () => {
  await Font.loadAsync({
    DMSansRegular: DMSans_400Regular,
    DMSansMedium: DMSans_500Medium,
    DMSansBold: DMSans_700Bold,
    RubikRegular: Rubik_400Regular,
    RubikMedium: Rubik_500Medium,
    RubikBold: Rubik_700Bold,
  });
};
