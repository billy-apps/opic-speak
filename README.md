# OPIC SPEAK — React Native (Expo) iOS App

---

## 실행하는 법 (요약)

| 항목 | 상태 |
|------|------|
| 프로젝트 | Expo 51 + React Native 0.74 + expo-router |
| 스크립트 | `npm run start` / `npm run ios` / `npm run build` |
| 필수 환경 | **Mac**, **Xcode 15+**, **Node.js 18 또는 20** (Node 23은 미지원) |

### iOS 시뮬레이터로 실행 (4단계)

```bash
# 1. 프로젝트 폴더로 이동
cd opic-speak

# 2. 의존성 설치 (최초 1회)
npm install

# 3. 네이티브 폴더 생성 (최초 1회, ios/ android는 git에 없음)
npx expo prebuild

# 4. iOS 시뮬레이터 실행
npm run ios
```

또는 한 줄: `npm install && npx expo prebuild && npm run ios`

- Metro bundler가 뜨고 시뮬레이터가 자동으로 열립니다.
- 시뮬레이터가 안 열리면 터미널에서 **`i`** 키를 누르세요.
- **Node 23** 사용 중이면 `ERR_MODULE_NOT_FOUND` 등 오류가 납니다. → Node 18 또는 20 사용 필요 (예: `brew install node@20` 후 `export PATH="/opt/homebrew/opt/node@20/bin:$PATH"`).

---

## 준비물
- Mac + Xcode 15 이상
- Node.js **18 또는 20** (`node -v` 로 확인, 23은 비권장)
- Expo CLI는 `npx`로 자동 사용

---

## 1단계 — 의존성 설치

```bash
cd opic-speak
npm install
```

---

## 2단계 — 네이티브 폴더 생성 (최초 1회)

`ios/`, `android/` 폴더는 git에 포함되지 않습니다. `app.json` 기반으로 생성하세요.

```bash
npx expo prebuild
```

---

## 3단계 — iOS 시뮬레이터로 실행

```bash
npm run ios
```
또는 `npx expo start --ios`

처음 실행하면 Metro bundler가 뜨고, 자동으로 시뮬레이터가 열려요.
안 열리면 터미널에서 `i` 키를 눌러요.

---

## 4단계 — 실기기(iPhone)에서 테스트

1. App Store에서 **Expo Go** 앱 설치
2. `npx expo start` 실행
3. iPhone 카메라로 QR 코드 스캔

> ⚠️ Expo Go는 개발용. 앱스토어 배포는 아래 5단계 참고.

---

## 5단계 — 앱스토어 배포 (선택)

### EAS 설정
```bash
npm install -g eas-cli
eas login
eas build:configure
```

### iOS 빌드
```bash
eas build --platform ios
```

### 제출
```bash
eas submit --platform ios
```

