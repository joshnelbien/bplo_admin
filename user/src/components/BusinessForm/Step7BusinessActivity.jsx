export default function Step7BusinessActivity({ form, handleChange }) {
  // Generic handler


  return (
    <section>
      <h2>Business Activity</h2>

      {/* Tax Incentives */}
      <label>
        Tax Incentives from Gov't
        <select
          name="tIGE"
          value={form.tIGE || ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </label>

      {form.tIGE === "Yes" && (
        <label>
          Attach Supporting Document
          <input
            type="file"
            name="tIGEFile"
            onChange={handleChange}
          />
        </label>
      )}

      {/* Business Activity */}
      <div
        style={{
          marginTop: "1.5rem",
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        
        <label>
          Office Type
          <select
            name="officeType"
            value={form.officeType || ""}
            onChange={handleChange}
          >
            <option value="">-- Select Office Type --</option>
            <option value="Main">Main</option>
            <option value="Branch Office">Branch Office</option>
            <option value="Admin Office Only">Admin Office Only</option>
            <option value="Warehouse">Warehouse</option>
            <option value="Others">Others (Specify)</option>
          </select>
        </label>

        {form.officeType === "Others" && (
          <label>
            Specify Business Activity
            <input
              type="text"
              name="officeTypeOther"
              value={form.officeTypeOther || ""}
              onChange={handleChange}
            />
          </label>
        )}

        <label>
          Line of Business
          <input
            type="text"
            name="lineOfBusiness"
            value={form.lineOfBusiness || ""}
            onChange={handleChange}
          />
        </label>

        <label>
          Product/Service
          <input
            type="text"
            name="productService"
            value={form.productService || ""}
            onChange={handleChange}
          />
        </label>

        <label>
          Units
          <input
            type="number"
            name="Units"
            value={form.Units || ""}
            onChange={handleChange}
          />
        </label>

        <label>
          Capital
          <input
            type="number"
            name="capital"
            value={form.capital || ""}
            onChange={handleChange}
          />
        </label>
      </div>
    </section>
  );
}
