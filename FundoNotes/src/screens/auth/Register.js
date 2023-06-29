import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useContext} from 'react';
import theme from '../../utilities/StylingConstants';
import MyButton from '../../components/MyButton';
import MyInput from '../../components/MyInput';
import {AuthContext} from '../../navigation/AutenticationProvider';
import GoogleLoginButton from '../../components/GoogleLoginButton';
const Register = props => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const {register} = useContext(AuthContext);
  const {googleSignIn} = useContext(AuthContext);
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
      register(email, password,fullName,phoneNumber);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register</Text>
      <MyInput
        placeHolder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      {error && <Text style={{color: 'red'}}>{error.email}</Text>}

      <MyInput
        placeHolder="Full Name"
        value={fullName}
        onChangeText={text => setFullName(text)}
      />

      <Text style={{color: 'red'}}>{error.fullName}</Text>
      <MyInput
        placeHolder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />

      <Text style={{color: 'red'}}>{error.phoneNumber}</Text>

      <MyInput
        placeHolder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <Text style={{color: 'red'}}>{error.password}</Text>
      <MyButton btnLabel={'Register'} onPress={handleLogin} />
      <GoogleLoginButton  onPress={googleSignIn}  btnLabel='Register' />
      <Text>Already have an account?</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
        <Text style={styles.text2}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

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
