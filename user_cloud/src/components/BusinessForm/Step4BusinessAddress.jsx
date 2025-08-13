import { useEffect, useState } from "react";

export default function Step4BusinessAddress({ form, handleChange }) {
  const [psgc, setPsgc] = useState(null);

  // Load the PSGC JSON file once
  useEffect(() => {
    fetch("/psgc.json")
      .then((res) => res.json())
      .then((data) => setPsgc(data))
      .catch((err) => console.error("Error loading PSGC:", err));
  }, []);

  // Get provinces for selected region
  const provinceOptions = form.region && psgc
    ? Object.keys(psgc[form.region]?.province_list || {})
    : [];

  // Get cities/municipalities for selected province
  const cityOptions =
    form.region && form.province && psgc
      ? Object.keys(
          psgc[form.region]?.province_list[form.province]?.municipality_list ||
            {}
        )
      : [];

  // Get barangays for selected city
  const barangayOptions =
    form.region && form.province && form.cityOrMunicipality && psgc
      ? psgc[form.region]?.province_list[form.province]?.municipality_list[
          form.cityOrMunicipality
        ]?.barangay_list || []
      : [];

  return (
    <section>
      <h2>Business Address</h2>

      {/* REGION */}
      <label>
        Region
        <select
          name="region"
          value={form.region}
          onChange={handleChange}
        >
          <option value="">Select Region</option>
          {psgc &&
            Object.entries(psgc).map(([code, data]) => (
              <option key={code} value={code}>
                {data.region_name}
              </option>
            ))}
        </select>
      </label>

      {/* PROVINCE */}
      <label>
        Province
        <select
          name="province"
          value={form.province}
          onChange={handleChange}
          disabled={!form.region}
        >
          <option value="">Select Province</option>
          {provinceOptions.map((prov) => (
            <option key={prov} value={prov}>
              {prov}
            </option>
          ))}
        </select>
      </label>

      {/* CITY / MUNICIPALITY */}
      <label>
        City / Municipality
        <select
          name="cityOrMunicipality"
          value={form.cityOrMunicipality}
          onChange={handleChange}
          disabled={!form.province}
        >
          <option value="">Select City / Municipality</option>
          {cityOptions.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </label>

      {/* BARANGAY */}
      <label>
        Barangay
        <select
          name="barangay"
          value={form.barangay}
          onChange={handleChange}
          disabled={!form.cityOrMunicipality}
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
