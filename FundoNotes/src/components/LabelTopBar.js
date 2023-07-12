import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Pressable,
    Text,
  } from 'react-native';
  import React, {useState, useEffect, useContext} from 'react';
  import Entypo from 'react-native-vector-icons/Entypo';
  import theme from '../utilities/StylingConstants';
  const LabelTopBar = ({searchPhrase, navigation,handleToggle,toggle}) => {
 

   
    return (
      <View style={styles.outerConatiner}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.icons}
            onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={theme.icon.smallIcon} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}}>
            <Text style={styles.input}>{searchPhrase}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}}>
            {toggle ? (
              <Feather
                name="grid"
                size={theme.icon.smallIcon}
                color="black"
                style={styles.icons}
              />
            ) : (
              <Feather
                name="list"
                size={theme.icon.smallIcon}
                color="black"
                style={styles.icons}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}} >
          <Entypo
                name="dots-three-vertical"
                size={theme.icon.smallIcon}
                color="black"
                style={styles.icons}
              />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  export default LabelTopBar;
  
  const styles = StyleSheet.create({
    outerConatiner: {
      marginHorizontal: theme.spacing.s,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      margin: theme.spacing.m,
      justifyContent: 'space-around',
      flexDirection: 'row',
      alignSelf: 'center',
      width: '100%',
      backgroundColor: theme.colors.foreground,
      borderRadius: theme.spacing.s,
      padding: 5,
    },
    icons: {
      alignSelf: 'center',
      marginLeft: theme.spacing.l,
    },
    input: {
      fontSize: theme.textVariants.body.fontSize,
      marginLeft: theme.spacing.m,
      marginVertical: theme.spacing.s,
      width: theme.width.widthButton,
      color: theme.colors.placeHolder,
    },
  
    image: {
      width: theme.spacing.l,
      height: theme.spacing.l,
      borderRadius: 100,
      borderColor: 'black',
      borderWidth: 1,
      marginLeft: theme.spacing.l,
      marginTop: 13,
    },
  });
  