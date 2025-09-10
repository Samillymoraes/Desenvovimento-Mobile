import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/Types/FilterStatus";
import { Item } from "@/components/Item";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

export function Home() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello, World!</Text> */}
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Entrar" />
        
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Item
            data={{ description: "3 Tomates", status: FilterStatus.PENDING }}
            onRemove={() => {}}
            onStatus={() => {}}
          />
          <Item
            data={{ description: "1 Pacote de Arroz", status: FilterStatus.DONE }}
            onRemove={() => {}}
            onStatus={() => {}}
          />
        </View>
      </View>
    </View>
  );
}
