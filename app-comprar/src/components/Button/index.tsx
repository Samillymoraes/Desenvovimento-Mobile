import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

export function Button({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.text}>Enviar</Text>
    </TouchableOpacity>
  );
}
