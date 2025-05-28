const statColors = {
  0: 'rgb(158, 232, 101)',
  1: 'rgb(245, 222, 105)',
  2: 'rgb(240, 154, 101)',
  3: 'rgb(102, 216, 246)',
  4: 'rgb(137, 158, 234)',
  5: 'rgb(228, 108, 202)',


}

function calcTotal(values) {
  const total = (values || []).reduce((acc, value) => acc + value, 0);
  console.log('Total:', total);
  return total || 'Nothing to show';
}



function StatChart({ chartDetails, color }) {

  return (
    <>
      <div className="stat-chart-section">
        <div className="stat-chart-box" style={{ backgroundColor: color }}>
          <div className="stat-chart-inner-box">
            <div className="stat-chart-inner-box-title">Stats</div>
            <div className="empty-space-lol">Total: {calcTotal(chartDetails?.values)}</div>
            <div className="stat-chart-inner-box-stats">
              {chartDetails?.labels.map((label, i) => (
                <div className="individual-stat-box" style={{ backgroundColor: statColors[i] }}><div className="individual-stat-label">
                  {label}:
                </div>
                  <div className="individual-stat-label">{chartDetails?.values[i]}</div></div>

              ))}

            </div>
            <div className="stat-chart-inner-box-bars">{chartDetails?.values.map((_, i) => {
              return <div className="individual-stat-bar" style={{ backgroundColor: statColors[i], width: Math.min(chartDetails?.values[i], 255) }}></div >
            })}
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default StatChart;
