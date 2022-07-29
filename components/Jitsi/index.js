import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';

const Jitsi = () => {
  const onConferenceTerminated = (nativeEvent) => {
    /* Conference terminated event */
    console.log('ENCERROU A CONFERENCIA', nativeEvent);
  };

  const onConferenceJoined = (nativeEvent) => {
    /* Conference joined event */
    console.log('ENTROU NA CONFERENCIA ===>', nativeEvent);
    setTimeout(() => {
      StatusBar.setHidden(true, 'none'); // this might be false if you want to show statusbar
      StatusBar.setTranslucent(true); // don't remove
      StatusBar.setBackgroundColor('blue'); // you can remove
      StatusBar.setBarStyle('light-content'); // you can remove
    }, 100);
  };

  const onConferenceWillJoin = (nativeEvent) => {
    /* Conference will join event */
    console.log('VAI ENTRAR NA CONFERENCIA', nativeEvent);
  };

  useEffect(() => {
    setTimeout(() => {
      const url = 'https://meet.saudeagora.com.vc/123'; // can also be only room name and will connect to jitsi meet servers
      const userInfo = {
        displayName: 'User',
        email: 'user@example.com',
        avatar: 'https:/gravatar.com/avatar/abc123',
      };
      const options = {
        audioMuted: false,
        audioOnly: false,
        videoMuted: false,
        subject: 'your subject',
        token: 'your token',
      };
      // eslint-disable-next-line no-unused-vars
      const meetFeatureFlags = {
        addPeopleEnabled: true,
        calendarEnabled: true,
        callIntegrationEnabled: true,
        chatEnabled: true,
        closeCaptionsEnabled: true,
        inviteEnabled: true,
        androidScreenSharingEnabled: true,
        liveStreamingEnabled: true,
        meetingNameEnabled: true,
        meetingPasswordEnabled: true,
        pipEnabled: true,
        kickOutEnabled: true,
        conferenceTimerEnabled: true,
        videoShareButtonEnabled: true,
        recordingEnabled: true,
        reactionsEnabled: true,
        raiseHandEnabled: true,
        tileViewEnabled: true,
        toolboxAlwaysVisible: false,
        toolboxEnabled: true,
        welcomePageEnabled: false,
      };
      JitsiMeet.call(url, userInfo, options.meetFeatureFlags);

      /* You can also use JitsiMeet.audioCall(url) for audio only call */
      /* You can programmatically end the call with JitsiMeet.endCall() */
    }, 1000);
  }, []);

  useEffect(() => {
    return () => {
      JitsiMeet.endCall();
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <JitsiMeetView
          onConferenceTerminated={onConferenceTerminated}
          onConferenceJoined={onConferenceJoined}
          onConferenceWillJoin={onConferenceWillJoin}
          style={styles.container}
        />
      </View>
    </SafeAreaView>
  );
};

export default Jitsi;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  loadingBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});
