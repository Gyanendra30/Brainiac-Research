export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container" style={{ marginTop:"-10px"}}>
        <div className="section-title">
          <h2>Our Services</h2>
          
        </div>
        <div className="row serviceRow">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="serviceModal col-md-6">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p class="match-parent">{d.text}</p>
                  </div>
                  <div className="col-md-12">
                    <ul class="investment">
                      {d
                        ? d.investment.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
