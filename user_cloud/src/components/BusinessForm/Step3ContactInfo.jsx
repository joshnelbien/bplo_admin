
export default function Step3ContactInfo({ form, handleChange }) {
  return (
    <section>
      <h2>Contact Information</h2>

      <label>
        Email Address
        <input
          type="email"
          name="eMailAdd"
          value={form.eMailAdd}
          onChange={handleChange}
          placeholder="example@email.com"
          required
        />
      </label>

      <label>
        Telephone Number
        <input
          type="tel"
          name="telNo"
          value={form.telNo}
          onChange={(e) => {
            let numbers = e.target.value.replace(/\D/g, "").slice(0, 7);
            handleChange({
              target: { name: "telNo", value: numbers },
            });
          }}
          placeholder="1234567"
          pattern="\d{7}"
          title="Enter 7-digit telephone number"
        />
      </label>

      <label>
        Mobile Number
        <input
          type="tel"
          name="mobileNo"
          value={form.mobileNo}
          onChange={(e) => {
            let numbers = e.target.value.replace(/\D/g, "").slice(0, 11);
            handleChange({
              target: { name: "mobileNo", value: numbers },
            });
          }}
          placeholder="09123456789"
          pattern="09\d{9}"
          title="Enter 11-digit mobile number starting with 09"
          required
        />
      </label>
    </section>
  );
}
