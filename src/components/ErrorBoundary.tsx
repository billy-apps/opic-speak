import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { C } from '../theme';

interface State { hasError: boolean; }

export default class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>문제가 발생했어요</Text>
          <Text style={styles.sub}>앱을 다시 시작해주세요.</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.setState({ hasError: false })}
            accessibilityLabel="다시 시도"
            accessibilityRole="button"
          >
            <Text style={styles.btnText}>다시 시도</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: C.bg,
    justifyContent: 'center', alignItems: 'center', padding: 32,
  },
  title: { fontSize: 18, fontWeight: '700', color: C.ink, marginBottom: 8 },
  sub: { fontSize: 14, color: C.ink3, marginBottom: 24, textAlign: 'center' },
  btn: {
    paddingVertical: 12, paddingHorizontal: 28,
    backgroundColor: C.em, borderRadius: 12,
  },
  btnText: { fontSize: 14, fontWeight: '700', color: '#fff' },
});
