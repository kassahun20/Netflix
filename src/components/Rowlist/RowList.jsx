import React from "react";
import Data from "./Data";
import Row from "../Rows/Row";
function RowList() {
  return (
    <div>
      {Data.map((data, index) => (
        <Row
          key={index}
          title={data.title}
          fetchUrl={data.fetchUrl}
          isLargeRow={data.isLargeRow}
        />
      ))}
    </div>
  );
}

export default RowList;
