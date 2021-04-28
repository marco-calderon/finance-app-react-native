import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBarContext } from './hooks/statusbar.context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>('light');

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBarContext.Provider value={[statusBarStyle, setStatusBarStyle]}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar style={statusBarStyle} />
        </StatusBarContext.Provider>
      </SafeAreaProvider>
    );
  }
}
