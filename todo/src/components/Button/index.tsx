import { Image, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "@/components/Button/style";


export function Button({ ...rest }) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      <Image source={require("@/assets/plus.png")}></Image>
    </TouchableOpacity>
  );
}
