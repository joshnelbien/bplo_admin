
export default function Step5BusinessDetails({ form, handleChange }) {
  return (
    <section>
            <h2>Business Operation</h2>

            <label>
              Total Floor Area
              <input
                type="text"
                name="totalFloorArea"
                value={form.totalFloorArea}
                onChange={handleChange}
              />
            </label>

            <label>
              Total Employees
              <input
                type="text"
                name="numberOfEmployee"
                value={form.numberOfEmployee}
                onChange={handleChange}
              />
            </label>

            <label>
              Male Employees
              <input
                type="text"
                name="maleEmployee"
                value={form.maleEmployee}
                onChange={handleChange}
              />
            </label>

            <label>
              Female Employees
              <input
                type="text"
                name="femaleEmployee"
                value={form.femaleEmployee}
                onChange={handleChange}
              />
            </label>

            <label>
              Vehicle (Van)
              <input
                type="text"
                name="numVehicleVan"
                value={form.numVehicleVan}
                onChange={handleChange}
              />
            </label>

            <label>
              Vehicle (Truck)
              <input
                type="text"
                name="numVehicleTruck"
                value={form.numVehicleTruck}
                onChange={handleChange}
              />
            </label>

            <label>
              Vehicle (Motorcycle)
              <input
                type="text"
                name="numVehicleMotor"
                value={form.numVehicleMotor}
                onChange={handleChange}
              />
            </label>

            <label>
              Number of Nozzles
              <input
                type="text"
                name="numNozzle"
                value={form.numNozzle}
                onChange={handleChange}
              />
            </label>

            <label>
              Weighing Scale
              <input
                type="text"
                name="weighScale"
                value={form.weighScale}
                onChange={handleChange}
              />
            </label>
          </section>
  );
}
