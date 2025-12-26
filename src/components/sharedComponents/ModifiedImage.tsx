import { Image, ImageResizeMode, ImageSourcePropType, View } from 'react-native'

import React from 'react'

interface data {
    src:ImageSourcePropType,
    imageClassName:string,
    mode:ImageResizeMode
}
export function ModifiedImage ({imageClassName,src,mode}:data) {
  return (
    
     <Image source={src} resizeMode={mode} className={imageClassName}></Image>

   )
}


