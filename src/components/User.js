import React, { Component } from 'react'

class User extends Component
{
  render()
  {
    const { name} = this.props;
    return (
      <div className="col-md-8 mb-4">
        <div className='card'>
          <div className='card-header d-flex justify-content-between'>
          <h4 className="d-inline"> İsim: {name}</h4>
          <i className="fa fa-question" style={{ cursor: "pointer" }}></i></div>
          <form>
            <input type="text" />
            <button>Gönder</button>
          </form>

        </div>
      </div>
    )
  }
}

export default User;