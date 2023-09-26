import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageSourcePropType,
} from "react-native";
import Card from "../components/Menu/Card";
import { DummyData } from "../../data/dummyData";
import SearchBar from "../components/Menu/SearchBar";
import AnimatedScreen from "../components/Global/AnimatedScreen";

export default function Menu() {
  const renderItem = ({
    item,
  }: {
    item: { id: number; title: string; image: ImageSourcePropType };
  }) => <Card text={item.title} id={item.id} image={item.image} />;
  return (
    <AnimatedScreen style={style.root}>
      <View style={{ paddingTop: 16,paddingBottom:6, paddingHorizontal: 24, width: "100%" }}>
        <SearchBar />
      </View>

      <FlatList
    
        data={DummyData}
        renderItem={renderItem}
        numColumns={2}
        style={{ width: "100%" }}
        contentContainerStyle={{
          justifyContent: "center",
          paddingBottom:100,
          alignItems: "center",
        }}
      />
    </AnimatedScreen>
  );
}

const style = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
