import React, { useEffect, useState, useRef } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MainTitle from './components/MainTitle/index';
import Jitsi from './components/Jitsi';

const App = () => {
  let [chamarJitsi, setChamarJitis] = useState(false);
  const chamadaVideo = useRef();

  const onBtnPress = () => {
    // eslint-disable-next-line no-alert
    alert('Botão clicado!');
  };

  useEffect(() => {
    chamadaVideo.current = true;
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Olá Mundo</Text>
        <MainTitle />
        <TouchableOpacity
          value={chamarJitsi}
          style={styles.button}
          onPress={setChamarJitis}
        >
          <Text style={{ color: 'white' }}>Começar Chamada</Text>
        </TouchableOpacity>

        <View style={styles.jitsiView}>
          <Jitsi />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'blue',
    marginTop: 100,
  },
  button: {
    marginTop: 10,
    backgroundColor: 'blue',
    borderRadius: 3,
    padding: 4,
  },
  btnText: {
    color: 'white',
  },

  jitsiView: {
    height: 100,
    width: '100%',
  },
});
