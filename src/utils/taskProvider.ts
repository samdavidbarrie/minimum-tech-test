
import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface TaskContextType {
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
}

export const TaskContext = createContext<TaskContextType | null>(null);

export const useTaskContext = () => {
  return useContext(TaskContext);
};