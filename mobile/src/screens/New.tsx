import {
	ScrollView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Alert,
} from "react-native";
import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { api } from "../lib/axios";
import Animated from "react-native-reanimated";

const availableWeekDays = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

export function New() {
	const [title, setTitle] = useState("");
	const [weekDays, setWeekDays] = useState<number[]>([]);

	function handleToggleWeekDay(weekDayIndex: number) {
		if (weekDays.includes(weekDayIndex)) {
			setWeekDays((prevState) =>
				prevState.filter((weekDay) => weekDay !== weekDayIndex)
			);
		} else {
			setWeekDays((prevState) => [...prevState, weekDayIndex]);
		}
	}

	async function handleCreateNewHabit() {
		try {
			if (!title.trim() || weekDays.length === 0) {
				return Alert.alert(
					"New Habit",
					"Please, inform the name and days of your new habit !"
				);
			}
			await api.post("/habits", {
				title,
				weekDays,
			});
			setTitle("");
			setWeekDays([]);

			Alert.alert("New Habit", "Habit created successfully 😊");
		} catch (error) {
			console.log(error);
			Alert.alert("Ops 😟", "An error occurred while creating a new habit 😣");
		}
		{
		}
	}

	return (
		<View className="flex-1 bg-background px-8 pt-16">
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 50 }}
			>
				<BackButton />
				<Text className="mt-6 text-white font-extrabold text-3xl">
					New habit
				</Text>
				<Text className="mt-6 text-white font-semibold text-base">
					What is your new habit?
				</Text>

				<TextInput
					className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white focus: border-2 border-violet-800 focus:border-violet-400"
					placeholder="Exercise, sleep well, etc..."
					placeholderTextColor={colors.zinc[400]}
					onChangeText={setTitle}
					value={title}
				/>

				<Text className="font-semibold text-white text-base mt-4 mb-12">
					Which days of the week do you want to add this?
				</Text>
				{availableWeekDays.map((weekDay, index) => (
					<Checkbox
						className="px-1"
						key={weekDay}
						title={weekDay}
						checked={weekDays.includes(index)}
						onPress={() => handleToggleWeekDay(index)}
					/>
				))}

				<Animated.View>
				<TouchableOpacity
					className="w-full h-14 flex-row items-center justify-center bg-violet-600 rounded-md mt-14"
					activeOpacity={0.7}
					onPress={handleCreateNewHabit}
				>
					<Feather name="check" size={20} color={colors.white} />
					<Text className="font-bold text-2xl text-white ml-3">Confirm</Text>
				</TouchableOpacity>
				</Animated.View>
			</ScrollView>
		</View>
	);
}
