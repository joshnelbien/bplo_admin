import { useEffect, useState } from "react";

export default function Step4BusinessAddress({ form, handleChange }) {
  const [barangayOptions, setBarangayOptions] = useState([]);

  useEffect(() => {
    fetch("/psgc.json")
      .then((res) => res.json())
      .then((data) => {
        const barangays =
          data["REGION IV-A"]?.province_list["LAGUNA"]?.municipality_list[
            "SAN PABLO CITY"
          ]?.barangay_list || [];

        setBarangayOptions(barangays);
      })
      .catch((err) => console.error("Error loading PSGC:", err));

    // Auto-set fixed values if not set
    if (!form.region || !form.province || !form.cityOrMunicipality) {
      handleChange({ target: { name: "region", value: "REGION IV-A" } });
      handleChange({ target: { name: "province", value: "LAGUNA" } });
      handleChange({ target: { name: "cityOrMunicipality", value: "SAN PABLO CITY" } });
    }
  }, [form.region, form.province, form.cityOrMunicipality, handleChange]);

  return (
    <section>
      <h2>Business Address</h2>

      {/* FIXED REGION */}
      <label>
        Region
        <input type="text" value="REGION IV-A" disabled />
      </label>

      {/* FIXED PROVINCE */}
      <label>
        Province
        <input type="text" value="LAGUNA" disabled />
      </label>

      {/* FIXED CITY */}
      <label>
        City / Municipality
        <input type="text" value="SAN PABLO CITY" disabled />
      </label>

      {/* BARANGAY */}
      <label>
        Barangay
        <select name="barangay" value={form.barangay} onChange={handleChange}>
          <option value="">Select Barangay</option>
          {barangayOptions.map((brgy) => (
            <option key={brgy} value={brgy}>
              {brgy}
            </option>
          ))}
        </select>
      </label>

      {/* OTHER FIELDS */}
      <label>
        Address Line 1
        <input
          type="text"
          name="addressLine1"
          value={form.addressLine1}
          onChange={handleChange}
        />
      </label>

      <label>
        Zip Code
        <input
          type="text"
          name="zipCode"
          value={form.zipCode}
          onChange={handleChange}
        />
      </label>

      <label>
        PIN Address
        <input
          type="text"
          name="pinAddress"
          value={form.pinAddress}
          onChange={handleChange}
        />
      </label>
    </section>
  );
}
