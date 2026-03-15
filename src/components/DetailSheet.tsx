import React, { useCallback, useMemo, useRef } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Share, Alert,
} from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import * as Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';
import { Script, ScriptLevel } from '../data/scripts';
import ScriptParser from './ScriptParser';
import { C, LV_COLORS, Level } from '../theme';

interface Props {
  script: Script | null;
  level: Level;
  values: Record<string, string>;   // saved fill-in values
  onClose: () => void;
  onLevelChange: (lv: Level) => void;
  onValueChange: (key: string, val: string) => void;
}

export default function DetailSheet({
  script, level, values, onClose, onLevelChange, onValueChange,
}: Props) {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['92%'], []);

  const lv = (script?.[level] ? level : 'ih') as Level;
  const data: ScriptLevel | undefined = script?.[lv];

  const handleClose = useCallback(() => {
    sheetRef.current?.close();
    // onClose는 BottomSheet onClose(애니메이션 완료 후)에서 호출됨
  }, []);

  const copyScript = async () => {
    if (!data || !script) return;
    const filled = data.t.replace(
      /\{([^|]+)\|([^}]+)\}/g,
      (_, key, ph) => values[key] || ph
    );
    await Clipboard.setStringAsync(filled);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    Alert.alert('복사됨', '스크립트가 클립보드에 복사됐어요.');
  };

  const resetValues = () => {
    if (!script || !data) return;
    const regex = /\{([^|]+)\|([^}]+)\}/g;
    let match;
    while ((match = regex.exec(data.t)) !== null) {
      onValueChange(match[1], '');
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  if (!script) return null;

  return (
    <BottomSheet
      ref={sheetRef}
      index={0}
      snapPoints={snapPoints}
      onClose={onClose}
      enablePanDownToClose
      backgroundStyle={styles.sheetBg}
      handleIndicatorStyle={styles.handle}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.title} numberOfLines={1}>
            {script.em} {script.nm}
          </Text>
          <TouchableOpacity onPress={handleClose} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
            <Text style={styles.closeBtn}>닫기</Text>
          </TouchableOpacity>
        </View>
        {/* Level tabs */}
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
                onPress={() => onLevelChange(l)}
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
      <BottomSheetScrollView
        contentContainerStyle={styles.body}
        keyboardShouldPersistTaps="handled"
      >
        {/* Script text block */}
        <View style={styles.scriptBlock}>
          <View style={styles.scriptLblRow}>
            <Text style={styles.scriptLbl}>📄 {lv.toUpperCase()} 모범 답변</Text>
            <Text style={styles.scriptHint}>빈칸을 채워보세요 ✏️</Text>
          </View>
          <View style={styles.scriptText}>
            {data && (
              <ScriptParser
                template={data.t}
                values={values}
                onChange={onValueChange}
              />
            )}
          </View>
          <View style={styles.btnRow}>
            <TouchableOpacity style={styles.btnGhost} onPress={copyScript}>
              <Text style={styles.btnGhostText}>📋 복사</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnGhost} onPress={resetValues}>
              <Text style={styles.btnGhostText}>↩ 초기화</Text>
            </TouchableOpacity>
          </View>
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
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
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
      </BottomSheetScrollView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  sheetBg: { backgroundColor: C.bg },
  handle: { backgroundColor: C.bg3, width: 36 },
  header: {
    paddingHorizontal: 18,
    paddingTop: 8,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: C.line,
    backgroundColor: C.w,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  title: { fontSize: 15, fontWeight: '700', color: C.ink, flex: 1, marginRight: 12 },
  closeBtn: { fontSize: 14, fontWeight: '600', color: C.ink3 },
  lvRow: { flexDirection: 'row', gap: 5 },
  lvTab: {
    paddingVertical: 5,
    paddingHorizontal: 13,
    borderRadius: 99,
    borderWidth: 1.5,
    borderColor: C.line2,
    backgroundColor: C.bg,
  },
  lvTabText: { fontSize: 11, fontWeight: '700', color: C.ink3 },
  body: { padding: 18, paddingBottom: 60 },
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
  scriptHint: { fontSize: 10, color: C.ink5 },
  scriptText: {},
  btnRow: { flexDirection: 'row', gap: 7, marginTop: 11 },
  btnGhost: {
    paddingVertical: 5,
    paddingHorizontal: 11,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: C.line2,
  },
  btnGhostText: { fontSize: 12, fontWeight: '700', color: C.ink3 },
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
