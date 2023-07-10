import http from 'k6/http';


const device_id = "5678-5678-5678-1234"
const userNewPassword="Rabbit@12345"
const loginOtpUser = "12345"

export let options = {
  vus: 1, // Virtual users
  // duration: "50s"
};

// const KdaUrl = "https://api-kda-staging.c3ihub.org"
const KdaUrl = "https://api-kda-dev.c3ihub.org"


const aadhaarNumber="578453726843"

// Generate a random user object
const dobb="01/01/1990"



// Main test scenario
export default function () {
  

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  


  // Make a POST request to the /login endpoint to obtain a transaction id

  const loginWithAadhaar = (aadhaarNo) => {
    // Make a POST request to the /login endpoint with the provided Aadhaar number
    const loginResponse = http.post(`${KdaUrl}/auth/applicant/login`, JSON.stringify({
      aadhaarNo: aadhaarNo,
      deviceId: device_id,
      dob: dobb
    }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    // Return the login response
    console.log(loginResponse.body)
    return loginResponse;
  }


  // console.log(user.aadhaarNumber)
  const loginResponse=loginWithAadhaar(aadhaarNumber)
  // Extract the transaction id from the response body
  const responseJson = JSON.parse(loginResponse.body);
  // console.log("responseJson",responseJson)
  const trxIdUserLogin = responseJson.data.trxId;

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // Make a POST request to the /login/verify endpoint with the transaction id


  const verifyLoginResponse = (aadhaarNo,trxIdUserLogin) => {
    // Make a POST request to the /login endpoint with the provided Aadhaar number
    const loginResponse = http.post(`${KdaUrl}/auth/applicant/login/verify`, JSON.stringify({
      aadhaarNo: aadhaarNo,
      otp: loginOtpUser,
      deviceId: device_id,
      trxId: trxIdUserLogin
    }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    // Return the login response

    return loginResponse;
  }

  const verifyLogin=verifyLoginResponse(aadhaarNumber,trxIdUserLogin)

  // // Log the response status code, body, and headers
  // console.log(`Verify User login status code: ${verifyLoginResponse.status}`);
  console.log(`Verify User login response body: ${verifyLogin.body}`);
  // Extract the JST Token from the response body
  const refreshAccessToken = JSON.parse(verifyLogin.body);
  const login_Access_Token = refreshAccessToken.data.accessToken

  console.log(login_Access_Token)
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  


}




