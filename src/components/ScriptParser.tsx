import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { C } from '../theme';

interface Props {
  template: string;
  values?: Record<string, string>;
  onChange?: (key: string, val: string) => void;
}

/** Parse one paragraph string into Text + blank parts (no newlines). */
function parseParagraph(paragraph: string, values: Record<string, string>) {
  const parts: React.ReactNode[] = [];
  const regex = /\{([^|]+)\|([^}]+)\}/g;
  let last = 0;
  let match;
  let i = 0;

  while ((match = regex.exec(paragraph)) !== null) {
    if (match.index > last) {
      parts.push(
        <Text key={`t${i}`} style={styles.body}>
          {paragraph.slice(last, match.index)}
        </Text>
      );
    }
    const key = match[1];
    const ph = match[2];
    const display = values[key]?.trim() ? values[key] : ph;
    parts.push(
      <Text key={`b${i}`} style={styles.body}>
        {display}
      </Text>
    );
    last = match.index + match[0].length;
    i++;
  }

  if (last < paragraph.length) {
    parts.push(
      <Text key={`t${i}`} style={styles.body}>
        {paragraph.slice(last)}
      </Text>
    );
  }

  return <Text style={styles.para}>{parts}</Text>;
}

const LABELS = ['서론', '본론', '결론'];

/** 문장 끝(. ! ? + 공백)에서만 자르기, { } 안은 무시 */
function splitSentences(text: string): string[] {
  const list: string[] = [];
  let start = 0;
  let depth = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === '{') depth++;
    else if (text[i] === '}') depth--;
    else if (depth === 0 && /[.!?]/.test(text[i])) {
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

/** 본문 앞에 붙은 서론/본론/결론 제거 (레이블과 중복 방지) */
function stripLeadingLabel(text: string): string {
  return text.replace(/^\s*(서론|본론|결론|마지막)\s*\n?\s*/g, '').trim();
}

/** 문장 배열을 3덩어리로. 문장·덩어리 안의 줄바꿈은 공백으로 치환 */
function intoThreeChunks(sentences: string[]): string[] {
  const filtered = sentences.filter((s) => !['서론', '본론', '결론', '마지막'].includes(s.trim()));
  if (filtered.length === 0) return [];
  const n = Math.ceil(filtered.length / 3);
  const toChunk = (arr: string[]) =>
    stripLeadingLabel(arr.map((s) => s.replace(/\n/g, ' ')).join(' '));
  return [
    toChunk(filtered.slice(0, n)),
    toChunk(filtered.slice(n, n * 2)),
    toChunk(filtered.slice(n * 2)),
  ].filter(Boolean);
}

export default function ScriptParser({ template, values = {} }: Props) {
  const sentences = splitSentences(template);
  const chunks = intoThreeChunks(sentences);

  if (chunks.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.block}>{parseParagraph(template.trim(), values)}</View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {chunks.map((content, idx) => (
        <View key={idx} style={styles.block}>
          <Text style={styles.sectionLabel}>{LABELS[idx]}</Text>
          {parseParagraph(content, values)}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  block: {
    alignSelf: 'stretch',
    marginBottom: 16,
    borderLeftWidth: 2.5,
    borderLeftColor: C.em,
    paddingLeft: 11,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: C.ink4,
    letterSpacing: 0.6,
    marginBottom: 6,
  },
  para: {
    fontSize: 14,
    lineHeight: 26,
    color: C.ink2,
  },
  body: {
    fontSize: 14,
    color: C.ink2,
  },
});
