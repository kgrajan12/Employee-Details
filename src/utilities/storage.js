import AsyncStorage from "@react-native-async-storage/async-storage";

const key = 'employee_details';

export const getEmployeeData = () => AsyncStorage.getItem(key).then(res => JSON.parse(res));
export const setEmployeeData = (data) => AsyncStorage.setItem(key, JSON.stringify(data));
