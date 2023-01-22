import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

export function HabitsEmpty() {
	const { navigate } = useNavigation();
	return (
		<View>
			<Text className="text-zinc-400 text-base text-center top-5">
				No habits yet 😥
			</Text>
			<Text
				className="text-violet-300 active:text-violet-400 text-xl top-20 text-center"
				onPress={() => navigate("new")}
			>
				Click here to create a new habit and start tracking 😊
			</Text>
		</View>
	);
}
