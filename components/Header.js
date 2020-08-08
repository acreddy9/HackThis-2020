import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'My Classes',
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 20,
    backgroundColor: '#2A9D8F',
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'justify',
  },
});

export default Header;