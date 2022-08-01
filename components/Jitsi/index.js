import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';

const Jitsi = () => {
  const onConferenceTerminated = (nativeEvent) => {
    /* Conference terminated event */
    console.log('ENCERROU A CONFERENCIA', nativeEvent);
  };

  const onConferenceJoined = (nativeEvent) => {
    /* Conference joined event */
    console.log('ENTROU NA CONFERENCIA ===>', nativeEvent);
  };

  const onConferenceWillJoin = (nativeEvent) => {
    /* Conference will join event */
    console.log('VAI ENTRAR NA CONFERENCIA', nativeEvent);
  };

  useEffect(() => {
    const url = 'https://meet.jit.si/saudeagora123'; // último: https://meet.saudeagora.com.vc/123
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

    // setTimeout(() => {
    // }, 3000)

    /* You can also use JitsiMeet.audioCall(url) for audio only call */
    /* You can programmatically end the call with JitsiMeet.endCall() */
  }, []);

  useEffect(() => {
    return () => {
      JitsiMeet.endCall();
    };
  });

  return (
    <JitsiMeetView
      onConferenceTerminated={onConferenceTerminated}
      onConferenceJoined={onConferenceJoined}
      onConferenceWillJoin={onConferenceWillJoin}
      style={styles.container}
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