> Apple Developer 계정 필요 (연 $99, https://developer.apple.com)

---

## 배포 전 체크리스트 (참고용)

배포 전에 아래 항목을 확인·수정하세요.

### 1. 앱 이름

| 위치 | 필드 | 용도 |
|------|------|------|
| `app.json` | `expo.name` | 홈 화면 아이콘 아래 표시 이름 |
| App Store Connect | 앱 정보 → 이름 | **앱스토어 검색/노출용** (최대 30자) |

- `app.json`의 `name`은 홈 화면용
- 앱스토어 검색 이름은 **App Store Connect**에서 별도 설정

### 2. 앱 아이콘

| 항목 | 경로 | 규격 |
|------|------|------|
| 설정 | `app.json` → `"icon": "./assets/icon.png"` | - |
| 파일 | `assets/icon.png` | **1024×1024** PNG, 투명 없음 |

- 아이콘 교체 후 `npx expo prebuild --clean` 실행 시 네이티브에 반영

### 3. 스플래시 화면

| 항목 | 경로 | 설명 |
|------|------|------|
| 배경색 | `app.json` → `splash.backgroundColor` | 현재 `#F5F7F3` |
| 이미지 | `app.json` → `splash.image` | (선택) `./assets/splash.png` |
| 파일 | `assets/splash.png` | 권장 1284×2778 |

```json
"splash": {
  "image": "./assets/splash.png",
  "resizeMode": "contain",
  "backgroundColor": "#F5F7F3"
}
```

### 4. 번들 ID (bundleIdentifier)

- **위치**: `app.json` → `expo.ios.bundleIdentifier`
- **현재**: `com.yourname.opicspeak` (플레이스홀더)
- **변경**: 실제 사용할 ID로 수정 (예: `com.회사명.opicspeak`)

### 5. 배포 순서 요약

1. `assets/icon.png` 1024×1024 PNG로 교체
2. (선택) `assets/splash.png` 추가 후 `app.json` splash 설정
3. `bundleIdentifier` 수정
4. `eas build:configure` → `eas.json` 생성
5. `eas build --platform ios`
6. App Store Connect에서 앱 생성 후 `eas submit`

---

## 프로젝트 구조

```
opic-speak/
├── app/
│   ├── _layout.tsx          # 루트 레이아웃 (GestureHandler + SafeArea)
│   └── (tabs)/
│       ├── _layout.tsx      # 하단 탭 네비게이션
│       ├── index.tsx        # 📝 스크립트 탭
│       └── info.tsx         # 📋 정보 탭 (서베이 + 공략법)
├── src/
│   ├── theme.ts             # 컬러 / 타입 상수
│   ├── components/
│   │   ├── FillInput.tsx    # 자동 너비 인풋
│   │   ├── ScriptParser.tsx # {key|placeholder} 파싱
│   │   └── DetailSheet.tsx   # 바텀 시트 상세 화면
│   ├── data/
│   │   ├── scripts.ts       # 스크립트 데이터 (여기에 추가하면 됨)
│   │   └── survey.ts        # 서베이 + 공략법 데이터
│   ├── screens/
│   │   ├── ScriptsScreen.tsx
│   │   └── InfoScreen.tsx   # 서베이 + 공략법 통합
│   └── utils/
│       └── storage.ts       # AsyncStorage 래퍼
└── assets/                  # 아이콘·스플래시 이미지 (교체 필요)
```

---

## 스크립트 추가하는 법

`src/data/scripts.ts` 의 `SCRIPTS` 배열에 아래 형식으로 추가:

```typescript
{
  id: 'my_topic',       // 고유 ID
  cat: '경험',  // 카테고리: 이 카테고리 밑에 스크립트 멀티로 표시 (CATS)
  em: '🎸',             // 이모지
  nm: '악기 연주',       // 표시 이름
  tag: '고빈출',         // 태그 텍스트
  tc: '#1A7A4A',        // 태그 글자색
  tb: 'rgba(26,122,74,0.09)', // 태그 배경색
  qs: [
    'Tell me about playing a musical instrument.',
    // ... 질문들
  ],
  im: {
    t: "I play {instrument|the guitar}. I started {years|two years} ago...",
    p: ["I started ~ years ago", "it helps me relax"],
  },
  ih: { t: "...", p: [...] },
  al: { t: "...", p: [...] },
}
```

`{key|placeholder}` 형식으로 쓰면 자동으로 편집 가능한 인풋으로 변환돼요.

---

## 앱 아이콘 교체

`assets/icon.png` 를 1024×1024 PNG로 교체하면 자동 적용돼요.

---

## 문제 해결

| 증상 | 해결 |
|---|---|
| Metro bundler 안 켜짐 | `npx expo start --clear` |
| 시뮬레이터 안 열림 | Xcode → Simulator 앱 먼저 실행 후 재시도 |
| 타입 에러 | `npm install` 다시 실행 |
| bottom sheet 안 보임 | `npx expo install react-native-reanimated` |
