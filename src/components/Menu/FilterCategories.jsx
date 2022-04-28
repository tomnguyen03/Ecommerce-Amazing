import { TreeItem, TreeView } from "@material-ui/lab";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { path } from "./../../constants/path";
import qs from "query-string";

const data = {
  id: "root",
  name: "Menu",
  children: [
    {
      id: "1",
      name: "Appliances",
      children: [
        {
          id: "2",
          name: "Dishwashers",
        },
        {
          id: "3",
          name: "Fans",
        },
      ],
    },
    {
      id: "4",
      name: "Audio",
      children: [
        {
          id: "5",
          name: "Home Audio",
        },
        {
          id: "6",
          name: "Headphones",
        },
      ],
    },
    {
      id: "7",
      name: "Computers & Tablets",
      children: [
        {
          id: "8",
          name: "Laptops",
        },
        {
          id: "9",
          name: "Monitors",
        },
      ],
    },
  ],
};

export default function FilterCategories() {
  const navigate = useNavigate();
  const filters = useSelector((state) => state.product.params);
  const handleClick = (value) => {
    if (value === "Menu") value = "";
    const _filters = {
      ...filters,
      categories_like: value,
    };
    navigate(path.home + `?${qs.stringify(_filters)}`);
  };
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );
  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<i className="bx bx-chevron-down"></i>}
      defaultExpanded={["root"]}
      defaultExpandIcon={<i className="bx bx-chevron-right"></i>}
      // onNodeToggle={handleClick}
      onClick={(event) => handleClick(event.target.textContent)}
      sx={{
        height: 110,
        flexGrow: 1,
        maxWidth: "100%",
        overflowY: "auto",
        fontSize: "12px",
      }}
    >
      {renderTree(data)}
    </TreeView>
  );
}
