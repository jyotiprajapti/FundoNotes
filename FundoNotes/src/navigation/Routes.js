import React, { useContext,useState,useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth'
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { AuthContext } from './AutenticationProvider';

const Routes = ()=>{
  const {user, setUser} = useContext(AuthContext)
  const [initialising,SetInitialising] = useState(true);
  const onAuthStateChanged = (user)=>{
    setUser(user)
    if (initialising) SetInitialising(false)
  }

  useEffect(()=>{
const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
return subscriber;
  },[]);

  if(initialising) return null;
  console.log("user is shown here",user)

  return(
    
      <NavigationContainer>
        
        {user?<AppStack/>:<AuthStack/>}
    </NavigationContainer>
    
  )
}
export default Routes;