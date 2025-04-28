import React, { useState } from "react";
import data from "./data.json";
import "./Folder.css";

const List = ({ data, addItemToTheList, deleteItemsFromTheList }) => {
  const [isExpanded, setIsExpanded] = useState({});

  return (
    <div>
      {data.map((node) => (
        <div key={node.id} className="folder-item">
          <div>{node?.name}</div>
          {node?.isFolder && (
            <>
              <button onClick={() => addItemToTheList(node.id)}>
                Add Folder
              </button>{" "}
              <button onClick={() => deleteItemsFromTheList(node.id)}>
                Delete Folder
              </button>
              <button
                onClick={() =>
                  setIsExpanded({
                    ...isExpanded,
                    [node.name]: !isExpanded[node.name],
                  })
                }
              >
                {isExpanded[node.name] ? "-" : "+"}
              </button>
            </>
          )}
          {isExpanded[node.name] && node?.children && (
            <div className="child-list">
              <List
                data={node.children}
                addItemToTheList={addItemToTheList}
                deleteItemsFromTheList={deleteItemsFromTheList}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Practice4 = () => {
  const [data1, setData1] = useState(data);

  const addItemToTheList = (parentId) => {
    const name = prompt("Enter The folder Name");
    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              { id: "123", isFolder: true, name: name, children: [] },
            ],
          };
        } else if (node.children) {
          return { ...node, children: updateTree(node.children) };
        } else {
          return node;
        }
      });
    };
    setData1(updateTree(data1));
  };

  const deleteItemsFromTheList = (parentId) => {
    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id == parentId) {
          return list.filter((item) => item.id != parentId);
        } else if (node.children) {
          return { ...node, children: updateTree(node.children) };
        } else {
          return node;
        }
      });
    };
    setData1(updateTree(data1));
  };
  console.log(data1);
  return (
    <div className="container">
      <List
        data={data1}
        addItemToTheList={addItemToTheList}
        deleteItemsFromTheList={deleteItemsFromTheList}
      />
    </div>
  );
};

export default Practice4;
