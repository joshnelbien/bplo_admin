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

  // Province options for owner (when ownPlace = No)
  const ownerProvinceOptions =
    form.OwnerRegion && psgc
      ? Object.keys(psgc[form.OwnerRegion]?.province_list || {})
      : [];

  const ownerCityOptions =
    form.OwnerRegion && form.OwnerProvince && psgc
      ? Object.keys(
          psgc[form.OwnerRegion]?.province_list[form.OwnerProvince]
            ?.municipality_list || {}
        )
      : [];

  const ownerBarangayOptions =
    form.OwnerRegion &&
    form.OwnerProvince &&
    form.OwnerCityOrMunicipality &&
    psgc
      ? psgc[form.OwnerRegion]?.province_list[form.OwnerProvince]
          ?.municipality_list[form.OwnerCityOrMunicipality]?.barangay_list || []
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

      {/* OWNER'S ADDRESS (if ownPlace = No) */}
      {form.ownPlace === "No" && (
        <section>
          <h3>Owner’s Address</h3>

          <label>
            Region
            <select
              name="OwnerRegion"
              value={form.OwnerRegion}
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

          <label>
            Province
            <select
              name="OwnerProvince"
              value={form.OwnerProvince}
              onChange={handleChange}
              disabled={!form.OwnerRegion}
            >
              <option value="">Select Province</option>
              {ownerProvinceOptions.map((prov) => (
                <option key={prov} value={prov}>
                  {prov}
                </option>
              ))}
            </select>
          </label>

          <label>
            City / Municipality
            <select
              name="OwnerCityOrMunicipality"
              value={form.OwnerCityOrMunicipality}
              onChange={handleChange}
              disabled={!form.OwnerProvince}
            >
              <option value="">Select City / Municipality</option>
              {ownerCityOptions.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>

          <label>
            Barangay
            <select
              name="OwnerBarangay"
              value={form.OwnerBarangay}
              onChange={handleChange}
              disabled={!form.OwnerCityOrMunicipality}
            >
              <option value="">Select Barangay</option>
              {ownerBarangayOptions.map((brgy) => (
                <option key={brgy} value={brgy}>
                  {brgy}
                </option>
              ))}
            </select>
          </label>

          <label>
            Address Line 1
            <input
              type="text"
              name="OwnerAddressLine1"
              value={form.OwnerAddressLine1 || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            Zip Code
            <input
              type="text"
              name="OwnerZipCode"
              value={form.OwnerZipCode || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            Pin Address
            <input
              type="text"
              name="OwnerPinAddress"
              value={form.OwnerPinAddress || ""}
              onChange={handleChange}
            />
          </label>
        </section>
      )}
    </section>
  );
}
