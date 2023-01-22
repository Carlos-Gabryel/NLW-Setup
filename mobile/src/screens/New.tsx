import {
	ScrollView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

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
				/>

				<Text className="font-semibold text-white text-base mt-4 mb6">
					Which days of the week do you want to add this?
				</Text>
				{availableWeekDays.map((weekDay, index) => (
					<Checkbox
						key={weekDay}
						title={weekDay}
						checked={weekDays.includes(index)}
						onPress={() => handleToggleWeekDay(index)}
					/>
				))}

				<TouchableOpacity
					className="w-full h-14 flex-row items-center justify-center bg-violet-600 rounded-md mt-6"
					activeOpacity={0.7}
				>
					<Feather name="check" size={20} color={colors.white} />
					<Text className="font-bold text-2xl text-white ml-3 ">Confirm</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
}
