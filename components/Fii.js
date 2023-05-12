import { View, Text, StyleSheet } from "react-native";

export default function Fii(props) {

  return (
    <View style={styles.container}>
      <View style={styles.containerFinance}>
        <Text style={styles.text}>{props.dados[props.nada].stock}</Text>
        <Text style={styles.text}>R$ {props.dados[props.nada].close}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  containerFinance: {
    marginTop: 50,
    borderRadius: 15,
    backgroundColor: "rgb(210, 210, 210)",
    width: 200,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
