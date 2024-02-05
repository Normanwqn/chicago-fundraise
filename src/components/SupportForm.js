import React from 'react';
import '../style/SupportForm.css';

function SupportForm() {
  return (
    <div className="container">
      {/* <div className="row"> */}
        <p style={{"margin-bottom": 0}}>Electronic giving is available at:
          <a href={"http://hmcc.tech/sbmp24"}
            className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover mx-1 my-1">hmcc.tech/sbmp24</a>
          but please note there is an additional administrative fee.</p>
      {/* </div> */}
      <hr style={{"border-top": "3px dotted"}}/>
      <div className="row">
        <form>
          <div className={'row'}>
            <div className="form-group col-md-6 col-lg-6 col-sm-12 col-xs-12">
              <label htmlFor="name">Name</label>
              <input type="email" className="form-control" id="name" />
              <label htmlFor="phone">Phone</label>
              <input type="tel" className="form-control" id="Address" />
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
              <label htmlFor="name">Address</label>
              <textarea className="form-control" id="name"
                style={{ height: '87%' }} />
            </div>
          </div>
        </form>
      </div>
      {/*<div className="row">*/}
      {/*<div className="form-group col-md-6 col-lg-6 col-sm-12 col-xs-12">*/}
      {/*  </div>*/}
      {/*  <div className="form-group col-md-6 col-lg-6 col-sm-12 col-xs-12">*/}
      {/*    <label htmlFor="phone">Phone</label>*/}
      {/*    <input type="tel" className="form-control" id="phone"/>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className={'row'}>*/}
      {/*<hr/>*/}
      {/*</div>*/}
      <div className={'row mt-3'}>
        <form>

          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox"
                id="supportPrayer" />
              <label className="form-check-label" htmlFor="supportPrayer">
                I would like to support Norman Wen through prayer
              </label>
            </div>
            <div className="form-check">
              {/* <div class='row'> */}
                {/* <div className='col-9'> */}
                  <input className="form-check-input" type="checkbox" id="supportFinancial" />
                  <label className="form-check-label" htmlFor="supportFinancial">
                    I would like to support Norman Wen through financial support in the amount of $
                  </label>
                {/* </div> */}
                {/* <div className="col-3"> */}
                  <input type="text" className="form-control inline-input ml-1" placeholder="" />
                {/* </div> */}
              {/* </div> */}
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox"
                id="taxStatement" />
              <label className="form-check-label" htmlFor="taxStatement">
                Please check here if you would like a giving statement for tax
                purposes.
              </label>
            </div>

          </div>
          <div className="form-group mt-3 fst-italic text-center">
            <p className="">Please make checks payable to "<strong>HMI-P</strong>" and include the  
            <strong> full name
              of the team member and "SBMP 24"</strong> in the memo. <br/>
              You may mail
              contributions to: HMCC, 928 E Ann St, Ann Arbor, MI 48104.</p>
          </div>
          {/* <button type="submit" className="btn btn-primary">Submit</button> */}
        </form>
      </div>
      
    </div>
  );
}

export default SupportForm;
