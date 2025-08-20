import { useEffect } from "react";

export default function Step4BusinessAddress({ form, handleChange }) {
  // ✅ Hardcoded San Pablo City barangays (replace/add as needed)

  
  const barangays = [
              "ATISAN",
              "BAGONG BAYAN II-A (POB.)",
              "BAGONG POOK VI-C (POB.)",
              "BARANGAY I-A (POB.)",
              "BARANGAY I-B (POB.)",
              "BARANGAY II-A (POB.)",
              "BARANGAY II-B (POB.)",
              "BARANGAY II-C (POB.)",
              "BARANGAY II-D (POB.)",
              "BARANGAY II-E (POB.)",
              "BARANGAY II-F (POB.)",
              "BARANGAY III-A (POB.)",
              "BARANGAY III-B (POB.)",
              "BARANGAY III-C (POB.)",
              "BARANGAY III-D (POB.)",
              "BARANGAY III-E (POB.)",
              "BARANGAY III-F (POB.)",
              "BARANGAY IV-A (POB.)",
              "BARANGAY IV-B (POB.)",
              "BARANGAY IV-C (POB.)",
              "BARANGAY V-A (POB.)",
              "BARANGAY V-B (POB.)",
              "BARANGAY V-C (POB.)",
              "BARANGAY V-D (POB.)",
              "BARANGAY VI-A (POB.)",
              "BARANGAY VI-B (POB.)",
              "BARANGAY VI-D (POB.)",
              "BARANGAY VI-E (POB.)",
              "BARANGAY VII-A (POB.)",
              "BARANGAY VII-B (POB.)",
              "BARANGAY VII-C (POB.)",
              "BARANGAY VII-D (POB.)",
              "BARANGAY VII-E (POB.)",
              "BAUTISTA",
              "CONCEPCION",
              "DEL REMEDIO",
              "DOLORES",
              "SAN ANTONIO 1",
              "SAN ANTONIO 2",
              "SAN BARTOLOME",
              "SAN BUENAVENTURA",
              "SAN CRISPIN",
              "SAN CRISTOBAL",
              "SAN DIEGO",
              "SAN FRANCISCO",
              "SAN GABRIEL",
              "SAN GREGORIO",
              "SAN IGNACIO",
              "SAN ISIDRO",
              "SAN JOAQUIN",
              "SAN JOSE",
              "SAN JUAN",
              "SAN LORENZO",
              "SAN LUCAS 1",
              "SAN LUCAS 2",
              "SAN MARCOS",
              "SAN MATEO",
              "SAN MIGUEL",
              "SAN NICOLAS",
              "SAN PEDRO",
              "SAN RAFAEL",
              "SAN ROQUE",
              "SAN VICENTE",
              "SANTA ANA",
              "SANTA CATALINA",
              "SANTA CRUZ",
              "SANTA ELENA",
              "SANTA FELOMINA",
              "SANTA ISABEL",
              "SANTA MARIA",
              "SANTA MARIA MAGDALENA",
              "SANTA MONICA",
              "SANTA VERONICA",
              "SANTIAGO I",
              "SANTIAGO II",
              "SANTISIMO ROSARIO",
              "SANTO ANGEL",
              "SANTO CRISTO",
              "SANTO NIÑO",
              "SOLEDAD"
  ];

  useEffect(() => {
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
          {barangays.map((brgy) => (
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
