import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D0D0D",
    flex: 1,
    alignItems: "center",
    paddingTop: 120,
  },
  logo: {
    height: 34,
    width: 134,
  },
  form: {
    width: "100%",
    paddingHorizontal: 16,
    gap: 10,
    marginTop: 50,
    flexDirection: "row",
  },

  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#1A1A1A",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 24,
    paddingTop: 32,
    marginTop: 20,
  },

  countersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  counterTextCreated: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
  },
  counterTextDone: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
  },
  counterBadge: {
    backgroundColor: "#333333",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    minWidth: 25,
    alignItems: "center",
  },
  counterNumber: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "bold",
  },

  filters: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
  },

  taskList: {
    flex: 1,
    width: "100%",
  },

  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262626",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#333333",
    minHeight: 64,
  },
  checkbox: {
    padding: 4,
  },
  taskText: {
    flex: 1,
    color: "#F2F2F2",
    fontSize: 14,
    marginHorizontal: 8,
    lineHeight: 20,
  },
  taskTextDone: {
    color: "#808080",
    textDecorationLine: "line-through",
  },
  deleteButton: {
    padding: 4,
  },

  emptyContainer: {
    alignItems: "center",
    paddingVertical: 48,
    borderTopWidth: 1,
    borderTopColor: "#333333",
    marginTop: 20,
  },
  emptyTextBold: {
    color: "#808080",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  emptyText: {
    color: "#808080",
    fontSize: 14,
  },
  emptyIcon: {
  fontSize: 56,
  marginBottom: 16,
},
});
