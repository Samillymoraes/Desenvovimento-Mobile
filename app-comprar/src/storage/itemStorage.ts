import AsyncStorage from "@react-native-async-storage/async-storage";
import { FilterStatus } from "@/Types/FilterStatus";

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
    throw new Error("Não foi possível carregar os itens");
  }
}

async function getByStatus(status: FilterStatus): Promise<ItemsStorage[]> {
  const items = await get();
  return items.filter((item) => {
    item.status === status;
  });
}

async function save(items: ItemsStorage[]): Promise<void> {
  try {
    await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    throw new Error("Não foi possível salvar o item");
  }
}

async function add(newItem: ItemsStorage): Promise<ItemsStorage[]> {
  const items = await get();
  const updateItems = [...items, newItem];
  await save(updateItems);

  return updateItems;
}

async function remove(id: string): Promise<void> {
  const items = await get();
  const updateItems = items.filter((item) => {
    item.id !== id;
  });
  await save(updateItems);
}

export const itemStorage = {
  get,
  getByStatus,
  add,
  remove,
  save,
};
