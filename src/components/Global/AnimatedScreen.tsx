import { ReactNode, useCallback, } from "react";

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import {

  View,
  ViewStyle,
} from "react-native";

export default function AnimatedScreen({
  children,
  style,
}: {
  children: ReactNode;
  style?: ViewStyle;
}) {
  const opacity = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(opacity.value, [0, 1], [0, 1]),
    };
  });

  useFocusEffect(
    useCallback(() => {
      opacity.value = withSpring(1, {
        stiffness: 50,
        overshootClamping: true,
        restSpeedThreshold: 0.01,
        restDisplacementThreshold: 0.01,
      });

      return () => {
        opacity.value = withTiming(0, { duration: 400 });
      };
    }, [opacity])
  );
  return (
    <View style={{ flex: 1, backgroundColor: "transparent" }}>
      <Animated.View
        style={[
          { flex: 1, backgroundColor: "transparent" },
          style,
          animatedStyle,
        ]}
      >
        {children}
      </Animated.View>
    </View>
  );
}
