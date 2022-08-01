import React, { useEffect, useState, useRef } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import MainTitle from './components/MainTitle/index';
import Jitsi from './components/Jitsi';

const App = () => {
  let [chamarJitsi, setChamarJitis] = useState(false);
  const chamadaVideo = useRef();

  useEffect(() => {

    chamadaVideo.current = true;
  }, []);

  if (!chamarJitsi) {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={{ color: 'blue' }}>Olá..</Text>
          <MainTitle />
          <TouchableOpacity
            value={chamarJitsi}
            style={styles.button}
            onPress={setChamarJitis}
          >
            <Text style={{ color: 'white' }}>Começar Chamada</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
        <View style={styles.jitsiContainer}>
          <Jitsi styles={styles.jitsiContainer} />
        </View>
    );
  }
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
  jitsiContainer: {
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%',
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
