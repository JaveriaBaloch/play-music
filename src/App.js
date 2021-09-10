import { Component } from "react";


class App extends Component{
render(){
    return(
        <div className="bg-dark text-white">
            <div className="container text-center pb-5">
            <div className="row py-3">
            <h1 className="h1 py-4">Play Music</h1>
               <div className="container">
               <div className="row g-0 my-5">
                <div className="col-6 ms-auto">
               <input className="form-control form-control-lg rounded-0 border-0" placeholder="Search your favourite Artist..."/>
               </div>
                <button className="btn btn-warning col-1 me-auto rounded-0">
                    <i class="fa fa-search"></i></button>
                </div>
                <div className="row g-3 my-5 py-5">
                  <div className="col-lg-5 col-md-5 col-sm-9">
                      <div className="card hoverable text-dark p-0 rounded-0">
                        <div className="card-body p-0 rounded-0">
                            <img className="card-img rounded-0" src="https://static.toiimg.com/thumb/msid-80172462,width-1200,height-900,resizemode-4/.jpg"/>
                          <div class="card-footer">
                              <div className="card-title display-5">
                             Atif Aslam
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="col-lg-7 col-md-9 ms-auto">
                    <div className="row">

                    </div>
                  </div>
                </div>
               </div>
            </div>
            </div>
        </div>)
}
}
export default App;