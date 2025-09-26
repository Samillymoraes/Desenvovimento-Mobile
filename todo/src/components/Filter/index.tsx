import { FilterStatus } from "@/types/FilterStatus";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { StatusIcon } from "../StatusIcon";

type Props = TouchableOpacityProps & {
  status: FilterStatus;
  isActive: boolean;
};

export function Filter({ status, isActive, ...rest }: Props) {
  const getTitle = () => {
    switch (status) {
      case FilterStatus.ALL: return "Todos";
      case FilterStatus.PENDING: return "Pendentes";
      case FilterStatus.DONE: return "Concluídos";
      default: return "Todos";
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.container, { opacity: isActive ? 1 : 0.5 }]} 
      activeOpacity={0.8}
      {...rest} 
    >
      <StatusIcon status={status} />
      <Text style={styles.title}>{getTitle()}</Text>
    </TouchableOpacity>
  );
}