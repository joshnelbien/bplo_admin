import { useEffect, useState } from "react";

export default function Step6TaxpayerAddress({ form, handleChange }) {
  const [psgc, setPsgc] = useState(null);

  // Load PSGC JSON
  useEffect(() => {
    fetch("/psgc.json")
      .then((res) => res.json())
      .then((data) => setPsgc(data))
      .catch((err) => console.error("Error loading PSGC:", err));
  }, []);

  // Province options for taxpayer
  const provinceOptions =
    form.Taxregion && psgc
      ? Object.keys(psgc[form.Taxregion]?.province_list || {})
      : [];

  const cityOptions =
    form.Taxregion && form.Taxprovince && psgc
      ? Object.keys(
          psgc[form.Taxregion]?.province_list[form.Taxprovince]
            ?.municipality_list || {}
        )
      : [];

  const barangayOptions =
    form.Taxregion && form.Taxprovince && form.TaxcityOrMunicipality && psgc
      ? psgc[form.Taxregion]?.province_list[form.Taxprovince]
          ?.municipality_list[form.TaxcityOrMunicipality]?.barangay_list || []
      : [];






  return (
    <section>
      <h2>Taxpayer’s Address</h2>

      {/* REGION */}
      <label>
        Region
        <select name="Taxregion" value={form.Taxregion} onChange={handleChange}>
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
          name="Taxprovince"
          value={form.Taxprovince}
          onChange={handleChange}
          disabled={!form.Taxregion}
        >
          <option value="">Select Province</option>
          {provinceOptions.map((prov) => (
            <option key={prov} value={prov}>
              {prov}
            </option>
          ))}
        </select>
      </label>

      {/* CITY */}
      <label>
        City / Municipality
        <select
          name="TaxcityOrMunicipality"
          value={form.TaxcityOrMunicipality}
          onChange={handleChange}
          disabled={!form.Taxprovince}
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
          name="Taxbarangay"
          value={form.Taxbarangay}
          onChange={handleChange}
          disabled={!form.TaxcityOrMunicipality}
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
          name="TaxaddressLine1"
          value={form.TaxaddressLine1}
          onChange={handleChange}
        />
      </label>

      <label>
        Zip Code
        <input
          type="text"
          name="TaxzipCode"
          value={form.TaxzipCode}
          onChange={handleChange}
        />
      </label>

      <label>
        Pin Address
        <input
          type="text"
          name="TaxpinAddress"
          value={form.TaxpinAddress}
          onChange={handleChange}
        />
      </label>

      {/* OWN PLACE */}
      <label>
        Own Place
        <select name="ownPlace" value={form.ownPlace} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>
      {form.ownPlace === "Yes" &&(
        <section>
          <label>
            Tax Declaration No.
            <input
              type="text"
              name="OwnerPinAddress"
              value={form.OwnerPinAddress || ""}
              onChange={handleChange}
            />
          </label>
        </section>
      )}

      {/* OWNER'S ADDRESS (if ownPlace = No) */}
      {form.ownPlace === "No" && (
        <section>
          <h3>Owner’s Address</h3>

         
       <label>
  Lessor's Name
  <input
    type="text"
    name="lessorName"
    value={form.lessorName || ""}
    onChange={handleChange}
  />
</label>

<label>
  Monthly Rental
  <input
    type="text"
    name="monthlyRental"
    value={form.monthlyRental || ""}
    onChange={handleChange}
  />
</label>

<label>
  Tax Declaration No.
  <input
    type="text"
    name="taxDeclarationNo"
    value={form.taxDeclarationNo || ""}
    onChange={handleChange}
  />
</label>

        </section>
      )}
    </section>
  );
}
