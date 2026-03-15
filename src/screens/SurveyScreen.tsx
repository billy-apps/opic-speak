import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SV_DATA } from '../data/survey';
import { C } from '../theme';
import { loadState, saveState, AppState } from '../utils/storage';

export default function SurveyScreen() {
  const insets = useSafeAreaInsets();
  const [state, setState] = useState<AppState>({});

  useEffect(() => { loadState().then(setState); }, []);

  const persist = (next: AppState) => { setState(next); saveState(next); };

  const toggleAcc = (idx: number) => {
    persist({ ...state, ['sv' + idx]: !state['sv' + idx] });
  };

  const toggleTopic = (nm: string) => {
    persist({ ...state, ['tc_' + nm]: !state['tc_' + nm] });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingTop: insets.top + 16, paddingBottom: insets.bottom + 80 }}
    >
      <View style={styles.hdr}>
        <Text style={styles.title}>서베이 <Text style={styles.em}>전략</Text></Text>
        <Text style={styles.sub}>Background Survey 선택이 출제 문항을 결정해요. 잘 아는 주제만 고르세요.</Text>
      </View>

      <View style={styles.ibox}>
        <Text style={styles.iboxT}>핵심 원칙</Text>
        <Text style={styles.iboxB}>
          선택한 항목에서만 문제가 나와요.{' '}
          <Text style={styles.bold}>많이 고를수록 리스크</Text>가 커지고,{' '}
          <Text style={styles.bold}>준비된 주제만</Text> 선택해야 안정적으로 점수를 받을 수 있어요.
        </Text>
      </View>

      {SV_DATA.map((d, idx) => {
        const open = !!state['sv' + idx];
        return (
          <View key={idx} style={[styles.acc, open && { borderColor: d.c }]}>
            <TouchableOpacity style={styles.accHead} onPress={() => toggleAcc(idx)}>
              <View style={[styles.grade, { backgroundColor: d.bg }]}>
                <Text style={[styles.gradeText, { color: d.c }]}>{d.grade}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.accNm}>{d.grade} 전략</Text>
                <Text style={styles.accDs}>{d.desc}</Text>
              </View>
              <Text style={[styles.chev, open && styles.chevOpen]}>▾</Text>
            </TouchableOpacity>

            {open && (
              <View style={styles.accBody}>
                {d.tips.map((t, j) => (
                  <View key={j} style={styles.tip}>
                    <View style={[styles.tipN, { backgroundColor: d.bg }]}>
                      <Text style={[styles.tipNText, { color: d.c }]}>{j + 1}</Text>
                    </View>
                    <Text style={styles.tipT}>
                      {t.t.replace(/<b>/g, '').replace(/<\/b>/g, '')}
                    </Text>
                  </View>
                ))}
                <Text style={styles.topicLabel}>추천 토픽</Text>
                {d.topics.map((t) => {
                  const checked = !!state['tc_' + t.nm];
                  return (
                    <TouchableOpacity
                      key={t.nm}
                      style={styles.topicRow}
                      onPress={() => toggleTopic(t.nm)}
                    >
                      <View style={[styles.check, checked && styles.checkOn]}>
                        {checked && <Text style={styles.checkMark}>✓</Text>}
                      </View>
                      <Text style={styles.topicNm}>{t.nm}</Text>
                      <View style={[styles.diff, { backgroundColor: t.c + '18' }]}>
                        <Text style={[styles.diffText, { color: t.c }]}>{t.diff}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bg },
  hdr: { paddingHorizontal: 18, marginBottom: 14 },
  title: { fontSize: 26, fontWeight: '700', color: C.ink, marginBottom: 4 },
  em: { color: C.em, fontStyle: 'italic' },
  sub: { fontSize: 12, color: C.ink3, lineHeight: 19 },
  ibox: {
    marginHorizontal: 18, marginBottom: 14,
    backgroundColor: C.w, borderRadius: 12,
    padding: 13, borderLeftWidth: 3, borderLeftColor: C.em,
  },
  iboxT: { fontSize: 10, fontWeight: '800', color: C.em, letterSpacing: 0.7, textTransform: 'uppercase', marginBottom: 3 },
  iboxB: { fontSize: 12, color: C.ink2, lineHeight: 19 },
  bold: { fontWeight: '700', color: C.ink },
  acc: {
    marginHorizontal: 18, marginBottom: 8,
    backgroundColor: C.w, borderWidth: 1.5, borderColor: C.line,
    borderRadius: 14, overflow: 'hidden',
  },
  accHead: { padding: 13, flexDirection: 'row', alignItems: 'center', gap: 9 },
  grade: { width: 38, height: 38, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  gradeText: { fontSize: 12, fontWeight: '700' },
  accNm: { fontSize: 13, fontWeight: '700', color: C.ink },
  accDs: { fontSize: 10, color: C.ink4, marginTop: 1 },
  chev: { fontSize: 13, color: C.ink4 },
  chevOpen: { transform: [{ rotate: '180deg' }] },
  accBody: { paddingHorizontal: 14, paddingBottom: 13 },
  tip: { flexDirection: 'row', gap: 8, marginBottom: 6, backgroundColor: C.bg, borderRadius: 9, padding: 10 },
  tipN: { width: 18, height: 18, borderRadius: 5, justifyContent: 'center', alignItems: 'center' },
  tipNText: { fontSize: 9, fontWeight: '800' },
  tipT: { flex: 1, fontSize: 12, color: C.ink2, lineHeight: 19 },
  topicLabel: { fontSize: 10, fontWeight: '800', color: C.ink4, letterSpacing: 0.9, textTransform: 'uppercase', marginTop: 8, marginBottom: 6 },
  topicRow: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 7, borderBottomWidth: 1, borderBottomColor: C.line },
  check: { width: 17, height: 17, borderRadius: 5, borderWidth: 2, borderColor: C.line2, backgroundColor: C.w, justifyContent: 'center', alignItems: 'center' },
  checkOn: { backgroundColor: C.em, borderColor: C.em },
  checkMark: { fontSize: 9, color: '#fff', fontWeight: '800' },
  topicNm: { flex: 1, fontSize: 12, color: C.ink2 },
  diff: { borderRadius: 4, paddingVertical: 2, paddingHorizontal: 6 },
  diffText: { fontSize: 9, fontWeight: '700' },
});
