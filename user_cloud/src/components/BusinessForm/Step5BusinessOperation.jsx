export default function Step5BusinessDetails({ form, handleChange }) {
  // Only allow digits & limit to 6 characters
  const handleNumberInput = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    handleChange({ target: { name: e.target.name, value } });
  };

  return (
    <section>
      <h2>Business Operation</h2>

      <label>
        Total Floor Area
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          name="totalFloorArea"
          value={form.totalFloorArea}
          onInput={handleNumberInput}
        />
      </label>

      <label>
        Total Employees
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          name="numberOfEmployee"
          value={form.numberOfEmployee}
          onInput={handleNumberInput}
        />
      </label>

      <label>
        Male Employees
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          name="maleEmployee"
          value={form.maleEmployee}
          onInput={handleNumberInput}
        />
      </label>

      <label>
        Female Employees
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          name="femaleEmployee"
          value={form.femaleEmployee}
          onInput={handleNumberInput}
        />
      </label>

      <label>
        Vehicle (Van)
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          name="numVehicleVan"
          value={form.numVehicleVan}
          onInput={handleNumberInput}
        />
      </label>

      <label>
        Vehicle (Truck)
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          name="numVehicleTruck"
          value={form.numVehicleTruck}
          onInput={handleNumberInput}
        />
      </label>

      <label>
        Vehicle (Motorcycle)
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          name="numVehicleMotor"
          value={form.numVehicleMotor}
          onInput={handleNumberInput}
        />
      </label>

      <label>
        Number of Nozzles
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          name="numNozzle"
          value={form.numNozzle}
          onInput={handleNumberInput}
        />
      </label>

      <label>
        Weighing Scale
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          name="weighScale"
          value={form.weighScale}
          onInput={handleNumberInput}
        />
      </label>
    </section>
  );
}
