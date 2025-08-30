import React from "react";
import { View, Text, Pressable } from "react-native";

interface Props {
  count: number;
  onIncrement: () => void;
  onReset: () => void;
  onToggleTheme: () => void;
  styles: ReturnType<typeof import("../hooks/useThemeStyles").useThemeStyles>;
}

export default function CounterCard({
  count,
  onIncrement,
  onReset,
  onToggleTheme,
  styles,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.counter}>{count}</Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            opacity: pressed ? 0.6 : 1,
            backgroundColor: count >= 10 ? "#aaa" : styles.button.backgroundColor,
          },
        ]}
        onPress={onIncrement}
        disabled={count >= 10}
      >
        <Text style={styles.buttonText}>+1</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [styles.button, { opacity: pressed ? 0.6 : 1 }]}
        onPress={onReset}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [styles.button, { opacity: pressed ? 0.6 : 1 }]}
        onPress={onToggleTheme}
      >
        <Text style={styles.buttonText}>Toggle Tema</Text>
      </Pressable>

      {count >= 10 && (
        <Text style={styles.warning}>Máximo alcanzado (10)</Text>
      )}
    </View>
  );
}
