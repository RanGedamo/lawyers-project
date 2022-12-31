import AsyncStorage from "@react-native-async-storage/async-storage";

export const RemoveAsyncStorage = async (item) => {
    try {
        const value = await AsyncStorage.removeItem(item);
        if (value !== null) {
            // We have data!!
            console.log(JSON.parse(value));
        }
    } catch (error) {
        // Error retrieving data
    }
}