export const Disclaimer = (props) => {
  return (
    <>
    <div id='disclaimer'>
      
      <div className='container'>
        <div className='row' style={{margin: "25px"}}>
          {props.data
            ? props.data.map((d) => (
                <div className='col-xs-12'>
                  <p className="note">{d.text}</p>
                  <p className="warning">{d.text2}</p>
                  <ul className="disclosure">
                    {d
                      ? d.Disclosure.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>  
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>

      
    </div>

<div id='footer'>
<div className='container text-center'>
  <p style={{backgroundColor:"#fff"}}>
    &copy; 2022 Design by{' '}
    <a href='http://www.templatewire.com' rel='nofollow'>
    CodeWare Technologies
    </a>
  </p>

</div>

</div>
</>


  )
}
