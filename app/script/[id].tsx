import React, { useCallback, useEffect, useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Alert, Platform, ActivityIndicator,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';
import { SCRIPTS, ScriptLevel } from '../../src/data/scripts';
import ScriptParser from '../../src/components/ScriptParser';
import { C, LV_COLORS, Level } from '../../src/theme';
import { loadState, saveState, AppState } from '../../src/utils/storage';

export default function ScriptDetailScreen() {
  const { id, defaultLv } = useLocalSearchParams<{ id: string; defaultLv?: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [state, setState] = useState<AppState>({});
  const [isLoading, setIsLoading] = useState(true);

  const script = SCRIPTS.find((s) => s.id === id);

  useEffect(() => {
    loadState().then((s) => { setState(s); setIsLoading(false); });
  }, []);

  const lv: Level = ((state['lv_' + id] || defaultLv || 'ih') as Level);
  const data: ScriptLevel | undefined = script?.[lv];

  const persist = useCallback((next: AppState) => {
    setState(next);
    saveState(next);
  }, []);

  const handleLvChange = (l: Level) => {
    persist({ ...state, ['lv_' + id]: l });
  };

  const copyScript = async () => {
    if (!data) return;
    const text = data.t.replace(/\{[^|]+\|([^}]+)\}/g, (_, ph) => ph);
    await Clipboard.setStringAsync(text);
    if (Platform.OS !== 'web') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
    Alert.alert('복사됨', '스크립트가 클립보드에 복사됐어요.');
  };

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={C.em} />
      </View>
    );
  }

  if (!script) return null;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn} accessibilityLabel="뒤로 가기" accessibilityRole="button">
          <Text style={styles.backBtnText}>← 뒤로</Text>
        </TouchableOpacity>
        <Text style={styles.title} numberOfLines={1}>
          {script.em} {script.nm}
        </Text>
        <View style={styles.backBtn} />
      </View>

      {/* Level tabs */}
      <View style={styles.lvSection}>
        <View style={styles.lvRow}>
          {(['im', 'ih', 'al'] as Level[]).map((l) => {
            const active = lv === l;
            const col = LV_COLORS[l];
            return (
              <TouchableOpacity
                key={l}
                style={[
                  styles.lvTab,
                  active && { backgroundColor: col.bg, borderColor: col.border },
                ]}
                onPress={() => {
                  if (Platform.OS !== 'web') Haptics.selectionAsync();
                  handleLvChange(l);
                }}
              >
                <Text style={[styles.lvTabText, active && { color: col.text }]}>
                  {l.toUpperCase()}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Body */}
      <ScrollView contentContainerStyle={[styles.body, { paddingBottom: insets.bottom + 32 }]}>
        {/* Script block */}
        <View style={styles.scriptBlock}>
          <View style={styles.scriptLblRow}>
            <Text style={styles.scriptLbl}>📄 {lv.toUpperCase()} 모범 답변</Text>
            <TouchableOpacity onPress={copyScript} accessibilityLabel="스크립트 복사" accessibilityRole="button">
              <Text style={styles.copyBtn}>📋 복사</Text>
            </TouchableOpacity>
          </View>
          {data && <ScriptParser template={data.t} />}
        </View>

        {/* Key phrases */}
        {data && (
          <View style={styles.section}>
            <Text style={styles.sectionLbl}>핵심 표현 {data.p.length}개</Text>
            <View style={styles.chips}>
              {data.p.map((p, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={styles.chip}
                  onPress={async () => {
                    await Clipboard.setStringAsync(p);
                    if (Platform.OS !== 'web') {
                      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    }
                  }}
                >
                  <Text style={styles.chipText}>&ldquo;{p}&rdquo;</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Sample questions */}
        <View style={styles.section}>
          <Text style={styles.sectionLbl}>샘플 질문</Text>
          {script.qs.map((q, idx) => (
            <View key={idx} style={styles.qRow}>
              <Text style={styles.qNum}>Q{idx + 1}</Text>
              <Text style={styles.qText}>{q}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bg },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: C.bg },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: C.w,
    borderBottomWidth: 1,
    borderBottomColor: C.line,
  },
  backBtn: { minWidth: 56, paddingVertical: 4 },
  backBtnText: { fontSize: 14, fontWeight: '600', color: C.ink3 },
  title: { fontSize: 15, fontWeight: '700', color: C.ink, flex: 1, textAlign: 'center' },
  lvSection: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: C.w,
    borderBottomWidth: 1,
    borderBottomColor: C.line,
  },
  lvRow: { flexDirection: 'row', gap: 5 },
  lvTab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: C.line2,
    backgroundColor: C.bg,
    alignItems: 'center',
  },
  lvTabText: { fontSize: 12, fontWeight: '700', color: C.ink3 },
  body: { padding: 18 },
  scriptBlock: {
    backgroundColor: C.w,
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: C.line,
    marginBottom: 12,
  },
  scriptLblRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  scriptLbl: {
    fontSize: 10,
    fontWeight: '800',
    color: C.ink4,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  copyBtn: { fontSize: 12, fontWeight: '700', color: C.ink3 },
  section: { marginBottom: 14 },
  sectionLbl: {
    fontSize: 10,
    fontWeight: '800',
    color: C.ink4,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: 7,
  },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 5 },
  chip: {
    backgroundColor: C.w,
    borderWidth: 1,
    borderColor: C.line2,
    borderRadius: 7,
    paddingVertical: 4,
    paddingHorizontal: 9,
  },
  chipText: { fontSize: 12, color: C.ink3, fontStyle: 'italic' },
  qRow: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: C.bg,
    borderRadius: 9,
    padding: 10,
    marginBottom: 5,
  },
  qNum: { fontSize: 10, fontWeight: '800', color: C.ink4 },
  qText: { fontSize: 13, color: C.ink3, flex: 1, lineHeight: 20 },
});
