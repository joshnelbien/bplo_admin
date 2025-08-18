import { useEffect, useState } from "react";

export default function Step4BusinessAddress({ form, handleChange }) {
  const [psgc, setPsgc] = useState(null);

  // Fixed values
  const FIXED_REGION = "REGION IV-A"; // Example code for Region IV-A in PSGC
  const FIXED_PROVINCE = "LAGUNA";
  const FIXED_CITY = "SAN PABLO CITY";

  // Load PSGC JSON once
  useEffect(() => {
    fetch("/psgc.json")
      .then((res) => res.json())
      .then((data) => {
        setPsgc(data);

        // Pre-fill fixed values into form if not set yet
        if (!form.region || !form.province || !form.cityOrMunicipality) {
          handleChange({ target: { name: "region", value: FIXED_REGION } });
          handleChange({ target: { name: "province", value: FIXED_PROVINCE } });
          handleChange({
            target: { name: "cityOrMunicipality", value: FIXED_CITY },
          });
        }
      })
      .catch((err) => console.error("Error loading PSGC:", err));
  }, []);

  // Get barangays for San Pablo
  const barangayOptions =
    psgc?.[FIXED_REGION]?.province_list?.[FIXED_PROVINCE]?.municipality_list?.[
      FIXED_CITY
    ]?.barangay_list || [];

  return (
    <section>
      <h2>Business Address</h2>

      {/* FIXED REGION */}
      <label>
        Region
        <select name="region" value={FIXED_REGION} disabled>
          <option value={FIXED_REGION}>
            {psgc?.[FIXED_REGION]?.region_name || "Region IV-A"}
          </option>
        </select>
      </label>

      {/* FIXED PROVINCE */}
      <label>
        Province
        <select name="province" value={FIXED_PROVINCE} disabled>
          <option value={FIXED_PROVINCE}>{FIXED_PROVINCE}</option>
        </select>
      </label>

      {/* FIXED CITY */}
      <label>
        City / Municipality
        <select name="cityOrMunicipality" value={FIXED_CITY} disabled>
          <option value={FIXED_CITY}>{FIXED_CITY}</option>
        </select>
      </label>

      {/* SELECTABLE BARANGAY */}
      <label>
        Barangay
        <select
          name="barangay"
          value={form.barangay}
          onChange={handleChange}
          disabled={!barangayOptions.length}
        >
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
