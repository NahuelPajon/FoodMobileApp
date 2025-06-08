import { Text, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MenuList from "../components/MenuList";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <MenuList />
      <Footer />
    </View>
  );
}
