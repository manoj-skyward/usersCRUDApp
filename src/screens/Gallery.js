import {View, Text, Platform, PermissionsAndroid, Button} from 'react-native';
import React from 'react';
import ImagePicker, {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

const Gallery = () => {
  const capturePhoto = async () => {
    console.log('\n\n State 1\n\n');
    if (Platform.OS == 'android') {
      let result;
      try {
        result = await PermissionsAndroid.request('android.permission.CAMERA', {
          buttonPositive: 'Okay',
          message:
            'Please grant camera permission if you want set profile picture from camera.',
          buttonNegative: 'Close',
        });
        console.log('\n\n State inside ossss\n\n', result);
      } catch (error) {
        console.log('CameraError', error);
      }

      //   if (!result || result != 'granted') return;
    }
    // launchCamera(response => {
    //   console.log('\n\n State 2 Camera\n\n');
    //   const {assets} = response;
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.errorCode) {
    //     console.log('ImagePicker errorCode: ', response.errorCode);
    //   } else {
    //     const finalResponse = assets[0];

    //     finalResponse.source = {uri: assets[0].uri};

    //     onFileSelect(finalResponse);
    //   }
    // });
    const result = await launchCamera();
    console.log('\n\nResult Cameraaa\n\n', result);
  };

  // App.js
  const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const source = {uri: res.uri};
        console.log('response', JSON.stringify(res));
        this.setState({
          filePath: res,
          fileData: res.data,
          fileUri: res.uri,
        });
      }
    });
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Capture Image" onPress={() => {}} color="grey" />
    </View>
  );
};

export default Gallery;
