---
title: Detect Shake Events in React Native
excerpt: Get access to the accelerometer sensor in React Native to detect shake events
image: mastering-js-thumb.png
isFeatured: true
date: '2022-04-16'
---

To detect the shake event in React Native, we need to get access to the accelerometer sensor. The accelerometer sensor is a device that detects the movement of the device. 
> Note: This method is only for expo react-native applications.<br> If you're installing this in a bare React Native app, you should also follow [these additional installation instructions](https://github.com/expo/expo/tree/main/packages/expo-sensors).


## Platform Compatibility
| Android Device | Android Emulator | iOS Device | iOS Simulator | 	Web |
| --- | ----------- | --- | ----------- | --- |
| ✅ | ✅ | ✅ | ❌ | ✅ |
|

* First, we need to install the expo-sensors package.<br>```expo install expo-sensors```
* In the Expo app<br>```import { Accelerometer } from 'expo-sensors';```

## Methods
```
Accelerometer.isAvailableAsync()
```
This method returns a promise that resolves to a boolean value indicating whether the accelerometer is available on the device.

```
Accelerometer.addListener(listener)
```
This method returns a subscription object that can be used to unsubscribe from the accelerometer.

```
Accelerometer.removeAllListeners()
```
This method removes all accelerometer listeners.

```
Accelerometer.setUpdateInterval(interval)
```
This method sets the update interval for the accelerometer.

## Example:
```
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function App() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => {
    Accelerometer.setUpdateInterval(1000);
  };

  const _fast = () => {
    Accelerometer.setUpdateInterval(16);
  };

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const { x, y, z } = data;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Accelerometer: (in Gs where 1 G = 9.81 m s^-2)</Text>
      <Text style={styles.text}>
        x: {round(x)} y: {round(y)} z: {round(z)}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
          <Text>{subscription ? 'On' : 'Off'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
          <Text>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text>Fast</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function round() { ... } 
const styles = StyleSheet.create({ ... }); 
```
Source: [Expo Docs](https://docs.expo.dev/versions/latest/sdk/accelerometer/)

## Share ↗️ | Learn 🧑‍💻 | Support 🧑‍💻❣️