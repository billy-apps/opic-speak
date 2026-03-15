#!/usr/bin/env node
/**
 * Node 23 ESM 호환용 react-native-reanimated 패치.
 * npm install 후 자동 실행됩니다.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'node_modules', 'react-native-reanimated', 'lib', 'module');
if (!fs.existsSync(root)) return;

const patches = [
  {
    file: path.join(root, 'index.js'),
    from: "import * as Animated from './Animated';\nexport * from './reanimated2';",
    to: "import * as Animated from './Animated.js';\nexport * from './reanimated2/index.js';",
  },
  {
    file: path.join(root, 'Animated.js'),
    from: `export { createAnimatedComponent } from './createAnimatedComponent';
export { AnimatedText as Text } from './reanimated2/component/Text';
export { AnimatedView as View } from './reanimated2/component/View';
export { AnimatedScrollView as ScrollView } from './reanimated2/component/ScrollView';
export { AnimatedImage as Image } from './reanimated2/component/Image';
export { ReanimatedFlatList as FlatList } from './reanimated2/component/FlatList';
export { addWhitelistedNativeProps, addWhitelistedUIProps } from './ConfigHelper';`,
    to: `export { createAnimatedComponent } from './createAnimatedComponent/index.js';
export { AnimatedText as Text } from './reanimated2/component/Text.js';
export { AnimatedView as View } from './reanimated2/component/View.js';
export { AnimatedScrollView as ScrollView } from './reanimated2/component/ScrollView.js';
export { AnimatedImage as Image } from './reanimated2/component/Image.js';
export { ReanimatedFlatList as FlatList } from './reanimated2/component/FlatList.js';
export { addWhitelistedNativeProps, addWhitelistedUIProps } from './ConfigHelper.js';`,
  },
  {
    file: path.join(root, 'createAnimatedComponent', 'index.js'),
    from: "export { createAnimatedComponent } from './createAnimatedComponent';",
    to: "export { createAnimatedComponent } from './createAnimatedComponent.js';",
  },
];

for (const { file, from, to } of patches) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  const next = content.replace(from, to);
  if (next !== content) fs.writeFileSync(file, next);
}

// ExpoLinking 네이티브 모듈 오류 회피: expo-linking이 RN Linking 직접 사용
const linkingPath = path.join(__dirname, '..', 'node_modules', 'expo-linking', 'build', 'Linking.js');
if (fs.existsSync(linkingPath)) {
  let c = fs.readFileSync(linkingPath, 'utf8');
  const patched = c.replace(
    "import { Platform } from 'react-native';\nimport NativeLinking from './ExpoLinking';",
    "import { Linking as NativeLinking, Platform } from 'react-native';"
  );
  if (patched !== c) fs.writeFileSync(linkingPath, patched);
}
