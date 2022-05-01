import React from "react";
import UserMinerNodeForceGraph from "./UserMinerNodeForceGraph";
import {Graph} from "react-d3-graph"


const formatData = (data) => ({
  nodes: data.map(val => ({
    id: val.index,
    symbolType: "circle",
    fx: val.fx,
    fy: val.fy
  })),
  links: data.map(val => ({
    source: val.edgeSource,
    target: val.edgeTarget
  }))
})
const config = {
  // collapsible: true,
  height: 500,
  width: 600,
  // height: window.innerHeight,
  // width: window.innerWidth,
  nodeHighlightBehavior: true,
  node: {
    color: "blue",
    size: 50,
    // fontSize: 12,
    highlightStrokeColor: "blue",
  },
  link: {
    highlightColor: "lightblue",
  },
};

export const Block = ({data}) => {
//   const [blockData] = useState(props);
// console.count("Block")
const formatedData = formatData(data)

// console.log("Block data", data);
console.log("Formated Data", formatedData);
  
  return (
    <div style={{width:"700px", height:"550px"}}>
      <h1>Test</h1>
      <Graph
        id="Block-Graph"
        data={formatedData}
        config={config}
      />
    </div>
  );
};

export default Block;
