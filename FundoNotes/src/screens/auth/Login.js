import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import MyInput from '../../components/MyInput';
import theme from '../../utilities/StylingConstants';
import MyButton from '../../components/MyButton';
import Register from './Register';
import {AuthContext} from '../../navigation/AutenticationProvider';
import {FirebaseValidation} from '../../validations/FirebaseValidation';
import {CustomExeceptions} from '../../exceptions/CustomExceptions';
import GoogleLoginButton from '../../components/GoogleLoginButton';
const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(true);
  const {login, exception} = useContext(AuthContext);
  const {googleSignIn} = useContext(AuthContext);
  const catchError = (code) => {setError(code)};

  const isValidate = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let isValid = false;
    let temp = {};
    if (emailPattern.test(email)) {
      isValid = true;
    } else {
      temp.email = 'Enter a valid e-mail address';
    }

    if (passwordPattern.test(password)) {
      isValid = true;
    } else {
      temp.password =
        'Enter a valid password with a digit, Upper case, Lower case, special character, and atleast 8 characters';
    }
    setError(temp);
    return isValid;
  };
  const handleLogin = () => {
    if (isValidate()) {
      login(email,password,catchError);
    
      }
      console.log('logged in successfully');
    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <MyInput
        placeHolder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text style={{color: 'red'}}>{error.email}</Text>

      <MyInput
        placeHolder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <Text style={{color: 'red'}}>{error.password}</Text>

      <MyButton btnLabel={'Login'} onPress={handleLogin} />

      <GoogleLoginButton onPress = {googleSignIn} btnLabel = "Google" />
      <Text>New User?</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
        <Text style={styles.text2}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.foreground,
    flex: 1,
  },
  text: {
    fontSize: theme.textVariants.header.fontSize,
    fontWeight: theme.textVariants.header.fontWeight,
    margin: theme.spacing.m,
  },
  text2: {
    fontSize: theme.textVariants.body.fontSizeM,
    color: theme.colors.link,
    margin: theme.spacing.s,
  },
});
