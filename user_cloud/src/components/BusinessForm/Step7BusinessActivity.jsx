
export default function Step7BusinessActivity({ form, handleChange }) {
  return (

          <section>
            <h2>Business Activity</h2>

            <label>
              Tax Incentives from Gov't
              <input
                type="text"
                name="tIGE"
                value={form.tIGE}
                onChange={handleChange}
              />
            </label>

            <label>
              Office Type
              <input
                type="text"
                name="officeType"
                value={form.officeType}
                onChange={handleChange}
              />
            </label>

            <label>
              Line of Business
              <input
                type="text"
                name="lineOfBusiness"
                value={form.lineOfBusiness}
                onChange={handleChange}
              />
            </label>

            <label>
              Product/Service
              <input
                type="text"
                name="productService"
                value={form.productService}
                onChange={handleChange}
              />
            </label>

            <label>
              Units
              <input
                type="text"
                name="Units"
                value={form.Units}
                onChange={handleChange}
              />
            </label>

            <label>
              Capital
              <input
                type="text"
                name="capital"
                value={form.capital}
                onChange={handleChange}
              />
            </label>
          </section>

  );
}
