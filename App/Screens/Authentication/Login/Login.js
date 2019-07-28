import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, Image, TouchableWithoutFeedback, StyleSheet, Keyboard } from 'react-native';
import Button from "../../../Components/Button/Button"
import t from "tcomb-form-native";
import { formStyle } from "../../../Theme/theme"
import { styles as themes } from "react-native-theme";


const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  password: t.String,
});


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      errMsg: "",
    };
  }

  options = {
    stylesheet: formStyle,
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

  static navigationOptions = {
    title: 'Login',
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
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={170}
    >
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <View style={styles.inner}>

        <View style={[themes.imgContainer, {flexGrow: 4,}]}>
            <Image
            style={themes.img}
            source={require('../../../Assets/abstract-3.png')}
            />
        </View>
        <Form
            ref={c => (this._form = c)}
            type={User}
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

export default Login;
