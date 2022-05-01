import React, { useEffect, useState, useRef } from "react";
import { forceLink, forceManyBody, forceSimulation } from "d3-force";


// import React, { useEffect, useState, useRef } from "react";
// import { forceLink, forceManyBody, forceSimulation } from "d3-force";

// export const UserMinerNodeForceGraph = (props) => {
//   console.count("Graph");

//   const rootRef = useRef();
//   const [loading, setLoading] = useState();
//   const [nodes, setNodes] = useState([]);
//   //   const [blockData]
//   console.log("Force props1", props.blockData);
//   console.log("Force props2", props);

//   useEffect(() => {
//     setLoading(true);
//     if (props) {
//       const nodes = props.blockData.map((x, i) => {
//         return { index: i };
//       });
//       console.log("Force nodes", nodes);
//       const linkNodes = props.blockData
//         .filter((x) => typeof x.merklePath === "number")
//         .map((x) => {
//           return {
//             source: x.merklePath,
//             target: props.blockData.indexOf(x),
//           };
//         });

//       const buildSim = forceSimulation(nodes)
//         .force("linkNodes", forceLink(linkNodes))
//         .force("charge", forceManyBody());

//       buildSim.on("tick", () => {
//         setNodes([...buildSim.nodes()]);
//       });

//       buildSim.on("end", () => {
//         setNodes([...buildSim.nodes()]);
//           setLoading(false);
//       });
//       return () => {
//         buildSim.stop();
//       };
//     }
//   }, [props]);

//   return (
//     <>
//       {props.blockData && (
//         <svg
//           height="500px"
//           width="500px"
//           ref={rootRef}
//           style={{ border: "1px solid #000" }}
//           viewBox={getViewBox(nodes)}
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           {props.blockData
//             .filter((x) => typeof x.merklePath === "number")
//             .map((x, i) => {
//               const child = nodes.find(
//                 (y) => y.index === props.blockData.indexOf(x)
//               );
//               const rootNode = nodes.find((y) => y.index === x.rootNode);
//               if (child && rootNode) {
//                 return (
//                   <line
//                     key={i}
//                     x1={child.x}
//                     y1={child.y}
//                     x2={rootNode.x}
//                     y2={rootNode.y}
//                     strokeWidth={0.5}
//                     stroke="#000"
//                   />
//                 );
//               } else {
//                 return null;
//               }
//             })}
//           {nodes.map((x, i) => {
//             return (
//               <circle key={i} cx={x.x} r={x.index === 0 ? 4 : 1} cy={x.y}>
//                 {props.blockData[x.index] && (
//                   <title>{props.blockData[x.index].blockName} </title>
//                 )}
//               </circle>
//             );
//           })}
//         </svg>
//       )}
//     </>
//   );
// };

// const getViewBox = (nodes) => {
//   const size =
//     (1 + 0.1) *
//     Math.max(
//       Math.max(...nodes.map((x) => Math.abs(x.x))),
//       Math.max(...nodes.map((x) => Math.abs(x.y)))
//     );

//   const viewBox = {
//     cx: -size,
//     cy: -size,
//     height: size * 2,
//     width: size * 2,
//   };
//   return `${viewBox.cx} ${viewBox.cy} ${viewBox.height} ${viewBox.width}`;
// };

// export default UserMinerNodeForceGraph;
