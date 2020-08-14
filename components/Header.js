import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = ({ title }) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <View style={{ 
          borderBottomColor: '#6c63ff',
          borderBottomWidth: 1,
          left: 0,
          width: 400,
          marginTop: 20,
      }}/>
    </View>
  );
};

Header.defaultProps = {
  title: 'My Classes',
};

const styles = StyleSheet.create({
  text: {
    color: '#6c63ff',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: "Ubuntu-Medium",
    marginTop: 10
  },
});

export default Header;