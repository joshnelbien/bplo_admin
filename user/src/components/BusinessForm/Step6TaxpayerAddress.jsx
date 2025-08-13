
export default function Step6LessorsInfo({ form, handleChange }) {
  return (
    <section>
            <h2>Taxpayer’s Address</h2>

            <label>
              Region
              <input
                type="text"
                name="Taxregion"
                value={form.Taxregion}
                onChange={handleChange}
              />
            </label>

            <label>
              Province
              <input
                type="text"
                name="Taxprovince"
                value={form.Taxprovince}
                onChange={handleChange}
              />
            </label>

            <label>
              City/Municipality
              <input
                type="text"
                name="TaxcityOrMunicipality"
                value={form.TaxcityOrMunicipality}
                onChange={handleChange}
              />
            </label>

            <label>
              Barangay
              <input
                type="text"
                name="Taxbarangay"
                value={form.Taxbarangay}
                onChange={handleChange}
              />
            </label>

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

            <label>
              Own Place
              <input
                type="text"
                name="ownPlace"
                value={form.ownPlace}
                onChange={handleChange}
              />
            </label>
          </section>
  );
}
