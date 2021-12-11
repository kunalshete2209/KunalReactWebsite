import React from 'react'



function Services() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container contact-div">
        <div className="row">
          <div className="col-md-5 col-10 mx-auto">

            <form>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Please Enter Your Name" />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Mobile Number" />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>

              <div class="mb-3">
               <label for="exampleFormControlTextarea1" class="form-label">Message</label>
               <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
 
              <div id="contactbutton"><button  type="submit" class="btn btn-secondary">Submit</button></div>

            </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default Services;