import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SeachBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  return (
    <View>
      <SeachBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log('term was submitted')}
      />
      <Text>{term}</Text>
    </View>
  )
};


const styles = StyleSheet.create({});

export default SearchScreen;