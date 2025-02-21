// import logo from "./logo.svg";
// import "./App.css";
// import json from "./data.json";
// import { useState } from "react";


// const List = ({list,addNodeToList})=>{
//   const [isExpanded,setIsExpanded] = useState({
  
//   })

//   return <div className="container">
//   {list.map((node) => {
//     return (
//       <>
//       <div key={node.id}>
//         {node.isFolder && <span onClick={()=>setIsExpanded((prev)=>({...prev,[node.name]: !prev[node.name]}))}>{isExpanded?.[node.name] ? "-" : "+"}</span>}

//         <span>{node.name}</span>
//        {node.isFolder && <span onClick={()=>addNodeToList(node.id)}> <img src="https://static.vecteezy.com/system/resources/previews/000/439/792/original/vector-folder-icon.jpg" alt="icon" className="icon"/> </span> } 
//         {isExpanded?.[node.name] && node?.children &&  <List list={node.children} addNodeToList={addNodeToList}/> }
       
//         </div>
   
//       </>
//     )
   
//   })}
// </div>
// }
// function App() {
//   const [data, setData] = useState(json);
//   const addNodeToList=(parentId)=>{

//     const name = prompt("Enter Name")

//     const updateTree=(list)=>{
// return list.map(node => {
//   if(node.id == parentId){
//     return (
//       {
//         ...node,
//         children:[...node.children,{id:"123",name:name,isFolder:"true",children:[]

//         }
//       ]
//       }
//     )
    
//   }
//   if(node.children){
//     return {...node,children:updateTree(node.children)}
//   }
//   return node
// }
// )
//     }
//     setData(updateTree(data))
//   }
//   return (
//     <div className="App">
//       <h1>File/Folder Explorer</h1>
//       <List list={data} addNodeToList={addNodeToList}/>
     
//     </div>
//   );
// }

// export default App;


import React from 'react'
import Practice from './Practice'
import Practice2 from './Practice2'

const App = () => {
  return (
    <div>
      {/* <Practice/> */}
      <Practice2/>
    </div>
  )
}

export default App
