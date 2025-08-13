
export default function Step4BusinessAddress({ form, handleChange }) {
  return (
    <section>
      <h2>Business Address</h2>

      <label>
        Region
        <select
          name="region"
          value={form.region}
          onChange={handleChange}
        >
          <option value="">Select Region</option>
          {/* Add region options dynamically if needed */}
        </select>
      </label>

      <label>
        Province
        <select
          name="province"
          value={form.province}
          onChange={handleChange}
        >
          <option value="">Select Province</option>
        </select>
      </label>

      <label>
        City / Municipality
        <select
          name="cityOrMunicipality"
          value={form.cityOrMunicipality}
          onChange={handleChange}
        >
          <option value="">Select City / Municipality</option>
        </select>
      </label>

      <label>
        Barangay
        <select
          name="barangay"
          value={form.barangay}
          onChange={handleChange}
        >
          <option value="">Select Barangay</option>
        </select>
      </label>

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
