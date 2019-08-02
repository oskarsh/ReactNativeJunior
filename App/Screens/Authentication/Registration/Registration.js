import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, Image, TouchableWithoutFeedback, StyleSheet, Keyboard } from 'react-native';
import Button from "../../../Components/Button/Button"
import t from "tcomb-form-native";
import { ThemeContext, formStyle } from '../../../Theme/themes';


const Form = t.form.Form;

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      errMsg: "",
    };
  }

  Email = t.refinement(t.String, email => {
    const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return reg.test(email);
  });

  Password = t.refinement(t.String, pass => {
    let value = this.state.value;
    let originPass = value.password;
    console.log(originPass);
    return pass === originPass;
  });

  User = t.struct({
    username: t.String,
    email: this.Email,
    password: t.String,
  });
  
  onFormChange = value => {
    this.setState({ value });
  };

  options = {
    stylesheet: formStyle,
    auto: "placeholders",
    fields: {
      username: {
        error: "Please enter a username",
        returnKeyType: "next",
      },
      email: {
        error: "Please enter a valid E-Mail Adress",
        autoComplete: "email",
        keyboardType: "email-address",
        textContentType: "emailAddress",
        returnKeyType: "next",
      },
      password: {
        error: "Please enter your password",
        textContentType: "password",
        returnKeyType: "next",
        secureTextEntry: true,
        selectTextOnFocus: true,
      },
    },
  };

  static navigationOptions = ({ screenProps }) => {
    let theme = screenProps.theme
    return {
      title: 'Registration',
      headerTintColor: theme.foreground,
      headerStyle: { backgroundColor: theme.background},
    };
  };


  handleSubmit = () => {
    const value = this._form.getValue();
    if (!value) return;
    this.setState({ loading: true });

    // RegistrationUser(value.email, value.password, (state, data) => {
    //   if (state === "error") {
    //     let req = { ...data };
    //     this.setState({ errMsg: req.message });
    //     this.setState({ loading: false });
    //   } else if (state === "success") {
    //     console.log("submit sucess", data);
    //     this.setState({ loading: false });
    //     this.props.navigation.navigate("App");
    //   }
    // });
  };

  render() {
    theme = this.context.theme;
    return (
      <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: theme.background}}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={120}
    >
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <View style={styles.inner}>

        <View style={[theme.imgContainer, {flexGrow: 4,}]}>
            <Image
            style={theme.img}
            source={require('../../../Assets/friendship.png')}
            />
        </View>
        <Form
            ref={c => (this._form = c)}
            type={this.User}
            options={this.options}
            value={this.state.value}
            onChange={this.onFormChange}
          />
        <Button
          onPress={() => this.props.navigation.navigate("IntroStack")}
          title="Sign Up"
          accessibilityLabel="This Button will Log you for the App"
        />
       </View>

        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  inner: {
      padding: 24,
      flex: 1,
      justifyContent: "flex-end",
  },
  header: {
      fontSize: 36,
      marginBottom: 48,
  },
  input: {
      height: 40,
      borderColor: "#000000",
      borderBottomWidth: 1,
      marginBottom: 36,
  },
  btnContainer: {
      backgroundColor: "white",
      marginTop: 12,
  },
});

Registration.contextType = ThemeContext;
export default Registration;
