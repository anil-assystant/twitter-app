import React, { useEffect } from "react";
import { getAuth, signInWithPopup, TwitterAuthProvider } from "@firebase/auth";
import {initializeApp} from "@firebase/app"
import { useNavigate } from "react-router-dom";
export default function () {
 const navigate = useNavigate();
  function login() {
    const firebaseConfig = {
      apiKey: "AIzaSyBIL83H-wW9PwMHS6ddwcSUwDDUOP8T9yA",
      authDomain: "twitter-api-12.firebaseapp.com",
      projectId: "twitter-api-12",
      storageBucket: "twitter-api-12.appspot.com",
      messagingSenderId: "741236863213",
      appId: "1:741236863213:web:b798534b35f4d2df4b5ce4",
      measurementId: "G-PWEBYGC0KF"
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new TwitterAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = TwitterAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const secret = credential.secret;
        
        // The signed-in user info.
        const user = result.user;
        console.log("token", token, "secret", secret)
        console.log(user)
        if(token) {
          localStorage.setItem("token", token);
          localStorage.setItem("secret", secret);
          localStorage.setItem("user", JSON.stringify(user))
          navigate("/")
        }
        // ...
      }).catch((error) => {
        console.log("Error in twitter login: ", error)
      });
  }


  return (
    <div id="login-card" className="container-fluid">
        <div className="logo" style={{display: "flex", flexDirection:'column', alignItems: "center"}}>
          <div>
            <img src={require('../../assets/logo.png')} style={{width:"160px"}} />
          </div>
          <div>
            <h4 className='mt-4 text-white fw-bold'>Hey User!</h4>
          </div>
          <div>
            <button onClick={login} className='text-uppercase 4 bg-white btn text-centersx'>Login with twitter</button>
          </div>
        </div>
    </div>
  );

}