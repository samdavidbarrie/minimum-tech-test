import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
  ReactNode,
} from "react";

export interface TabFile {
  file: File;
  tabIndex: number;
}

interface TaskContextType {
  tabFiles: TabFile[];
  setTabFiles: Dispatch<SetStateAction<TabFile[]>>;
  addFile: (file: File, tabIndex: number) => void;
  tabIndex: number;
  setTabIndex: Dispatch<SetStateAction<number>>;
  error: string | null;
  setError: Dispatch<SetStateAction<string | null>>;
}

export const TaskContext = createContext<TaskContextType | null>(null);

export const useTaskContext = () => {
  return useContext(TaskContext);
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tabFiles, setTabFiles] = useState<TabFile[]>([]);
  const [tabIndex, setTabIndex] = useState<number>(0);

  const addFile = (file: File, tabIndex: number) => {
    setTabFiles((prevFiles) => [...prevFiles, { file, tabIndex }]);
  };

  const [error, setError] = useState<string | null>(null);

  return (
    <TaskContext.Provider
      value={{
        tabFiles,
        setTabFiles,
        addFile,
        tabIndex,
        setTabIndex,
        error,
        setError,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
