export default function Step1BusinessInfo({ form, handleChange }) {
  // Mapping business type → registration label
  const regLabelMap = {
    "Sole Proprietorship": "DTI Registration No.",
    "Corporation": "SEC Registration No.",
    "One Person Corporation": "SEC Registration No.",
    "Partnership": "SEC Registration No.",
    "Cooperative": "CDA Registration No.",
  };

  // Default to generic label if none matches
  const regLabel =
    regLabelMap[form.BusinessType] || "Registration No.";

  return (
    <section>
      <h2>Business Information</h2>

      {/* Business Type Dropdown */}
      <label>
        Business Type
        <select
          name="BusinessType"
          value={form.BusinessType}
          onChange={handleChange}
        >
          <option value="">Select Business Type</option>
          <option value="Sole Proprietorship">Sole Proprietorship</option>
          <option value="Corporation">Corporation</option>
          <option value="One Person Corporation">One Person Corporation</option>
          <option value="Partnership">Partnership</option>
          <option value="Cooperative">Cooperative</option>
        </select>
      </label>

      {/* Dynamic Registration No. */}
      <label>
        {regLabel}
        <input
          type="text"
          name="dscRegNo"
          value={form.dscRegNo}
          onChange={handleChange}
        />
      </label>

      {/* Business Name */}
      <label>
        Business Name
        <input
          type="text"
          name="businessName"
          value={form.businessName}
          onChange={handleChange}
        />
      </label>

      {/* TIN No */}
      <label>
        TIN No.
        <input
          type="text"
          name="tinNo"
          value={form.tinNo}
          onChange={handleChange}
        />
      </label>

      {/* Trade Name */}
      <label>
        Trade Name
        <input
          type="text"
          name="TradeName"
          value={form.TradeName}
          onChange={handleChange}
        />
      </label>
    </section>
  );
}
