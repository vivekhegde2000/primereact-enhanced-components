import { Tree } from "primereact/tree";
import React, { useState } from "react";
import { BsFillBuildingFill } from "react-icons/bs";
import { FiCpu, FiFolder, FiSettings } from "react-icons/fi";

const SideTreeMenu = () => {
  const [selectedKey, setSelectedKey] = useState("");
  const [nodes] = useState([
    {
      key: "org",
      label: "Acme Corp",
      icon: <BsFillBuildingFill size={16} />,
      children: [
        {
          key: "p1",
          label: "Smart Factory",
          icon: <FiFolder size={16} />,
          children: [
            { key: "task1", label: "Deploy IoT", icon: <FiCpu size={16} /> },
            {
              key: "task2",
              label: "Setup Sensor",
              icon: <FiSettings size={16} />,
            },
          ],
        },
        {
          key: "p2",
          label: "IT Infra",
          icon: <FiFolder size={16} />,
        },
        {
          key: "p3",
          label: "Posana",
          icon: <FiFolder size={16} />,
        },
        {
          key: "p4",
          label: "Google",
          icon: <FiFolder size={16} />,
        },
        {
          key: "p5",
          label: "Vebsarl",
          icon: <FiFolder size={16} />,
        },
        {
          key: "p6",
          label: "Microsoft",
          icon: <FiFolder size={16} />,
        },
      ],
    },
  ]);
  return (
    <Tree
      value={nodes}
      selectionMode="single"
      className="w-full"
      filter
      filterPlaceholder="Search project"
      selectionKeys={selectedKey}
      onSelectionChange={(e) => setSelectedKey(e.value as string)}
    />
  );
};

export default SideTreeMenu;
