import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { C } from '../theme';

interface Props {
  template: string;
}

const LABELS = ['서론', '본론', '결론'];

function splitSentences(text: string): string[] {
  const list: string[] = [];
  let start = 0;

  for (let i = 0; i < text.length; i++) {
    if (/[.!?]/.test(text[i])) {
      const next = text[i + 1];
      if (next === ' ' || next === '\n' || next === undefined) {
        list.push(text.slice(start, i + 1).trim());
        start = i + 1;
        while (start < text.length && /[\s\n]/.test(text[start])) start++;
      }
    }
  }
  if (start < text.length) {
    const tail = text.slice(start).trim();
    if (tail) list.push(tail);
  }
  return list;
}

function intoThreeChunks(sentences: string[]): string[] {
  if (sentences.length === 0) return [];
  const n = Math.ceil(sentences.length / 3);
  return [
    sentences.slice(0, n).join(' '),
    sentences.slice(n, n * 2).join(' '),
    sentences.slice(n * 2).join(' '),
  ].filter(Boolean);
}

export default function ScriptParser({ template }: Props) {
  const plain = template.replace(/\{[^|{}]+\|([^}{}]+)\}/g, '$1');
  const chunks = intoThreeChunks(splitSentences(plain));

  if (chunks.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.para}>{plain.trim()}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {chunks.map((content, idx) => (
        <View key={idx} style={styles.block}>
          <Text style={styles.label}>{LABELS[idx]}</Text>
          <Text style={styles.para}>{content}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignSelf: 'stretch' },
  block: {
    marginBottom: 16,
    borderLeftWidth: 2.5,
    borderLeftColor: C.em,
    paddingLeft: 11,
  },
  label: {
    fontSize: 10,
    fontWeight: '800',
    color: C.em,
    letterSpacing: 0.6,
    marginBottom: 5,
  },
  para: {
    fontSize: 14,
    lineHeight: 26,
    color: C.ink2,
  },
});
