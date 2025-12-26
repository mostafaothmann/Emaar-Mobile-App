import { ScrollView, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { CustomerAddPropertyParamList } from '@/navigation'
import ModifiedButtonNoIcon from '@/components/sharedComponents/ModifiedButtonNoIcon'
import { AddPropertyContext } from './AddPropertyProvider'
import { ITextNumber } from '@/components/sharedComponents/ITextNumber'
import { buttonClassNameInverted, inputClassName, textClassName, textClassNameInverted } from '@/assets/styleConstants'
import { TextArea } from '@/components/sharedComponents/TextArea'
import IDropDown from '@/components/sharedComponents/IDropDown'
import { Dropdown } from 'react-native-element-dropdown'
import { TextInput } from 'react-native'

export default function ChooseDetails() {

  //AddPropertyContext
  const { area, setArea, maximum_time, minimum_budget, setMaximumTime, setMinimumBudget,
    description, height, direction, setDirection, setHeight, setDescription, age, setAge,
    property, setProperty } = useContext(AddPropertyContext);

  useEffect(() => {
    console.log(property)
  })

  const saveDescription = (description: string) => {
    if (property)
      property.description = description;
    setDescription(description);
  }

  const saveAge = (age: number) => {
    if (property)
      property.age = age;
    setAge(age);
  }

  const saveArea = (area: number) => {
    if (property)
      property.area = area;
    setArea(area);
  }

  const saveMinimumBudget = (minimum_budget: number) => {
    if (property)
      property.minimum_budget = minimum_budget;
    setMinimumBudget(minimum_budget);
  }

  const saveHeight = (height: number) => {
    if (property)
      property.height = String(height);
    setHeight(String(height));
  }

  const saveDirection = (direction: number) => {
    if (property)
      property.direction = direction;
    setDirection(direction);
  }


  const directionTimes = [
    { value: 1, label: "North" },
    { value: 2, label: "East" },
    { value: 3, label: "South" },
    { value: 4, label: "West" },

    // diagonals (original order preserved)
    { value: 5, label: "North-East" },
    { value: 6, label: "North-West" },
    { value: 7, label: "South-West" },
    { value: 8, label: "South-East" },

    // unusual directions
    { value: 9, label: "East-West" },
    { value: 10, label: "South-North" },

    // corrected names
    { value: 11, label: "West-North-East" },
    { value: 12, label: "North-East-South" },
    { value: 13, label: "East-South-West" },
    { value: 14, label: "South-West-North" },

    // last unique
    { value: 15, label: "North-West-South-East" },
  ];
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState(0);

  const unitOptions = [
    { label: "Day", value: 0 },
    { label: "Week", value: 1 },
    { label: "Month", value: 2 },
    { label: "Year", value: 3 },
  ];
  const saveMaximumTime = () => {
    if (property)
      property.maximum_time = `${value} ${unitOptions[unit].label}`;
    setMaximumTime(`${value} ${unitOptions[unit].label}`);
  }

  //navigation to the second
  const navigation = useNavigation<NavigationProp<CustomerAddPropertyParamList>>();
  const navigateToReviewingPage = () => {
    saveMaximumTime();
    navigation.navigate(`ReviewingPropertyPage`);
  }
  return (
    <View className=' flex-1  w-[100%] bg-primary -mt-[60] dark:bg-secondary'>

      <View className='h-[80%] '>
        <Text className='mt-[100] text-center text-body text-secondary dark:text-primary'>
          Now you can choose the remaining details </Text>
        <ScrollView
          contentContainerStyle={{
            paddingVertical: 20,
            alignItems: 'center',
          }}
          className="flex-1 w-full"
          showsVerticalScrollIndicator={false}
        >
          <ITextNumber
            text="Area :"
            value={area}
            textClassName={textClassNameInverted}
            inputClassName={inputClassName}
            onChange={(newVal) => saveArea(Number(newVal))}
          />

          <ITextNumber
            text="Height :"
            value={Number(height)}
            textClassName={textClassNameInverted}
            inputClassName={inputClassName}
            onChange={(newVal) => saveHeight(Number(newVal))}
          />

          <ITextNumber
            text="Minimum Budget :"
            value={minimum_budget}
            textClassName={textClassNameInverted}
            inputClassName={inputClassName}
            onChange={(newVal) => saveMinimumBudget(Number(newVal))}
          />

          <ITextNumber
            text="Age :"
            value={age}
            textClassName={textClassNameInverted}
            inputClassName={inputClassName}
            onChange={(newVal) => saveAge(Number(newVal))}
          />

          <View className='w-[80%]'>
            <Text className='text-body text-secondary dark:text-primary'>Maximum Time :</Text>
            <View className="ml-[0] flex-row justify-between items-center ">

              <TextInput
                value={value}
                onChangeText={(val) => setValue(val)}
                className="w-[68%] bg-forty rounded"
                style={
                  { borderRadius: 5, }
                }
              />

              <Dropdown
                fontFamily='ElMessiri'
                backgroundColor="rgba(217, 217, 217, 0.3)"
                style={{
                  width: "30%",
                  height: 40,
                  borderColor: "#D9D9D9",

                  borderWidth: 3,
                  borderRadius: 5,
                  backgroundColor: "#D9D9D9",
                }}
                placeholderStyle={{
                  color: "#D9D9D9",
                  fontFamily: "ElMessiri",
                  marginLeft: 10,
                  marginRight: 10,
                  fontSize: 16,
                  fontWeight: "400",
                }}
                selectedTextStyle={{
                  color: "#6B1011",
                  fontFamily: "ElMessiri",
                  marginLeft: 10,
                  marginRight: 10,
                  fontSize: 16,
                  fontWeight: "400",
                }}
                data={unitOptions}
                labelField="label"
                valueField="value"
                value={unit}
                onChange={(val) => setUnit(val.value)}
              />
            </View>

          </View>



          <IDropDown
            text="Direction :"
            value={direction}
            placeholder="sele direction"
            data={directionTimes}
            onChange={(newVal) => saveDirection(newVal)}
            textClassName={textClassNameInverted}
          />
          <TextArea
            text="Description :"
            value={description}
            textClassName={textClassNameInverted}
            inputClassName={inputClassName}
            onChange={(newVal) => saveDescription(String(newVal))}
          />
        </ScrollView>

      </View>
      <View className='mb-[100] w-[100%] flex-1 justify-center items-center '>
        <ModifiedButtonNoIcon text='next' handleClick={() => navigateToReviewingPage()}
          textClassName={textClassName} buttonClassName={buttonClassNameInverted}>
        </ModifiedButtonNoIcon>
      </View>
    </View>
  )


}