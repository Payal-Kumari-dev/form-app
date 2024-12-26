import "./Signup.css";


const Signup = () => {


    return (
        <div>
            <h4>Signup Page</h4>
            <label class="Username">Username:</label><br></br>
            <input placeholder="Username" id="eee"></input><br></br>
            <label class="email">Email:</label><br></br>
            <input placeholder="Enter your email" id="aaa"></input><br></br>
            <label class="password">Password:</label><br></br>
            <input placeholder="**********" id="bbb"></input><br></br>
            <label class="help-block" >Confirm Password :</label><br></br>
            <input placeholder="**********" id="fff"></input><br></br>
            <span class="help-blocked">enter same password in both fields.</span><br></br>
            <input placeholder="Sign up" id="ddd"></input><br></br>
            <h6>OR</h6>
            <div>
            <input placeholder='Sign in with google' id="ccc"></input><br></br>
            <h6>Already have an account?</h6><h5>Log in</h5>
            </div>

        </div>



    );
};

export default Signup;
