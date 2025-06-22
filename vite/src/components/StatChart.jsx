const statColors = {
  0: "rgb(158, 232, 101)",
  1: "rgb(245, 222, 105)",
  2: "rgb(240, 154, 101)",
  3: "rgb(102, 216, 246)",
  4: "rgb(137, 158, 234)",
  5: "rgb(228, 108, 202)",
};

const barColors = {
  0: "rgb(112, 163, 72)",
  1: "rgb(170, 154, 76)",
  2: "rgb(177, 115, 76)",
  3: "rgb(75, 155, 177)",
  4: "rgb(96, 110, 160)",
  5: "rgb(161, 77, 143)",
};

function calcTotal(values) {
  const total = (values || []).reduce((acc, value) => acc + value, 0);
  return total || "Nothing to show";
}

function StatChart({ chartDetails, color }) {
  return (
    <div className="outer-stat-chart-section">
      <div className="stat-chart-section">
        <div className="stat-chart-box" style={{ backgroundColor: color }}>
          <div className="stat-chart-inner-box">
            <div className="stat-chart-inner-box-title">Stats</div>
            <div className="total-base-stat">
              Total Base Stat: {calcTotal(chartDetails?.values)}
            </div>

            {chartDetails?.labels.map((label, i) => {
              const value = chartDetails?.values[i] ?? 0;
              const percent = (Math.min(value, 255) / 255) * 100; // cap at 255
              return (
                <>
                  <div
                    className="individual-stat-box"
                    style={{
                      backgroundColor: statColors[i],
                      gridColumnStart: 1,
                    }}
                  >
                    <span className="individual-stat-label">{label}:</span>
                    <span>{value}</span>
                  </div>

                  {/* right-hand cell ─ bar */}
                  <div
                    className="individual-stat-bar"
                    style={{ backgroundColor: barColors[i] }}
                  >
                    <div
                      className="bar-fill"
                      style={{
                        backgroundColor: statColors[i],
                        width: `${percent}%`,
                        gridColumnStart: 2,
                      }}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatChart;
