import AsyncStorage from "@react-native-async-storage/async-storage";

export const SetAsyncStorage = async (item,setItem) => {
    try {
        const value = await AsyncStorage.setItem(item,JSON.stringify(setItem));
        if (value !== null) {
            // We have data!!
            console.log(JSON.parse(value));
        }
    } catch (error) {
        // Error retrieving data
    }
}