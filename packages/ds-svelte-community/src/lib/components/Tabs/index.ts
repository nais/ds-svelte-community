import Tab from "./Tab.svelte";
import TabList from "./TabList.svelte";
import TabPanel from "./TabPanel.svelte";
import { default as BaseTabs } from "./Tabs.svelte";

const Tabs = /* @__PURE__ */ Object.assign(BaseTabs, { Tab, List: TabList, Panel: TabPanel });

export { Tab, TabList, TabPanel, Tabs };
