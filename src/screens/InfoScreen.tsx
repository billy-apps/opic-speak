import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SV_DATA, GUIDE_DATA, GuideItem } from '../data/survey';
import { C } from '../theme';
import { loadState, saveState, AppState } from '../utils/storage';

function SectionHeader({ title, subtitle, first }: { title: string; subtitle?: string; first?: boolean }) {
  return (
    <View style={[styles.sectionHdr, first && styles.sectionHdrFirst]}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {subtitle && <Text style={styles.sectionSub}>{subtitle}</Text>}
    </View>
  );
}

export default function InfoScreen() {
  const insets = useSafeAreaInsets();
  const [state, setState] = useState<AppState>({});

  useEffect(() => { loadState().then(setState); }, []);

  const persist = (next: AppState) => { setState(next); saveState(next); };

  const toggleSv = (idx: number) => {
    persist({ ...state, ['sv' + idx]: !state['sv' + idx] });
  };

  const toggleTopic = (nm: string) => {
    persist({ ...state, ['tc_' + nm]: !state['tc_' + nm] });
  };

  const toggleGd = (idx: number) => {
    persist({ ...state, ['gd' + idx]: !state['gd' + idx] });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingTop: insets.top + 16, paddingBottom: insets.bottom + 80 }}
    >
      {/* 서베이 전략 */}
      <SectionHeader
        first
        title="서베이 전략"
        subtitle="Background Survey 선택이 출제 문항을 결정해요. 잘 아는 주제만 고르세요."
      />

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
          <View key={'sv' + idx} style={[styles.acc, open && { borderColor: d.c }]}>
            <TouchableOpacity style={styles.accHead} onPress={() => toggleSv(idx)}>
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

      {/* 오픽 공략법 */}
      <SectionHeader
        title="오픽 공략법"
        subtitle="시험 구조부터 AL 전략까지"
      />

      {GUIDE_DATA.map((g: GuideItem, idx) => {
        const open = !!state['gd' + idx];
        return (
          <View key={'gd' + idx} style={[styles.acc, open && styles.accOpen]}>
            <TouchableOpacity style={styles.head} onPress={() => toggleGd(idx)}>
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
                {g.note && (
                  <View style={styles.ibox}>
                    <Text style={styles.iboxT}>기본 정보</Text>
                    <Text style={styles.iboxB}>{g.note}</Text>
                  </View>
                )}
                {g.rows && (
                  <View style={styles.table}>
                    <View style={styles.thr}>
                      {['등급','수준','취업'].map(h=><Text key={h} style={styles.th}>{h}</Text>)}
                    </View>
                    {g.rows.map((r, i) => (
                      <View key={i} style={styles.tr}>
                        <Text style={styles.td}>{r.grade}</Text>
                        <Text style={styles.td}>{r.level}</Text>
                        <Text style={styles.td}>{r.job}</Text>
                      </View>
                    ))}
                  </View>
                )}
                {g.steps && g.steps.map((s, i) => (
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
                {g.saRows && (
                  <>
                    <View style={styles.table}>
                      <View style={styles.thr}>
                        {['선택','난이도','목표'].map(h=><Text key={h} style={styles.th}>{h}</Text>)}
                      </View>
                      {g.saRows.map((r, i) => (
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
                        {g.dos?.map((d, i) => <Text key={i} style={styles.ddI}>✅ {d}</Text>)}
                      </View>
                      <View style={[styles.ddBox, {borderColor: C.rose}]}>
                        <Text style={[styles.ddT, {color: C.rose}]}>✕ DON'T</Text>
                        {g.donts?.map((d, i) => <Text key={i} style={styles.ddI}>❌ {d}</Text>)}
                      </View>
                    </View>
                  </>
                )}
                {g.tips && !g.fillers && g.tips.map((t, i) => (
                  <View key={i} style={styles.tip}>
                    <View style={[styles.tipN, styles.tipNGold]}>
                      <Text style={[styles.tipNText, styles.tipNTextGold]}>{i+1}</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text style={styles.tipLbl}>{t.label}</Text>
                      <Text style={styles.tipT}>{t.text}</Text>
                    </View>
                  </View>
                ))}
                {g.fillers && (
                  <>
                    <View style={styles.dodont}>
                      <View style={[styles.ddBox, {borderColor: C.em}]}>
                        <Text style={[styles.ddT, {color: C.em}]}>시험 전날</Text>
                        {g.dos?.map((d, i) => <Text key={i} style={styles.ddI}>✅ {d}</Text>)}
                      </View>
                      <View style={[styles.ddBox, {borderColor: C.sky}]}>
                        <Text style={[styles.ddT, {color: C.sky}]}>당일</Text>
                        {g.dayDos?.map((d, i) => <Text key={i} style={styles.ddI}>✅ {d}</Text>)}
                      </View>
                    </View>
                    <View style={styles.ibox}>
                      <Text style={styles.iboxT}>막혔을 때 필러</Text>
                      {g.fillers.map((f, i) => (
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
  sectionHdr: { paddingHorizontal: 18, marginTop: 24, marginBottom: 10 },
  sectionHdrFirst: { marginTop: 0 },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: C.ink },
  sectionSub: { fontSize: 12, color: C.ink3, lineHeight: 19, marginTop: 1 },
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
  accOpen: { borderColor: C.em },
  accHead: { padding: 13, flexDirection: 'row', alignItems: 'center', gap: 9 },
  head: { padding: 13, flexDirection: 'row', alignItems: 'center', gap: 9 },
  grade: { width: 38, height: 38, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  gradeText: { fontSize: 12, fontWeight: '700' },
  accNm: { fontSize: 13, fontWeight: '700', color: C.ink },
  accDs: { fontSize: 10, color: C.ink4, marginTop: 1 },
  num: { width: 27, height: 27, borderRadius: 8, backgroundColor: C.bg2, justifyContent: 'center', alignItems: 'center' },
  numText: { fontSize: 12, fontWeight: '700', color: C.em },
  accTitle: { fontSize: 13, fontWeight: '700', color: C.ink },
  accSub: { fontSize: 10, color: C.ink4, marginTop: 1 },
  chev: { fontSize: 13, color: C.ink4 },
  chevOpen: { transform: [{ rotate: '180deg' }] },
  accBody: { paddingHorizontal: 14, paddingBottom: 13 },
  body: { paddingHorizontal: 14, paddingBottom: 14 },
  tip: { flexDirection: 'row', gap: 8, marginBottom: 6, backgroundColor: C.bg, borderRadius: 9, padding: 10 },
  tipN: { width: 18, height: 18, borderRadius: 5, justifyContent: 'center', alignItems: 'center' },
  tipNGold: { backgroundColor: C.golds },
  tipNText: { fontSize: 9, fontWeight: '800' },
  tipNTextGold: { color: C.gold },
  tipT: { flex: 1, fontSize: 12, color: C.ink2, lineHeight: 19 },
  tipLbl: { fontSize: 11, fontWeight: '700', color: C.ink, marginBottom: 2 },
  topicLabel: { fontSize: 10, fontWeight: '800', color: C.ink4, letterSpacing: 0.9, textTransform: 'uppercase', marginTop: 8, marginBottom: 6 },
  topicRow: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 7, borderBottomWidth: 1, borderBottomColor: C.line },
  check: { width: 17, height: 17, borderRadius: 5, borderWidth: 2, borderColor: C.line2, backgroundColor: C.w, justifyContent: 'center', alignItems: 'center' },
  checkOn: { backgroundColor: C.em, borderColor: C.em },
  checkMark: { fontSize: 9, color: '#fff', fontWeight: '800' },
  topicNm: { flex: 1, fontSize: 12, color: C.ink2 },
  diff: { borderRadius: 4, paddingVertical: 2, paddingHorizontal: 6 },
  diffText: { fontSize: 9, fontWeight: '700' },
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
});
