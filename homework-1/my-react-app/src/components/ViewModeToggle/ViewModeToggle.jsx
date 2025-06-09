
import React from "react";
import { useViewMode } from "../../context/ViewModeContext";
import './ViewModeToggle.scss'

const ViewModeToggle = () => {
  const { viewMode, setViewMode } = useViewMode();

 
    return (
  <div className="view-mode-toggle">
    <button
      onClick={() => setViewMode("grid")}
      disabled={viewMode === "grid"}
    >
      Grid View
    </button>
    <button
      onClick={() => setViewMode("table")}
      disabled={viewMode === "table"}
    >
      Table View
    </button>
  </div>
);
};

export default ViewModeToggle;
