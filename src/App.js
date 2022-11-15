
import "./App.css";

function App() {
  return (
    <section className="Section">
      <div className="main">
        <h2>Registration Form</h2>
        <div className="container">
          <form action="submit">
            <div className="fName sec"> <label for="fname">First Name</label>
              <input type="text" name="firstName" id="fname" placeholder="Enter your first name" />
            </div>
            <div className="lName sec"> <label for="lname">Last Name</label>
              <input type="text" name="lastName" id="lname" placeholder="Enter your last name" />
            </div>
            <div className="address sec"> <label for="address">Address</label>
              <input type="text" name="address" id="address" placeholder="Enter your address" />
            </div>
            <div className="profile sec">
              <label for="photo">Image</label>
              <input type="file" name="photo" id="photo" />
            </div>
            <div className="dob sec">
              <label for="dob">Date of Birth</label>
              <input type="date" name="dob" id="dob" />
            </div>

            <div className="gen sec">
              <label for="gender">Gender:</label>
              <select name="gender" id="gender">
                <option selected disabled>Select</option>
                <option value="male"> Male </option>
                <option value="female">Female </option>
                <option value="other"> Other </option>
              </select>
            </div>
            <div className="email sec"> <label for="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="num sec"> <label for="number">Number</label>
              <input type="number" name="number" id="number" placeholder="Enter your number" />
            </div>
            <div className="btn">
              <button type="reset">Cancel</button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default App; 
