import React, { Component } from 'react'

class User extends Component
{
  render()
  {
    const { name, department, salary } = this.props;
    return (
      <div>
        <ul>
          <li> İsim: {name}</li>
          <li> Bölüm: {department}</li>
          <li> Beklenti: {salary}</li>
          <form>
            <input type="text" />
            <button>Gönder</button>
          </form>
        </ul>
      </div>
    )
  }
}

export default User;