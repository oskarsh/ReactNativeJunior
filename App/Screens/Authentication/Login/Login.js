import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, Image, TouchableWithoutFeedback, StyleSheet, Keyboard } from 'react-native';
import Button from "../../../Components/ThemedComponents/ThemedButton"
import t from "tcomb-form-native";
import { formStyle, ThemeContext } from "../../../Theme/themes"


const Form = t.form.Form;




class Login extends Component {

  static navigationOptions = ({ screenProps }) => {
    let theme = screenProps.theme
    return {
      title: 'Login',
      headerTintColor: theme.foreground,
      headerStyle: { backgroundColor: theme.background},
    };
  };


  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      errMsg: "",
    };
  }

  User = t.struct({
    email: t.String,
    password: t.String,
  });

  options = {
    auto: "placeholders",
    fields: {
      email: {
        placeholder: "email or username",
        error: "Please enter a valid E-Mail Adress",
        autoComplete: "email",
        keyboardType: "email-address",
        textContentType: "emailAddress",
        returnKeyType: "next",
      },
      password: {
        error: "No lock without a key",
        textContentType: "password",
        returnKeyType: "next",
        secureTextEntry: true,
        selectTextOnFocus: true,
      },
    },
  };

  onFormChange = value => {
    this.setState({ value });
  };



  handleSubmit = () => {
    const value = this._form.getValue();
    if (!value) return;
    this.setState({ loading: true });

    // loginUser(value.email, value.password, (state, data) => {
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
      keyboardVerticalOffset={170}
    >
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <View style={styles.inner}>

        <View style={[theme.imgContainer, {flexGrow: 4,}]}>
            <Image
            style={theme.img}
            source={require('../../../Assets/abstract-3.png')}
            />
        </View>
        <Form
            stylesheet={formStyle}
            ref={c => (this._form = c)}
            type={this.User}
            options={this.options}
            value={this.state.value}
            onChange={this.onFormChange}
          />
        <Button
          onPress={() => this.props.navigation.navigate("App")}
          title="Sign In"
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

Login.contextType = ThemeContext
export default Login;
