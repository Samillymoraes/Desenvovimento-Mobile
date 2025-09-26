import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./style";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { useState } from "react";
import { itemsStorage, ItemsStorage } from "@/storage/itemsStorage";

export function Home() {""
  const [filter, setFilter] = useState(FilterStatus.PENDING);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState<ItemsStorage[]>([]);

  async function handleAdd() {
    if (!description.trim()) {
      return Alert.alert("Adicionar", "Informe a descrição para adicionar.");
    }

    const newItem = {
      id: Math.random().toString().substring(2),
      description,
      status: FilterStatus.PENDING,
    };

    await itemsStorage.add(newItem);
    await itemsByStatus();

    Alert.alert("Adicionado", `Adicionado ${description}`);
    setFilter(FilterStatus.PENDING);
    setDescription("");
  }

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/Logo.png")} style={styles.logo} />
      <View style={styles.form}>
        <Input placeholder="Adicione uma nova tarefa" />
        <Button />
      </View>
    </View>
  );
}
function itemsByStatus() {
  throw new Error("Function not implemented.");
}
