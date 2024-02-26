import { useState, createContext, useContext } from "react";

function DropDown() {
    
}

export default DropDown;


//the name of this context will be DataContext
const DataContext = createContext({});

function Tab({ id, children }) {
  //extract the 'setActiveTabID` method from the DataContext state.
  const [, setActiveTabID] = useContext(DataContext);
  return (
    <div>
      <div onClick={() => setActiveTabID(id)}>{children}</div>
    </div>
  );
}
function TabPanel({ whenActive, children }) {
  //get the 'activeTabID' state from DataContext.
  const [activeTabID] = useContext(DataContext);
  return <div>{activeTabID === whenActive ? children : null}</div>;
}

function TabSwitcher(props) {
  const [activeTabID, setActiveTabID] = useState("a");
  //since this component will provide data to the child components, we will use DataContext.Provider
  return (
    <DataContext.Provider value={[activeTabID, setActiveTabID]}>
      {props.children}
    </DataContext.Provider>
  );
}

// export default TabSwitcher;
export { Tab, TabPanel, TabSwitcher };
