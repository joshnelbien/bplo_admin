
export default function Step8BusinessRequirements({ form, handleChange }) {
  return (
    <section>
      <h2>Business Requirements</h2>

      <label>
        Proof of Registration
        <input
          type="text"
          name="proofOfReg"
          value={form.proofOfReg}
          onChange={handleChange}
        />
      </label>

      <label>
        Right to Use Location
        <input
          type="text"
          name="proofOfRightToUseLoc"
          value={form.proofOfRightToUseLoc}
          onChange={handleChange}
        />
      </label>

      <label>
        Location Plan
        <input
          type="text"
          name="locationPlan"
          value={form.locationPlan}
          onChange={handleChange}
        />
      </label>

      <label>
        Barangay Clearance
        <input
          type="text"
          name="brgyClearance"
          value={form.brgyClearance}
          onChange={handleChange}
        />
      </label>

      <label>
        Market Clearance
        <input
          type="text"
          name="marketClearance"
          value={form.marketClearance}
          onChange={handleChange}
        />
      </label>

      <label>
        Occupancy Permit
        <input
          type="text"
          name="occupancyPermit"
          value={form.occupancyPermit}
          onChange={handleChange}
        />
      </label>

      <label>
        CEDULA
        <input
          type="text"
          name="cedula"
          value={form.cedula}
          onChange={handleChange}
        />
      </label>

      <label>
        Photo (Interior)
        <input
          type="text"
          name="photoOfBusinessEstInt"
          value={form.photoOfBusinessEstInt}
          onChange={handleChange}
        />
      </label>

      <label>
        Photo (Exterior)
        <input
          type="text"
          name="photoOfBusinessEstExt"
          value={form.photoOfBusinessEstExt}
          onChange={handleChange}
        />
      </label>
    </section>
  );
}
