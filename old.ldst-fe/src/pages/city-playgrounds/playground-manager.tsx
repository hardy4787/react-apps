import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function PlaygroundManager() {
  const [value, setValue] = React.useState(0);
  // TODO:
  // get current date, e.g: const currentDate = new Date().toLocaleString("en-US");
  // get data for today and 6 days after

  const getWeek = () => {
    const baseDate = new Date();
    var weekDays = [];
    for (let i = 0; i < 7; i++) {
      weekDays.push(
        baseDate.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "long",
          weekday: "long",
        })
      );
      baseDate.setDate(baseDate.getDate() + 1);
    }
    return weekDays;
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box display="flex" sx={{ bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable auto tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        {getWeek().map((d) => (
          <Tab label={d} wrapped />
        ))}
      </Tabs>
    </Box>
  );
}
