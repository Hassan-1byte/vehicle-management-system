import React from "react";

export default function Table({
  TableRowData,
  colNames,
  width = "auto",
  height = "auto",
}) {
  return (
    <div>
      {TableRowData.length > 0 && (
        <table
          cellSpacing="0"
          style={{ width: width, height: height, padding: "5px 10px" }}
        >
          {/* <thead>
            <tr>
              {colNames.map((headerItem, index) => {
                return <th key={index}>{headerItem}</th>;
              })}
            </tr>
          </thead> */}
          {/* <tbody>
            {Object.values(TableRowData).map((obj, index) => {
              <tr key={index}>
                {Object.values(obj).map((value, index2) => {
                  return <td key={index2}>{value}</td>;
                })}
              </tr>;
            })}
          </tbody> */}
        </table>
      )}
    </div>
  );
}
