import React from "react";
import { Link } from "react-router-dom";

function Account() {
  return (
    <div>
      <div>
        <div>
          <div>
            <p>Profile</p>
            <p>Joined in 2019</p>
          </div>

          <div>
            <p>Stanley Mayore</p>
            <Link>Change name</Link>
          </div>
        </div>

        <div>
          <p>Account Options</p>
          <p>Option1</p>
          <p>Option2</p>
          <div>
            <p>Nationality</p>
            <p>Kenyan</p>
          </div>

          <div>
            <p>Merchant ID</p>
            <p>LV3C2EXEWPYCJ</p>
          </div>

          <div>
            <p>National ID</p>
            <div>
              <p>3....21</p>
              <Link>Edit</Link>
            </div>
          </div>

          <Link>Add Passport</Link>

          <div>
            <p>Icon</p>
            <div>
              <p>Unlock new features like express checkout</p>
              <Link>Upgrade to a Business acount</Link>
            </div>
          </div>

          <div>
            <p>Icon</p>
            <p>Close your account</p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div>
            <p>Email</p>
            <Link>Add</Link>
          </div>

          <div>
            <p>Primary</p>
            <div>
              <p>stan@gmail.com</p>
              <Link>Change</Link>
            </div>
          </div>

          <p>
            To update an email address, you must have at least two email
            addresses on file.
          </p>
        </div>

        <div>
          <div>
            <p>Phone Numbers</p>
            <Link>Add</Link>
          </div>

          <div>
            <div>
              <p>Mobile</p>
              <p>Primary</p>
            </div>
            <div>
              <p>07*****434</p>
              <Link>Change</Link>
            </div>
          </div>
        </div>

        <div>
          <div>
            <p>Addresses</p>
            <p>Add</p>
          </div>
          <div>
            <p>Primary</p>
            <div>
              <div>
                <p>209</p>
                <p>209</p>
                <p>Keroka</p>
                <p>Nyamira County 40202</p>
              </div>
              <Link>Edit</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
