import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
  ImageSourcePropType,
} from "react-native";
import React, { useState } from "react";
import Card from "./Card";
import { DummyData } from "../../../data/dummyData";
import { Colors } from "../../colors";

const { width } = Dimensions.get("screen");
console.log("🚀 ~ file: CardList.tsx:15 ~ width:", width);
export default function CardList({ image }: { image: ImageSourcePropType }) {

  const [page, setPage] = useState(0);
  const renderItem = () => {
    return <Card imageUri={image} />;
  };
  const renderCircle = ({ item }: { item: number }) => {
    return (
      <View
        style={{
          width: 8,
          height: 8,
          backgroundColor: item === page ? Colors.primary : Colors.borderColor,
          borderRadius: 9999,
        }}
      />
    );
  };
  return (
    <View style={{ width: "100%", gap: 24, alignItems: "center" }}>
      <FlatList
        contentContainerStyle={{}}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const x = e.nativeEvent.contentOffset.x;

          if (x == 0) {
            setPage(0);
          }

          const threshold = width - 48;

          const newPage = Math.round(x / threshold);

          if (newPage !== page) {
            setPage(newPage);
          }
        }}
        data={[0, 1, 2, 3]}
        renderItem={renderItem}
        horizontal={true}
      />
      <FlatList
        horizontal={true}
        contentContainerStyle={{ gap: 8 }}
        data={[0, 1, 2, 3]}
        renderItem={renderCircle}
      />
    </View>
  );
}
