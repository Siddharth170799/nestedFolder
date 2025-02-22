import React, { useState } from "react";
import json from "./data2.json";

const List = ({ list, addCommentToTheList, deleteCommentFromTheList, level = 0 }) => {
  const [isEnabled, setIsEnabled] = useState({});
  
  return (
    <div className="comment-list">
      {list.map((node) => (
        <div key={node.id} className="comment-container" style={{ marginLeft: `${level * 20}px` }}>
          <div className="comment">
            {node.isNested && (
              <span 
                className="toggle-button"
                onClick={() =>
                  setIsEnabled({
                    ...isEnabled,
                    [node.comment]: !isEnabled[node.comment],
                  })
                }
              >
                {isEnabled[node.comment] ? "▼" : "▶"}
              </span>
            )}
            <span className="comment-text">{node?.comment}</span>
            <span className="action reply" onClick={() => addCommentToTheList(node.id)}>Reply</span>
            <span className="action delete" onClick={() => deleteCommentFromTheList(node.id)}>Delete</span>
          </div>

          {isEnabled[node.comment] && node?.isNested && (
            <List 
              list={node.nestedComments} 
              addCommentToTheList={addCommentToTheList} 
              deleteCommentFromTheList={deleteCommentFromTheList} 
              level={level + 1} 
            />
          )}
        </div>
      ))}
    </div>
  );
};

const Practice2 = () => {
  const [data, setData] = useState(json);

  const addCommentToTheList = (id) => {
    const name = prompt("Enter The Comment");

    const updateCommentsToTheList = (list) => {
      return list.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            isNested:true,
            nestedComments: [
              ...item.nestedComments,
              { id: Math.random(), comment: name, nestedComments: [] },
            ],
          };
        } else if (item.nestedComments) {
          return {
            ...item,
            nestedComments: updateCommentsToTheList(item.nestedComments),
          };
        }
        return item;
      });
    };

    setData(updateCommentsToTheList(data));
  };

  const deleteCommentFromTheList = (id) => {
    const updateCommentsToTheList = (list) => {
        return list
                .filter((item) => item.id != id)
                .map((item) => {
                  if (item.nestedComments) {
                    return {
                      ...item,
                      nestedComments: updateCommentsToTheList(item.nestedComments),
                    };
                  } else {
                    return item;
                  }
                });
            };
            setData(updateCommentsToTheList(data));
  };

  return (
    <div className="comment-section">
      <h2 style={{textAlign:"center"}}>Nested Comments</h2>
     {data.length > 0 ? <List 
        list={data} 
        addCommentToTheList={addCommentToTheList} 
        deleteCommentFromTheList={deleteCommentFromTheList} 
      /> :<div style={{textAlign:"center"}}>No Comments</div>} 
    </div>
  );
};

export default Practice2;
