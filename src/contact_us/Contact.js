import React, { useState } from 'react'

const Contact = () => {

  let data = { inputname: "", inputEmail: "", message: "" }
  const handleInput = (e) => {
    data = { ...data, [e.target.id]: e.target.value }
  }

  const handleSubmit = () => {
    console.log(data)
  }

  return (
    <>
      <div className="py-5" id="backgound" style={{
        backgroundImage: `url("https://static.toiimg.com/photo/72023714.cms")`
        , backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
      }}>
        <h1 class="text-center text-white mt-5 mb-5">CONTACT</h1>
      </div>
      <div className="container text-center mt-5">
        <div className="container d-flex justify-content-between ">
          <div className="col-3 jumbotron">
            <h4>Address</h4>
            <p className="text-muted">123, Banjara Hills,500040</p>
          </div>
          <div className="col-3 jumbotron">
            <h4>Phone</h4>
            <p className="text-warning">123-456-7890</p>
          </div>
          <div className="col-3 jumbotron">
            <h4>Email</h4>
            <p className="text-warning">foody@mysite.com</p>
          </div>
        </div>
        <div>
          <h1>DROP A LINE</h1>
          <p className="font-weight-bolder text-muted">Get In Touch</p>
        </div>
        <form >
          <div class="form-row justify-content-center">
            <div class="form-group col-lg-3">
              <input type="name" onChange={(e) => handleInput(e)} class="form-control input-lg form-rounded" id="inputname" placeholder="Your name*" required />
            </div>
            <div class="form-group col-lg-3">
              <input type="email" onChange={(e) => handleInput(e)} class="form-control input-lg form-rounded" id="inputEmail" placeholder="Your e-mail*" required />
            </div></div>
          <div class="form-row justify-content-center">
            <div class="form-group col-lg-6 justify-content-center">
              <textarea class="form-control input-lg form-rounded" onChange={(e) => handleInput(e)}  placeholder="Your message*" required></textarea>
            </div></div>
          <button type="submit" onClick={(e) => handleSubmit(e)} class="btn btn-warning btn-rounded font-weight-bolder text-white">SEND MESSAGE</button>
        </form>
      </div>
    </>
  )
}

export default Contact