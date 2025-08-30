import React, { useState } from "react";
import { View } from "react-native";
import CounterCard from "./components/CounterCard";
import { useThemeStyles } from "./hooks/useThemeStyles";

export default function App() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const styles = useThemeStyles(isDark);

  const handleIncrement = () => {
    if (count < 10) setCount(count + 1);
  };

  const handleReset = () => setCount(0);

  const handleToggleTheme = () => setIsDark(!isDark);

  return (
    <View style={styles.container}>
      <CounterCard
        count={count}
        onIncrement={handleIncrement}
        onReset={handleReset}
        onToggleTheme={handleToggleTheme}
        styles={styles}
      />
    </View>
  );
}
