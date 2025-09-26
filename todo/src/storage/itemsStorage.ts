import AsyncStorage from "@react-native-async-storage/async-storage";
import { FilterStatus } from "@/types/FilterStatus";

const ITEMS_STORAGE_KEY = "@comprar:items";

export type ItemsStorage = {
  id: string;
  status: FilterStatus;
  description: string;
};

async function get(): Promise<ItemsStorage[]> {
  try {
    const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY);

    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw new Error("ITEMS_GET: " + error);
  }
}
//Adicionar nova tarefa
async function add(newItem: ItemsStorage): Promise<ItemsStorage[]> {
  const items = await get();
  const updatedItems = [...items, newItem];
  await save(updatedItems);

  return updatedItems;
}

//Remover uma tarefa da listagem
async function clear(): Promise<void> {
  try {
    await AsyncStorage.removeItem(ITEMS_STORAGE_KEY);
  } catch (error) {
    throw new Error("ITEMS_CLEAR: " + error);
  }
}

//Salvar a tarefa
async function save(items: ItemsStorage[]): Promise<void> {
  try {
    await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    throw new Error("ITEMS_SAVE: " + error);
  }
}

//Alterar o status da tarefa
async function toggleStatus(id: string): Promise<void> {
  const items = await get();

  const updatedItems = items.map((item) =>
    item.id === id
      ? {
          ...item,
          status:
            item.status === FilterStatus.PENDING
              ? FilterStatus.DONE
              : FilterStatus.PENDING,
        }
      : item
  );

  await save(updatedItems);
}

export const itemsStorage = {
  get,
  add,
  clear,
  toggleStatus,
};
