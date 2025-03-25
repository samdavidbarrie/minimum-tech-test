import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TemplateDownloadComponent from "../components/templateDownloadComponent";
import { useTaskContext } from "../utils/taskProvider";
import FileUploadComponent from "../components/fileUploadComponent";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabContainer() {
  const taskContext = useTaskContext();
  const tabIndex = taskContext?.tabIndex ?? 0;
  const setTabIndex = taskContext?.setTabIndex ?? (() => {});

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const tabData = [
    { label: "Fuel usage", downloadLabel: "download fuel usage template" },
    {
      label: "Electricity usage",
      downloadLabel: "download electricity usage template",
    },
    // Add more tab data here as needed
  ];

  const tabs = tabData.map((tab, index) => ({
    label: tab.label,
    content: (
      <>
        <TemplateDownloadComponent downloadLabel={tab.downloadLabel} />
        <FileUploadComponent tabIndex={index} />
      </>
    ),
  }));

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tabIndex} onChange={handleChange} aria-label="tabs">
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <CustomTabPanel key={index} value={tabIndex} index={index}>
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
}

export default TabContainer;
