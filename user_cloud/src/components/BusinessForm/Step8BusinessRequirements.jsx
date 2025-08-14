export default function Step8BusinessRequirements({ form, handleFileChange }) {
  return (
    <section>
      <h2>Business Requirements</h2>

      <label>
        Proof of Registration
        <input
          type="file"
          name="proofOfReg"
          
          onChange={form.handleFileChange}
        />
      </label>

      <label>
        Right to Use Location
        <input
          type="file"
          name="proofOfRightToUseLoc"
          onChange={form.handleFileChange}
        />
      </label>

      <label>
        Location Plan
        <input
          type="file"
          name="locationPlan"
          onChange={form.handleFileChange}
        />
      </label>

      <label>
        Barangay Clearance
        <input
          type="file"
          name="brgyClearance"
          onChange={form.handleFileChange}
        />
      </label>

      <label>
        Market Clearance
        <input
          type="file"
          name="marketClearance"
          onChange={form.handleFileChange}
        />
      </label>

      <label>
        Occupancy Permit
        <input
          type="file"
          name="occupancyPermit"
          onChange={handleFileChange}
        />
      </label>

      <label>
        CEDULA
        <input
          type="file"
          name="cedula"
          onChange={form.handleFileChange}
        />
      </label>

      <label>
        Photo (Interior)
        <input
          type="file"
          name="photoOfBusinessEstInt"
          accept="image/*"
          onChange={form.handleFileChange}
        />
      </label>

      <label>
        Photo (Exterior)
        <input
          type="file"
          name="photoOfBusinessEstExt"
          accept="image/*"
          onChange={form.handleFileChange}
        />
      </label>
    </section>
  );
}
