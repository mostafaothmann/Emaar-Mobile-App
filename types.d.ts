import "@react-navigation/native";


declare module '*.png' {
  const value: import('react-native').ImageSourcePropType;
  export default value;
}

declare module '*.jpg' {
  const value: import('react-native').ImageSourcePropType;
  export default value;
}


declare module '*.svg' {
  import * as React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}


declare module "@react-navigation/native" {
  export interface Theme {
    colors: Theme["colors"] & {
      "--primary-color": string;
      "--secondary-color": string;
      "--ternary-color": string;
      "--forty-color": string;
    };
  }
}

