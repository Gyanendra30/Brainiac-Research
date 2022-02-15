import { Image } from "./image";

export const Gallery = (props) => {
  console.log(props.data)
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>PRICING PLANS</h2>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? props.data.map((d, i) => {
                return <div key={`${i}`} className='subItem col-sm-6 col-md-3 col-lg-3'>
                  <h1>{d.key}</h1>
                  {
                    Object.keys(d.data).map((n, ni) => (
                      <li className="subLi"><span className="first">{n}</span> - <span className="second">{d.data[n]}</span></li>
                    ))
                  }
                </div>
              })
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}
