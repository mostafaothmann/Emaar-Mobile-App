import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown';


interface IDropDown {
    text?: string;                      // Optional label/title above the dropdown
    value: number | null;               // Current selected value
    textClassName?: string;             // Optional class for label
    inputClassName?: string;            // Optional class for input
    data: Array<{ label: string; value: number }>;  // The dropdown items
    placeholder?: string;               // Placeholder text
    onChange: (newValue: number) => void; // Callback when user selects
}

const IDropDown = ({ text, value, onChange, textClassName, data, placeholder }: IDropDown) => {
    return (
        <View className='w-[80%] max-w-[350] m-2'>
            <Text className={textClassName}>{text}</Text>
            <Dropdown
                backgroundColor="rgba(217, 217, 217, 0.3)"
                fontFamily='ElMessiri'
                style={{
                    width: '100%',
                    height: 45,
                    borderColor: "#D9D9D9",
                    borderWidth: 3,
                    borderRadius: 10,
                    backgroundColor: "#D9D9D9",
                }}
                placeholderStyle={{
                    color: "#D9D9D9", fontFamily: "ElMessiri", marginLeft: 10, marginRight: 10, fontSize: 16,
                    fontWeight: "400",
                }}
                selectedTextStyle={{
                    color: "#6B1011", fontFamily: "ElMessiri", marginLeft: 10, marginRight: 10, fontSize: 16,
                    fontWeight: "400",
                }}
                data={data}
                labelField="label"
                valueField="value"
                placeholder={placeholder}
                value={value}
                onChange={(item) => {
                    onChange(item.value);
                }}
            />
        </View>
    )
}

export default IDropDown

const styles = StyleSheet.create({})