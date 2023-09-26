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

export default function Menu() {
  const renderItem = ({
    item,
  }: {
    item: { id: number; title: string; image: ImageSourcePropType };
  }) => <Card text={item.title} id={item.id} image={item.image} />;
  return (
    <View style={style.root}>
      <View style={{ padding: 10, paddingHorizontal: 24, width: "100%" }}>
        <SearchBar />
      </View>

      <FlatList
        indicatorStyle={"white"}
        data={DummyData}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={{}}
      />
    </View>
  );
}

const style = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
