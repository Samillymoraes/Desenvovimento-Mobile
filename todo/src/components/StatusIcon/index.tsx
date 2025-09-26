import { FilterStatus } from "@/types/FilterStatus";
import { CircleCheck, CircleDashed } from "lucide-react-native";

export function StatusIcon({ status }: { status: FilterStatus }) {
  return status === FilterStatus.DONE ? (
    <CircleCheck
      size={18}
      color="#background: #4EA8DE;
"
    />
  ) : (
    <CircleDashed
      size={18}
      color="#background: #5E60CE;
"
    />
  );
}
