import React, { useRef, useState } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import { C } from '../theme';

interface Props {
  value: string;
  placeholder: string;
  onChange: (val: string) => void;
}

export default function FillInput({ value, placeholder, onChange }: Props) {
  const [width, setWidth] = useState(60);

  return (
    <View style={styles.wrap}>
      {/* Hidden sizer — measures the text to get exact pixel width */}
      <Text
        style={styles.sizer}
        onLayout={(e) => {
          const w = e.nativeEvent.layout.width;
          setWidth(Math.max(w + 12, 48));
        }}
      >
        {value || placeholder}
      </Text>

      <TextInput
        style={[styles.input, { width }]}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={C.ink5}
        autoCorrect={false}
        autoCapitalize="none"
        spellCheck={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    // inline — parent Text uses this as inline element
  },
  // Hidden off-screen sizer
  sizer: {
    position: 'absolute',
    opacity: 0,
    fontSize: 14,
    fontWeight: '700',
    paddingHorizontal: 4,
    // Must match input font exactly
  },
  input: {
    fontSize: 14,
    fontWeight: '700',
    color: C.em,
    borderBottomWidth: 1.5,
    borderBottomColor: C.em,
    borderStyle: 'dashed',
    paddingHorizontal: 4,
    paddingVertical: 0,
    minWidth: 48,
    textAlign: 'center',
  },
});
