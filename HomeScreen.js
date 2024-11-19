import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>para mi Danilus</Text>
      <Text style={styles.subtitle}>Que estas flores amarillas llenen tu día de luz y alegría, y que cada pétalo sea un recordatorio de lo especial que eres, asi como tu lo eres para mi.</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Para ti"
          color="#6C63FF"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 150,
    marginBottom: 150,
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 100,
    boxShadow: '10px 10px 10px 10px #ccc',
    marginLeft: 20,
    marginRight: 20,
    shadowColor: "purple",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: '#555',
  },
  buttonContainer: {
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
