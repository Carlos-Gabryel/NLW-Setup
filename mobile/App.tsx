import { StyleSheet, Text, View, StatusBar } from "react-native";
import {
	useFonts,
	FiraCode_400Regular,
	FiraCode_600SemiBold,
	FiraCode_700Bold,
} from "@expo-google-fonts/fira-code";

import { Loading } from "./src/components/Loading";

export default function App() {
	const [fontsLoaded] = useFonts({
		FiraCode_400Regular,
		FiraCode_600SemiBold,
		FiraCode_700Bold,
	});

	if (!fontsLoaded) {
		return <Loading />;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				Open up App.tsx to start working on your app!
			</Text>
			<StatusBar barStyle= "light-content" backgroundColor= "transparent" translucent />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#09090A",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: "#FFF",
    fontFamily: "FiraCode_600SemiBold",
	},
});
