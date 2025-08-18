export default function Step2PersonalInfo({ form, handleChange }) {
  return (
    <section>
      <h2>Owner's Personal Information</h2>

      <label>
        First Name
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        />
      </label>

      <label>
        Middle Name
        <input
          type="text"
          name="middleName"
          value={form.middleName}
          onChange={handleChange}
        />
      </label>

      <label>
        Last Name
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />
      </label>

      <label>
        Ext Name
        <input
          type="text"
          name="extName"
          value={form.extName}
          onChange={handleChange}
        />
      </label>

      <label>
        Sex
        <select name="sex" value={form.sex} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
    </section>
  );
}
