import React from "react";
import { TablecolNames } from "../../components/Table/TableColData";
import { TableRowData } from "../../components/Table/TableRowData";

export default function Table({ TablecolNames }, { TableRowData }) {
  return (
    <>
      <div className="table">
        {/* <thead>
          <tr>
            {TablecolNames.map((headerItem, index) => {
              return <th key={index}>{headerItem}</th>;
            })}
          </tr>
        </thead> */}
        {/* <tbody>
          {TableRowData.map((obj, index) => {
            <tr key={index}>
              {obj.map((value, index2) => {
                return <td key={index2}>{value}</td>;
              })}
            </tr>;
          })}
        </tbody> */}
      </div>
    </>
  );
}
