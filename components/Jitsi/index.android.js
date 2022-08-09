import React, { useEffect, useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';

const Jitsi = () => {
  const [onIniciar, setOnIniciar] = useState(false);

  const onConferenceTerminated = (nativeEvent) => {
    /* Conference terminated event */
    console.log('ENCERROU A CONFERENCIA ===>', nativeEvent);
  };

  const onConferenceJoined = (nativeEvent) => {
    /* Conference joined event */
    console.log('ENTROU NA CONFERENCIA ===>', nativeEvent);
  };

  const onConferenceWillJoin = (nativeEvent) => {
    /* Conference will join event */
    console.log('VAI ENTRAR NA CONFERENCIA ===>', nativeEvent);
  };

  useEffect(() => {
    setTimeout(() => {
      const url = 'https://meet.jit.si/saudeagora123'; // último: https://meet.saudeagora.com.vc/123servers
      const userInfo = {
        displayName: 'User',
        email: 'user@example.com',
        avatar: 'https:/gravatar.com/avatar/abc123',
      };
      const options = {
        audioMuted: false,
        audioOnly: false,
        videoMuted: false,
        subject: ',your subject',
        token: ',your token',
      };
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

      if (Platform.iOS) {
        JitsiMeetView.iniciar(url, userInfo, options, meetFeatureFlags);
      } else {
        setOnIniciar(true);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    JitsiMeet.endCall();
  }, []);

  return (
    <JitsiMeetView
      style={styles.container}
      iniciar={onIniciar}
      onConferenceTerminated={onConferenceTerminated}
      onConferenceJoined={onConferenceJoined}
      onConferenceWillJoin={onConferenceWillJoin}
    />
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
