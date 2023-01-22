//import './src/lib/dayjs';


import { StatusBar } from "react-native";
import {
	useFonts,
	FiraCode_400Regular,
	FiraCode_600SemiBold,
	FiraCode_700Bold,
} from "@expo-google-fonts/fira-code";

import { Loading } from "./src/components/Loading";
import { Routes } from './src/routes';

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
		<>
			<Routes />
			<StatusBar barStyle= "light-content" backgroundColor= "transparent" translucent />
		</>
	);
}
