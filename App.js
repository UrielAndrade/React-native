import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Contador from './components/Contador';
import Mensagem from './components/Mensagem';

export default function App() {
  return (
    <View style={styles.container}>
      <Mensagem></Mensagem>
      <Contador></Contador>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
