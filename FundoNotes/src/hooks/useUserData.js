import { View, Text } from 'react-native'
import React, { useState,useEffect } from 'react'
import { fetchUser } from '../services/UserServices'
const useUserData = (user) => {

   const getUser = async () => {
        const userDetails = await fetchUser(user);
        return userDetails
      };
      return getUser()
}

export default useUserData