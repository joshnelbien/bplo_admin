
export default function Step1BusinessInfo({ form, handleChange }) {
  return (
    <section>
      <h2>Business Information</h2>

      <label>
        Business Type
        <select
          name="BusinessType"
          value={form.BusinessType}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Business Type --</option>
          <option value="sole_proprietorship">Sole Proprietorship</option>
          <option value="partnership">Partnership</option>
          <option value="corporation">Corporation</option>
        </select>
      </label>

      <label>
        DTI /SEC /CDA Registration No.
        <input
          type="text"
          name="dscRegNo"
          value={form.dscRegNo}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Business Name
        <input
          type="text"
          name="businessName"
          value={form.businessName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        TIN No
        <input
          type="tel"
          name="tinNo"
          value={form.tinNo}
          onChange={(e) => {
            let numbers = e.target.value.replace(/\D/g, "").slice(0, 12);
            let formatted = numbers;
            if (numbers.length > 3)
              formatted = numbers.slice(0, 3) + "-" + numbers.slice(3);
            if (numbers.length > 6)
              formatted = formatted.slice(0, 7) + "-" + formatted.slice(7);
            if (numbers.length > 9)
              formatted = formatted.slice(0, 11) + "-" + formatted.slice(11);
            handleChange({
              target: { name: "tinNo", value: formatted },
            });
          }}
          required
          placeholder="123-456-789-000"
          maxLength={15}
        />
      </label>

      <label>
        Trade Name
        <input
          type="text"
          name="TradeName"
          value={form.TradeName}
          onChange={handleChange}
          required
        />
      </label>
    </section>
  );
}
