import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GUIDE_DATA } from '../data/survey';
import { C } from '../theme';
import { loadState, saveState, AppState } from '../utils/storage';

export default function GuideScreen() {
  const insets = useSafeAreaInsets();
  const [state, setState] = useState<AppState>({});

  useEffect(() => { loadState().then(setState); }, []);

  const toggle = (idx: number) => {
    const next = { ...state, ['gd' + idx]: !state['gd' + idx] };
    setState(next);
    saveState(next);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingTop: insets.top + 16, paddingBottom: insets.bottom + 80 }}
    >
      <View style={styles.hdr}>
        <Text style={styles.title}>오픽 <Text style={styles.em}>공략법</Text></Text>
        <Text style={styles.sub}>시험 구조부터 AL 전략까지</Text>
      </View>

      {GUIDE_DATA.map((g, idx) => {
        const open = !!state['gd' + idx];
        return (
          <View key={idx} style={[styles.acc, open && styles.accOpen]}>
            <TouchableOpacity style={styles.head} onPress={() => toggle(idx)}>
              <View style={styles.num}>
                <Text style={styles.numText}>{g.num}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.accTitle}>{g.title}</Text>
                <Text style={styles.accSub}>{g.sub}</Text>
              </View>
              <Text style={[styles.chev, open && styles.chevOpen]}>▾</Text>
            </TouchableOpacity>

            {open && (
              <View style={styles.body}>
                {/* Render content based on guide type */}
                {'note' in g && (
                  <View style={styles.ibox}>
                    <Text style={styles.iboxT}>기본 정보</Text>
                    <Text style={styles.iboxB}>{(g as any).note}</Text>
                  </View>
                )}
                {'rows' in g && (
                  <View style={styles.table}>
                    <View style={styles.thr}>
                      {['등급','수준','취업'].map(h=><Text key={h} style={styles.th}>{h}</Text>)}
                    </View>
                    {(g as any).rows.map((r: any, i: number) => (
                      <View key={i} style={styles.tr}>
                        <Text style={styles.td}>{r.grade}</Text>
                        <Text style={styles.td}>{r.level}</Text>
                        <Text style={styles.td}>{r.job}</Text>
                      </View>
                    ))}
                  </View>
                )}
                {'steps' in g && (g as any).steps.map((s: any, i: number) => (
                  <View key={i} style={styles.step}>
                    <View style={styles.stepDot}>
                      <Text style={styles.stepN}>{s.n}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.stepT}>{s.t}</Text>
                      <Text style={styles.stepD}>{s.d}</Text>
                    </View>
                  </View>
                ))}
                {'saRows' in g && (
                  <>
                    <View style={styles.table}>
                      <View style={styles.thr}>
                        {['선택','난이도','목표'].map(h=><Text key={h} style={styles.th}>{h}</Text>)}
                      </View>
                      {(g as any).saRows.map((r: any, i: number) => (
                        <View key={i} style={styles.tr}>
                          <Text style={styles.td}>{r.sel}</Text>
                          <Text style={styles.td}>{r.diff}</Text>
                          <Text style={styles.td}>{r.target}</Text>
                        </View>
                      ))}
                    </View>
                    <View style={styles.dodont}>
                      <View style={[styles.ddBox, {borderColor: C.em}]}>
                        <Text style={[styles.ddT, {color: C.em}]}>✓ DO</Text>
                        {(g as any).dos.map((d: string, i: number) => <Text key={i} style={styles.ddI}>✅ {d}</Text>)}
                      </View>
                      <View style={[styles.ddBox, {borderColor: C.rose}]}>
                        <Text style={[styles.ddT, {color: C.rose}]}>✕ DON'T</Text>
                        {(g as any).donts.map((d: string, i: number) => <Text key={i} style={styles.ddI}>❌ {d}</Text>)}
                      </View>
                    </View>
                  </>
                )}
                {'tips' in g && (g as any).tips.map((t: any, i: number) => (
                  <View key={i} style={styles.tip}>
                    <View style={styles.tipN}>
                      <Text style={styles.tipNText}>{i+1}</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text style={styles.tipLbl}>{t.label}</Text>
                      <Text style={styles.tipT}>{t.text}</Text>
                    </View>
                  </View>
                ))}
                {'fillers' in g && (
                  <>
                    <View style={styles.dodont}>
                      <View style={[styles.ddBox, {borderColor: C.em}]}>
                        <Text style={[styles.ddT, {color: C.em}]}>시험 전날</Text>
                        {(g as any).dos.map((d: string, i: number) => <Text key={i} style={styles.ddI}>✅ {d}</Text>)}
                      </View>
                      <View style={[styles.ddBox, {borderColor: C.sky}]}>
                        <Text style={[styles.ddT, {color: C.sky}]}>당일</Text>
                        {(g as any).dayDos.map((d: string, i: number) => <Text key={i} style={styles.ddI}>✅ {d}</Text>)}
                      </View>
                    </View>
                    <View style={styles.ibox}>
                      <Text style={styles.iboxT}>막혔을 때 필러</Text>
                      {(g as any).fillers.map((f: string, i: number) => (
                        <Text key={i} style={styles.iboxB}>• {f}</Text>
                      ))}
                      <Text style={[styles.iboxB, {fontWeight:'700', color: C.ink, marginTop:4}]}>절대 침묵하지 마세요!</Text>
                    </View>
                  </>
                )}
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
  sub: { fontSize: 12, color: C.ink3 },
  acc: { marginHorizontal: 18, marginBottom: 7, backgroundColor: C.w, borderWidth: 1.5, borderColor: C.line, borderRadius: 14, overflow: 'hidden' },
  accOpen: { borderColor: C.em },
  head: { padding: 13, flexDirection: 'row', alignItems: 'center', gap: 9 },
  num: { width: 27, height: 27, borderRadius: 8, backgroundColor: C.bg2, justifyContent: 'center', alignItems: 'center' },
  numText: { fontSize: 12, fontWeight: '700', color: C.em },
  accTitle: { fontSize: 13, fontWeight: '700', color: C.ink },
  accSub: { fontSize: 10, color: C.ink4, marginTop: 1 },
  chev: { fontSize: 13, color: C.ink4 },
  chevOpen: { transform: [{ rotate: '180deg' }] },
  body: { paddingHorizontal: 14, paddingBottom: 14 },
  ibox: { backgroundColor: C.bg, borderRadius: 11, padding: 11, borderLeftWidth: 3, borderLeftColor: C.em, marginBottom: 9 },
  iboxT: { fontSize: 10, fontWeight: '800', color: C.em, textTransform: 'uppercase', letterSpacing: 0.7, marginBottom: 3 },
  iboxB: { fontSize: 12, color: C.ink2, lineHeight: 19 },
  table: { borderRadius: 9, overflow: 'hidden', borderWidth: 1, borderColor: C.line, marginBottom: 9 },
  thr: { flexDirection: 'row', backgroundColor: C.bg2, borderBottomWidth: 1, borderBottomColor: C.line2 },
  th: { flex: 1, fontSize: 9, fontWeight: '800', color: C.ink4, padding: 6, textTransform: 'uppercase' },
  tr: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: C.line },
  td: { flex: 1, fontSize: 11, color: C.ink3, padding: 6, lineHeight: 17 },
  step: { flexDirection: 'row', gap: 9, paddingBottom: 10 },
  stepDot: { width: 24, height: 24, borderRadius: 99, backgroundColor: C.ems, justifyContent: 'center', alignItems: 'center' },
  stepN: { fontSize: 10, fontWeight: '800', color: C.em },
  stepT: { fontSize: 12, fontWeight: '700', color: C.ink, marginBottom: 2 },
  stepD: { fontSize: 11, color: C.ink4, lineHeight: 17 },
  dodont: { flexDirection: 'row', gap: 6, marginBottom: 9 },
  ddBox: { flex: 1, backgroundColor: C.bg, borderRadius: 9, padding: 9, borderWidth: 1 },
  ddT: { fontSize: 9, fontWeight: '800', letterSpacing: 0.6, textTransform: 'uppercase', marginBottom: 4 },
  ddI: { fontSize: 11, color: C.ink3, marginBottom: 3, lineHeight: 17 },
  tip: { flexDirection: 'row', gap: 8, backgroundColor: C.bg, borderRadius: 9, padding: 10, marginBottom: 6 },
  tipN: { width: 18, height: 18, borderRadius: 5, backgroundColor: C.golds, justifyContent: 'center', alignItems: 'center' },
  tipNText: { fontSize: 9, fontWeight: '800', color: C.gold },
  tipLbl: { fontSize: 11, fontWeight: '700', color: C.ink, marginBottom: 2 },
  tipT: { fontSize: 12, color: C.ink2, lineHeight: 18 },
});
