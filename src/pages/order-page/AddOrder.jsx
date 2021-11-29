import React from "react";

export default function AddOrder() {
  return (
    <div className="addOrder">
      <div className="pageTitle">
        <h1>Order</h1>
        <h2>/Add New Order</h2>
      </div>
      <div className="client-data">
        <h1 className="heading">Client Data</h1>
        <div className="border-down"></div>
        <form action="#">
          <div className="complete-field">
            <label for="Orderno">Order #</label>
            <input type="text" id="Orderno" name="Orderno" />
          </div>

          <div className="complete-field">
            <label for="Orderno">Date</label>
            <input type="text" id="Orderno" name="Orderno" />
          </div>

          <div className="complete-field">
            <label for="Orderno">Client ID</label>
            <input type="text" id="Orderno" name="Orderno" />
          </div>

          <div className="complete-field">
            <label for="Orderno">Client Name</label>
            <input type="text" id="Orderno" name="Orderno" />
          </div>

          <div className="complete-field">
            <label for="Orderno">Client Phone #</label>
            <input type="text" id="Orderno" name="Orderno" />
          </div>
        </form>
      </div>

      <div className="vehicle-data">
        <h1 className="heading">Vehicle Data</h1>
        <div className="border-down"></div>
        <form action="#">
          <div className="complete-field">
            <label for="Orderno">Vehicle #</label>
            <input type="text" id="Orderno" name="Orderno" />
          </div>

          <div className="complete-field">
            <label for="Orderno">Manufactuer</label>
            <input type="text" id="Orderno" name="Orderno" />
          </div>

          <div className="complete-field">
            <label for="Orderno">Model</label>
            <input type="text" id="Orderno" name="Orderno" />
          </div>

          <div className="complete-field">
            <label for="Orderno">Year</label>
            <input type="text" id="Orderno" name="Orderno" />
          </div>

          <div className="complete-field">
            <label for="Orderno">Color</label>
            <input type="text" id="Orderno" name="Orderno" />
          </div>
        </form>
      </div>

      <div className="job-details">
        <h1 className="heading">Job Details</h1>
        <div className="border-down"></div>
        <form action="#">
          <div className="complete-field">
            <label for="Orderno">Job type</label>
            <input type="text" id="Orderno" name="Orderno" />
          </div>

          <div className="complete-field">
            <label for="Orderno">Fault</label>
            <input
              className="big-padding"
              type="text"
              id="Orderno"
              name="Orderno"
            />
          </div>

          <div className="complete-field">
            <label for="Orderno">Add item</label>
            <input type="text" id="Orderno" name="Orderno" />
          </div>

          <div className="complete-field labor-cost">
            <label for="Orderno">Labor Cost</label>
            <input type="text" id="Orderno" name="Orderno" />
          </div>

          <div className="complete-field repairman">
            <label for="Orderno">Repairman</label>
            <input type="text" id="Orderno" name="Orderno" />
          </div>
        </form>
      </div>
    </div>
  );
}
