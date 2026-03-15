import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { C } from '../../src/theme';

const TAB_ICONS = {
  index: { outline: 'document-text-outline' as const, solid: 'document-text' as const },
  info: { outline: 'information-circle-outline' as const, solid: 'information-circle' as const },
};

function TabIcon({
  name,
  focused,
  color,
}: {
  name: keyof typeof TAB_ICONS;
  focused: boolean;
  color: string;
}) {
  const key = focused ? 'solid' : 'outline';
  return (
    <Ionicons name={TAB_ICONS[name][key]} size={22} color={color} />
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: C.em,
        tabBarInactiveTintColor: C.ink4,
        tabBarStyle: {
          backgroundColor: 'rgba(245,247,243,0.97)',
          borderTopColor: C.line,
          borderTopWidth: 1,
          height: 64,
          paddingBottom: 8,
          paddingTop: 4,
        },
        tabBarLabelStyle: {
          fontSize: 9,
          fontWeight: '700',
          letterSpacing: 0.5,
          textTransform: 'uppercase',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '스크립트',
          tabBarIcon: ({ focused, color }) => <TabIcon name="index" focused={focused} color={color} />,
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: '정보',
          tabBarIcon: ({ focused, color }) => <TabIcon name="info" focused={focused} color={color} />,
        }}
      />
    </Tabs>
  );
}
