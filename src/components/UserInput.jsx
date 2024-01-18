export default function UserInput({ data, handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            name="initial-investment"
            value={data.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            type="number"
            name="annual-investment"
            value={data.annualInvestment}
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            type="number"
            name="expected-return"
            value={data.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            name="duration"
            value={data.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
