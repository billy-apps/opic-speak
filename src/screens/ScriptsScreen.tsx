import React, { useCallback, useEffect, useState } from 'react';
import {
  View, Text, TouchableOpacity,
  FlatList, StyleSheet, StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { SCRIPTS, COLLECTIONS, Script } from '../data/scripts';
import DetailSheet from '../components/DetailSheet';
import { C, Level, LV_COLORS } from '../theme';
import { loadState, saveState, AppState } from '../utils/storage';

export default function ScriptsScreen() {
  const insets = useSafeAreaInsets();
  const [state, setState] = useState<AppState>({});
  const [curLv, setCurLv] = useState<Level>('ih');
  const [selectedCollectionId, setSelectedCollectionId] = useState<string | null>(null);
  const [openScript, setOpenScript] = useState<Script | null>(null);

  useEffect(() => {
    loadState().then(setState);
  }, []);

  const persist = useCallback((next: AppState) => {
    setState(next);
    saveState(next);
  }, []);

  const scriptsInCollection = selectedCollectionId
    ? SCRIPTS.filter((s) => s.collectionId === selectedCollectionId)
    : [];

  const handleOpen = (sc: Script) => {
    setOpenScript(sc);
  };

  const detailLv: Level = openScript
    ? ((state['lv_' + openScript.id] as Level) || curLv)
    : 'ih';

  const detailValues: Record<string, string> =
    openScript
      ? (state['inp_' + openScript.id + '_' + detailLv] || {})
      : {};

  const handleLvChange = (lv: Level) => {
    if (!openScript) return;
    persist({ ...state, ['lv_' + openScript.id]: lv });
  };

  const handleValueChange = (key: string, val: string) => {
    if (!openScript) return;
    const lv = detailLv;
    const prev = state['inp_' + openScript.id + '_' + lv] || {};
    persist({
      ...state,
      ['inp_' + openScript.id + '_' + lv]: { ...prev, [key]: val },
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={[styles.container, { paddingTop: insets.top }]}>

        {/* Top bar */}
        <View style={styles.topBar}>
          {selectedCollectionId ? (
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => setSelectedCollectionId(null)}
            >
              <Text style={styles.backBtnText}>← {selectedCollectionId}</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.logo}>
              <View style={styles.logoMark}><Text style={styles.logoMarkText}>OS</Text></View>
              <Text style={styles.logoText}>OPIC <Text style={styles.logoEm}>SPEAK</Text></Text>
            </View>
          )}
          <Text style={styles.count}>
            {selectedCollectionId ? `${scriptsInCollection.length}개 스크립트` : `${COLLECTIONS.length}개 묶음`}
          </Text>
        </View>

        {/* 기본 난이도 (스크립트 열 때 적용) */}
        <View style={styles.lvSection}>
          <Text style={styles.lvLabel}>기본 난이도</Text>
          <View style={styles.lvRow}>
            {(['im', 'ih', 'al'] as Level[]).map((lv) => {
              const active = curLv === lv;
              const col = LV_COLORS[lv];
              return (
                <TouchableOpacity
                  key={lv}
                  style={[
                    styles.lvBtn,
                    active && { backgroundColor: col.bg, borderColor: col.border },
                  ]}
                  onPress={() => {
                    Haptics.selectionAsync();
                    setCurLv(lv);
                  }}
                >
                  <Text style={[styles.lvBtnText, active && { color: col.text }]}>
                    {lv.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <Text style={styles.lvHint}>스크립트 열 때 적용됨</Text>
        </View>

        {selectedCollectionId === null ? (
          /* 1단계: 콜렉션 목록 */
          <FlatList
            key="collection-list"
            data={COLLECTIONS}
            keyExtractor={(c) => c}
            contentContainerStyle={[styles.grid, { paddingBottom: insets.bottom + 80 }]}
            renderItem={({ item: coll }) => {
              const count = SCRIPTS.filter((s) => s.collectionId === coll).length;
              return (
                <TouchableOpacity
                  style={styles.collectionCard}
                  onPress={() => setSelectedCollectionId(coll)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.collectionCardTitle}>{coll}</Text>
                  <Text style={styles.collectionCardCount}>스크립트 {count}개</Text>
                </TouchableOpacity>
              );
            }}
          />
        ) : (
          /* 2단계: 스크립트 목록 (1줄에 1개) */
          <FlatList
            key={`script-list-${selectedCollectionId}`}
            data={scriptsInCollection}
            keyExtractor={(s) => s.id}
            contentContainerStyle={[styles.grid, { paddingBottom: insets.bottom + 80 }]}
            renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => handleOpen(item)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.cardEm}>{item.em}</Text>
                  <Text style={styles.cardNm}>{item.nm}</Text>
                  <Text style={styles.cardQ}>Q {(item.qs || []).length}개</Text>
                </TouchableOpacity>
            )}
          />
        )}
      </View>

      {/* Detail bottom sheet */}
      {openScript && (
        <DetailSheet
          script={openScript}
          level={detailLv}
          values={detailValues}
          onClose={() => setOpenScript(null)}
          onLevelChange={handleLvChange}
          onValueChange={handleValueChange}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bg },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  logo: { flexDirection: 'row', alignItems: 'center', gap: 7 },
  logoMark: {
    width: 30, height: 30, borderRadius: 9,
    backgroundColor: C.em,
    justifyContent: 'center', alignItems: 'center',
  },
  logoMarkText: { fontSize: 13, fontWeight: '800', color: '#fff' },
  logoText: { fontSize: 16, fontWeight: '600', color: C.ink },
  logoEm: { color: C.em, fontStyle: 'italic' },
  count: { fontSize: 11, color: C.ink4, fontWeight: '600' },
  backBtn: { paddingVertical: 4, paddingRight: 8 },
  backBtnText: { fontSize: 15, fontWeight: '600', color: C.ink },
  lvSection: { paddingHorizontal: 18, paddingBottom: 14 },
  lvLabel: { fontSize: 12, fontWeight: '600', color: C.ink3, marginBottom: 6 },
  lvRow: { flexDirection: 'row', gap: 5 },
  lvHint: { fontSize: 10, color: C.ink4, marginTop: 4 },
  lvBtn: {
    flex: 1, paddingVertical: 8, borderRadius: 10,
    borderWidth: 1.5, borderColor: C.line2,
    backgroundColor: C.w, alignItems: 'center',
  },
  lvBtnText: { fontSize: 12, fontWeight: '700', color: C.ink3 },
  grid: { paddingHorizontal: 18 },
  collectionCard: {
    backgroundColor: C.w,
    borderWidth: 1.5, borderColor: C.line,
    borderRadius: 15, padding: 16, marginBottom: 10,
  },
  collectionCardTitle: { fontSize: 16, fontWeight: '700', color: C.ink, marginBottom: 4 },
  collectionCardCount: { fontSize: 12, color: C.ink4 },
  card: {
    backgroundColor: C.w,
    borderWidth: 1.5, borderColor: C.line,
    borderRadius: 15, padding: 13,
    position: 'relative',
  },
  cardEm: { fontSize: 22, marginBottom: 6 },
  cardNm: { fontSize: 12, fontWeight: '700', color: C.ink, marginBottom: 4, lineHeight: 18 },
  cardQ: { fontSize: 10, color: C.ink4 },
});
