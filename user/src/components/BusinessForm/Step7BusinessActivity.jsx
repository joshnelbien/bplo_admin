import { useState } from "react";

export default function Step7BusinessActivity({ form, setForm }) {
  const [activities, setActivities] = useState(
    form.businessActivities || [
      {
        officeType: "",
        officeTypeOther: "",
        lineOfBusiness: "",
        productService: "",
        Units: "",
        capital: "",
      },
    ]
  );

  // Handle change for each activity
  const handleActivityChange = (index, e) => {
    const newActivities = [...activities];
    newActivities[index][e.target.name] = e.target.value;
    setActivities(newActivities);
    setForm({ ...form, businessActivities: newActivities });
  };

  // Add new blank activity
  const addActivity = () => {
    setActivities([
      ...activities,
      {
        officeType: "",
        officeTypeOther: "",
        lineOfBusiness: "",
        productService: "",
        Units: "",
        capital: "",
      },
    ]);
  };

  return (
    <section>
      <h2>Business Activity</h2>

      {/* Tax Incentives applies to ALL activities */}
      <label>
        Tax Incentives from Gov't
        <select
          name="tIGE"
          value={form.tIGE || ""}
          onChange={(e) => setForm({ ...form, tIGE: e.target.value })}
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
            onChange={(e) =>
              setForm({ ...form, tIGEFile: e.target.files[0] })
            }
          />
        </label>
      )}

      {/* Repeatable activities */}
      {activities.map((activity, index) => (
        <div
          key={index}
          style={{
            marginBottom: "1.5rem",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <h3>Activity {index + 1}</h3>

          <label>
            Office Type
            <select
              name="officeType"
              value={activity.officeType}
              onChange={(e) => handleActivityChange(index, e)}
            >
              <option value="">-- Select Office Type --</option>
              <option value="Main">Main</option>
              <option value="Branch Office">Branch Office</option>
              <option value="Admin Office Only">Admin Office Only</option>
              <option value="Warehouse">Warehouse</option>
              <option value="Others">Others (Specify)</option>
            </select>
          </label>

          {activity.officeType === "Others" && (
            <label>
              Specify Business Activity
              <input
                type="text"
                name="officeTypeOther"
                value={activity.officeTypeOther || ""}
                onChange={(e) => handleActivityChange(index, e)}
              />
            </label>
          )}

          <label>
            Line of Business
            <input
              type="text"
              name="lineOfBusiness"
              value={activity.lineOfBusiness}
              onChange={(e) => handleActivityChange(index, e)}
            />
          </label>

          <label>
            Product/Service
            <input
              type="text"
              name="productService"
              value={activity.productService}
              onChange={(e) => handleActivityChange(index, e)}
            />
          </label>

          <label>
            Units
            <input
              type="text"
              name="Units"
              value={activity.Units}
              onChange={(e) => handleActivityChange(index, e)}
            />
          </label>

          <label>
            Capital
            <input
              type="text"
              name="capital"
              value={activity.capital}
              onChange={(e) => handleActivityChange(index, e)}
            />
          </label>
        </div>
      ))}

      <button type="button" onClick={addActivity}>
        ➕ Add Business Activity
      </button>
    </section>
  );
}
