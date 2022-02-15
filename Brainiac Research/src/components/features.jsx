export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>WHAT WE DO</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d) => (
                <div className='col-xs-12 fear'>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
