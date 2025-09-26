import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CheckCircle, Circle, Trash2 } from "lucide-react-native";
import { styles } from "@/app/Home/style";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { useState, useEffect } from "react";
import { itemsStorage, ItemsStorage } from "@/storage/itemsStorage";

export function Home() {
  const [filter, setFilter] = useState<FilterStatus>(FilterStatus.ALL);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState<ItemsStorage[]>([]);

  async function loadItems() {
    try {
      const storedItems = await itemsStorage.get();
      const filteredItems = storedItems.filter((item) => {
        if (filter === FilterStatus.ALL) return true;
        return item.status === filter;
      });
      setItems(filteredItems);
    } catch (error) {
      console.error("Erro ao carregar items:", error);
    }
  }

  async function handleAdd() {
    if (!description.trim()) {
      return Alert.alert("Adicionar", "Informe a descrição para adicionar.");
    }

    const newItem = {
      id: Math.random().toString().substring(2),
      description: description.trim(),
      status: FilterStatus.PENDING,
    };

    await itemsStorage.add(newItem);
    await loadItems();
    setDescription("");
  }

  async function handleToggleStatus(id: string) {
    await itemsStorage.toggleStatus(id);
    await loadItems();
  }

  async function handleRemove(id: string, description: string) {
    Alert.alert("Remover", `Deseja remover "${description}"?`, [
      { text: "Não", style: "cancel" },
      {
        text: "Sim",
        onPress: async () => {
          await itemsStorage.remove(id);
          await loadItems();
        },
      },
    ]);
  }

  const createdCount = items.length;
  const doneCount = items.filter(
    (item) => item.status === FilterStatus.DONE
  ).length;

  useEffect(() => {
    loadItems();
  }, [filter]);

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/Logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input
          placeholder="Adicione uma nova tarefa"
          value={description}
          onChangeText={setDescription}
          onSubmitEditing={handleAdd}
        />
        <Button onPress={handleAdd} />
      </View>

      <View style={styles.content}>
        <View style={styles.countersContainer}>
          <View style={styles.counter}>
            <Text style={styles.counterTextCreated}>Criadas</Text>
            <View style={styles.counterBadge}>
              <Text style={styles.counterNumber}>{createdCount}</Text>
            </View>
          </View>

          <View style={styles.counter}>
            <Text style={styles.counterTextDone}>Concluídas</Text>
            <View style={styles.counterBadge}>
              <Text style={styles.counterNumber}>{doneCount}</Text>
            </View>
          </View>
        </View>

        <View style={styles.filters}>
          <Filter
            status={FilterStatus.ALL}
            isActive={filter === FilterStatus.ALL}
            onPress={() => setFilter(FilterStatus.ALL)}
          />
          <Filter
            status={FilterStatus.PENDING}
            isActive={filter === FilterStatus.PENDING}
            onPress={() => setFilter(FilterStatus.PENDING)}
          />
          <Filter
            status={FilterStatus.DONE}
            isActive={filter === FilterStatus.DONE}
            onPress={() => setFilter(FilterStatus.DONE)}
          />
        </View>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          style={styles.taskList}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => handleToggleStatus(item.id)}
              >
                {item.status === FilterStatus.DONE ? (
                  <CheckCircle size={24} color="#5E60CE" fill="#5E60CE" />
                ) : (
                  <Circle size={24} color="#4EA8DE" />
                )}
              </TouchableOpacity>

              <Text
                style={[
                  styles.taskText,
                  item.status === FilterStatus.DONE && styles.taskTextDone,
                ]}
              >
                {item.description}
              </Text>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleRemove(item.id, item.description)}
              >
                <Trash2 size={20} color="#808080" />
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyIcon}>📝</Text>
              <Text style={styles.emptyTextBold}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          }
        />
      </View>
    </View>
  );
}
