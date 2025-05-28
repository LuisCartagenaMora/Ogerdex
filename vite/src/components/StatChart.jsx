function StatChart({ chartDetails, color }) {
  return (
    <>
      <div className="stat-chart-section">
        <div className="stat-chart-box" style={{ backgroundColor: color }}>
          <div className="stat-chart-inner-box">
            <div className="stat-chart-inner-box-title">Stats</div>
            <div className="stat-chart-inner-box-stats">
              {chartDetails?.labels.map((label, i) => (
                <div className="individual-stat-label">
                  {label}
                  {chartDetails?.values[i]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatChart;
