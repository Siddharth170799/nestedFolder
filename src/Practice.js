import React, { useState } from "react";
import json from "./data.json";
import "./App.css";

const List = ({ list, addNodeToList, deleteNodeFromList }) => {
  const [isExpanded, setIsExpanded] = useState({});
  return (
    <div className="container">
      {list.map((node) => {
        return (
          <>
            <div key={node.id}>
              {node.isFolder && (
                <span
                  onClick={() =>
                    setIsExpanded({
                      ...isExpanded,
                      [node.name]: !isExpanded[node.name],
                    })
                  }
                >
                  {isExpanded[node.name] ? "-" : "+"}
                </span>
              )}
              <span>{node.name}</span>
              {node.isFolder && (
                <>
                  <span onClick={() => addNodeToList(node.id)}>
                    {" "}
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/000/439/792/original/vector-folder-icon.jpg"
                      alt="icon"
                      className="icon"
                    />{" "}
                  </span>
                  <span onClick={() => deleteNodeFromList(node.id)}>
                    Delete
                  </span>
                </>
              )}
              {isExpanded[node.name] && node?.children && (
                <List
                  list={node.children}
                  addNodeToList={addNodeToList}
                  deleteNodeFromList={deleteNodeFromList}
                />
              )}
            </div>
          </>
        );
      })}
    </div>
  );
};

const Practice = () => {
  const [data, setData] = useState(json);

  const addNodeToList = (parentId) => {
    const name = prompt("Enter Name");
    function updateTree(list) {
      return list.map((node) => {
        if (node.id == parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              { id: "123", name: name, isFolder: "true", children: [] },
            ],
          };
        } else if (node.children) {
          return { ...node, children: updateTree(node.children) };
        } else {
          return node;
        }
      });
    }
    setData(updateTree(data));
  };
  const deleteNodeFromList = (parentId) => {
    function updateTree(list) {
      return list.map((node) => {
        if (node.id == parentId) {
          return list.filter((node) => node.id != parentId);
        } else if (node.children) {
          return { ...node, children: updateTree(node.children) };
        } else {
          return node;
        }
      });
    }
    setData(updateTree(data));
  };
  return (
    <>
      <div className="App">
        <h1>FileExplorer</h1>
        <List
          list={data}
          addNodeToList={addNodeToList}
          deleteNodeFromList={deleteNodeFromList}
        />
      </div>
    </>
  );
};

export default Practice;
