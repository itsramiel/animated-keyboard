import {Button, Keyboard, SafeAreaView, TextInput} from 'react-native';
import React from 'react';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {useReanimatedKeyboardAnimation} from 'react-native-keyboard-controller';

const Example = () => {
  const {progress, height} = useReanimatedKeyboardAnimation();

  const rStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: 'gray',
      height: Math.abs(height.value),
      width: interpolate(progress.value, [0, 1], [100, 200]),
    };
  }, []);

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          borderColor: 'brown',
          width: '100%',
        }}
      />
      <Button title="dismiss" onPress={() => Keyboard.dismiss()} />
      <Animated.View style={rStyle} />
    </SafeAreaView>
  );
};

export default Example;
