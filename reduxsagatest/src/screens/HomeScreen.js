import React from 'react';
import {useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {GET_ALL_USER_INFO_REQUEST} from '../modals/user/actions';
import SplashScreen from 'react-native-splash-screen';

const HomeScreen = ({id, name, email, getAllUserInfo}) => {
  useEffect(() => {
    getAllUserInfo();
    SplashScreen.hide();
  }, [getAllUserInfo]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  );
};

const mapStateToProps = (state, props) => {
  const {id, name, email} = state.user;

  return {id, name, email};
};

const mapDispatchToProps = (dispatch, props) => ({
  getAllUserInfo: () => {
    dispatch({
      type: GET_ALL_USER_INFO_REQUEST,
      payload: {},
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
