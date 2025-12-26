import React, { createContext, useState } from "react";
import { Property } from "@/stores/propertiesStore/data.store";

export const defaultProperty: Property = {
  id: 0,
  location: "",
  direction: 0,
  maximum_time: "",
  minimum_budget: 0,
  height: "",
  age: 0,
  description: "",
  area: 0,
  isActive: 0,
  typeOfPropertyId: 0,
  typeOfOwneringId: 0,
  typeOfWorkId: 0,
  statusId: 0,
  image1: "",
  image2: "",
  image3: "",
  image4: "",
  image5: "",
  customerId: null,
};


interface AddPropertyProps {
  minimum_budget: number;
  maximum_time: string;
  user: string;
  age: number;
  area: number;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  height: string;
  uri1: boolean;
  uri2: boolean;
  uri3: boolean;
  uri4: boolean;
  uri5: boolean;
  typeOfOwnering: number;
  typeOfWork: number;
  typeOfProperty: number;
  property: Property | null;
  direction: number;
  setDirection: (value: number) => void;
  setHeight: (value: string) => void;
  setUser: (value: string) => void;
  setDescription: (value: string) => void;
  setAge: (value: number) => void;
  setArea: (value: number) => void;
  setProperty: (value: Property | null) => void;
  setTypeOfOwnering: (value: number) => void;
  setTypeOfWork: (value: number) => void;
  setTypeOfProperty: (value: number) => void;
  setMinimumBudget: (value: number) => void;
  setMaximumTime: (value: string) => void;
  setImage1: (value: string) => void;
  setUri1: (value: boolean) => void;
  setImage2: (value: string) => void;
  setUri2: (value: boolean) => void;
  setImage3: (value: string) => void;
  setUri3: (value: boolean) => void;
  setImage4: (value: string) => void;
  setUri4: (value: boolean) => void;
  setImage5: (value: string) => void;
  setUri5: (value: boolean) => void;
}

export const AddPropertyContext = createContext<AddPropertyProps>({
  user: "",
  minimum_budget: 0,
  maximum_time: "",
  direction: 1,
  setMinimumBudget: () => { },
  setMaximumTime: () => { },
  setDirection: () => { },
  height: "",
  setHeight: () => { },
  setUser: () => { },
  age: 1,
  setAge: () => { },
  area: 0,
  setArea: () => { },
  description: "",
  setDescription: () => { },
  image1: "",
  setImage1: () => { },
  image2: "",
  setImage2: () => { },
  image3: "",
  setImage3: () => { },
  image4: "",
  setImage4: () => { },
  image5: "",
  setImage5: () => { },
  uri1: false,
  setUri1: () => { },
  uri2: false,
  setUri2: () => { },
  uri3: false,
  setUri3: () => { },
  uri4: false,
  setUri4: () => { },
  uri5: false,
  setUri5: () => { },
  property: null,
  setProperty: () => { },
  typeOfOwnering: 0,
  setTypeOfOwnering: () => { },
  typeOfProperty: 0,
  setTypeOfProperty: () => { },
  typeOfWork: 0,
  setTypeOfWork: () => { },
});

export const AppPropertyProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState("");
  const [direction, setDirection] = useState(0);

  const [typeOfOwnering, setTypeOfOwnering] = useState(0);
  const [typeOfWork, setTypeOfWork] = useState(0);
  const [typeOfProperty, setTypeOfProperty] = useState(0);
  const [property, setProperty] = useState<Property | null>(defaultProperty);
  const [area, setArea] = useState(0);
  const [age, setAge] = useState(1);
  const [description, setDescription] = useState("");
  const [minimum_budget, setMinimumBudget] = useState(0);
  const [maximum_time, setMaximumTime] = useState("");

  const [height, setHeight] = useState("");


  // photo1
  const [image1, setImage1] = useState("");
  const [uri1, setUri1] = useState(false);
  // photo2
  const [image2, setImage2] = useState("");
  const [uri2, setUri2] = useState(false);
  // photo3
  const [image3, setImage3] = useState("");
  const [uri3, setUri3] = useState(false);
  // photo4
  const [image4, setImage4] = useState("");
  const [uri4, setUri4] = useState(false);
  // photo5
  const [image5, setImage5] = useState("");
  const [uri5, setUri5] = useState(false);

  return (
    <AddPropertyContext.Provider
      value={{
        maximum_time,
        minimum_budget,
        setMaximumTime,
        setMinimumBudget,
        direction,
        setDirection,
        property,
        height, setHeight,
        setProperty,
        user,
        setUser,
        uri1,
        setUri1,
        image1,
        setImage1,
        age,
        setAge,
        description,
        setDescription,
        area,
        setArea,
        image2,
        setImage2,
        uri2,
        setUri2,
        image3,
        setImage3,
        image4,
        setImage4,
        image5,
        setImage5,
        uri3,
        setUri3,
        uri4,
        setUri4,
        uri5,
        setUri5,
        typeOfOwnering,
        typeOfProperty,
        typeOfWork,
        setTypeOfOwnering,
        setTypeOfProperty,
        setTypeOfWork,
      }}
    >
      {children}
    </AddPropertyContext.Provider>
  );
};
