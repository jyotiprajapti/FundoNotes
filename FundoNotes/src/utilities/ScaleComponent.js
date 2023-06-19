import {Dimensions } from 'react-native'


    const {height,width} =Dimensions.get("window");
    const assumeHeight = 667;
    const assumeWidth = 375;
export const verticalScale=(size)=>(height/assumeHeight) * size;
export const horizontalScale = (size)=>(width/assumeWidth)*size;   


