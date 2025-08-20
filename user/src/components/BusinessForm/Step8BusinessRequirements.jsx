export default function Step8BusinessRequirements({ handleFileChange }) {
  return (
    <section>
      <h2>Business Requirements</h2>

      <label>
        Proof of Registration
        <input
          type="file"
          name="proofOfReg"
          onChange={handleFileChange}
        />
      </label>

      <label>
        Right to Use Location
        <input
          type="file"
          name="proofOfRightToUseLoc"
          onChange={handleFileChange}
        />
      </label>

      <label>
        Location Plan
        <input
          type="file"
          name="locationPlan"
          onChange={handleFileChange}
        />
      </label>

      <label>
        Barangay Clearance
        <input
          type="file"
          name="brgyClearance"
          onChange={handleFileChange}
        />
      </label>

      <label>
        Market Clearance
        <input
          type="file"
          name="marketClearance"
          onChange={handleFileChange}
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
          onChange={handleFileChange}
        />
      </label>

      <label>
        Photo (Interior)
        <input
          type="file"
          name="photoOfBusinessEstInt"
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>

      <label>
        Photo (Exterior)
        <input
          type="file"
          name="photoOfBusinessEstExt"
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>
    </section>
  );
}
