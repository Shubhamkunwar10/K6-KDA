import http from 'k6/http';
import { sleep } from 'k6';
import { randomString, randomItem, randomIntBetween, uuidv4 } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';


const device_id = "5678-5678-5678-1234"
const userNewPassword="Rabbit@12345"
const loginOtpUser = "12345"

export let options = {
  vus: 1, // Virtual users
  // duration: "40s"
};

const KdaUrl = "https://api-kda-dev.c3ihub.org"

const soOrWoNames = ['so', 'wo'];
const genders = ['MALE', 'FEMALE',];
const org = ['CITIZEN', 'CITIZEN',];


// Generate a random user object
function generateUser() {
  let name = Math.random().toString(36).substring(7);
  let soOrWoName = randomItem(soOrWoNames);
  let dob = '01/01/1990';
  let gender = randomItem(genders);
  let registrationType = randomItem(org)
  let mobileNumber = '9876543210';
  let email = `ankitt12@c3ihub.iitk.ac.in`;
  let aadhaarNumber = Math.floor(100000000000 + Math.random() * 900000000000).toString().substring(0, 12);
  let photo = Math.floor(Math.random() * 1000000).toString();
  let address = {
    address: 'lapata ganj',
    city: 'Mumbai',
    state: 'gumnnaan',
    pincode: Math.floor(Math.random() * 900000) + 100000,
    country: 'India',
  };
  let aadhaar ="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"

  return {
    name,
    soOrWoName,
    dob,
    gender,
    registrationType,
    mobileNumber,
    email,
    aadhaarNumber,
    photo,
    address,
    aadhaar,
  };
}

function generateOfficer() {
  let name = Math.random().toString(36).substring(7);
  let password ="Rabbit@1234";
  let soOrWoName = randomItem(soOrWoNames);
  let dob = '01/01/1990';
  let gender = randomItem(genders);
  let mobileNumber = '9876543210';
  let email = `${name}@example.com`;
  let photo = Math.floor(Math.random() * 1000000).toString();
  let address = {
    address: 'lapata ganj',
    city: 'Mumbai',
    state: 'gumnnaan',
    pincode: Math.floor(Math.random() * 900000) + 100000,
    country: 'India',
  };


  return {
    name,
    password,
    soOrWoName,
    dob,
    gender,
    mobileNumber,
    email,
    photo,
    address,
  };
}

// Main test scenario
export default function () {
  
  // Generate a random user object
  const user = generateUser();
  const officer = generateOfficer()
  console.log(user)

  //   Make a POST request to the /register endpoint with the random user object
  const registerResponse = http.post(`${KdaUrl}/register`, JSON.stringify(user), {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  //   Log the response status code and body
  // console.log(`Register status code: ${registerResponse.status}`);
  console.log(`Register response body: ${registerResponse.body} ${user.aadhaarNumber}`);
  const registrationOutput=JSON.parse(registerResponse.body)
  const registerationId=registrationOutput.data.registrationId


  

  const verifyKdaUser = http.post(`${KdaUrl}/registration/approve`,  JSON.stringify({
    registrationId: registerationId
}), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(JSON.parse(verifyKdaUser.body),"verified")






  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  


  // Make a POST request to the /login endpoint to obtain a transaction id

  const loginWithAadhaar = (aadhaarNo) => {
    // Make a POST request to the /login endpoint with the provided Aadhaar number
    const loginResponse = http.post(`${KdaUrl}/auth/applicant/login`, JSON.stringify({
      aadhaarNo: aadhaarNo,
      deviceId: device_id,
      dob: user.dob
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
  const loginResponse=loginWithAadhaar(user.aadhaarNumber)


  // console.log(`User Login response body: ${loginResponse.body}`);

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

  const verifyLogin=verifyLoginResponse(user.aadhaarNumber,trxIdUserLogin)

  // // Log the response status code, body, and headers
  // console.log(`Verify User login status code: ${verifyLoginResponse.status}`);
  console.log(`Verify User login response body: ${verifyLogin.body}`);

  // Extract the JST Token from the response body

  const refreshAccessToken = JSON.parse(verifyLogin.body);
  const login_Access_Token = refreshAccessToken.data.accessToken

  console.log(login_Access_Token)
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//function to create password account
const createAccountPassword = (login_Access_Token, userNewPassword) => {
  const endpoint = `${KdaUrl}/user/create`;
  const data = JSON.stringify({
    password: userNewPassword,
  });

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${login_Access_Token}`,
  };

  const response = http.post(endpoint, data, { headers });

  // // Log the response status code, body, and headers
  // console.log(`Create account User status code: ${response.status}`);
  console.log(`Create account User response body: ${response.body}`);

  return response; // Return the response for further processing if needed
};

  const createPasswordforUser1=createAccountPassword(login_Access_Token,userNewPassword)

// console.log("Account created")
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  //login again
  const loginResponse1main=loginWithAadhaar(user.aadhaarNumber)


  // Log the response status code, body, and headers
  // console.log(`User Login status code: ${loginResponse.status}`);
  // console.log(`User Login response body: ${loginResponse.body}`);

  // Extract the transaction id from the response body
  const responseJsonmain = JSON.parse(loginResponse1main.body);
  const trxIdUserLoginmain = responseJsonmain.data.trxId;


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //verify login
  const verifyLoginResponse1main=verifyLoginResponse(user.aadhaarNumber,trxIdUserLoginmain)

  // // Log the response status code, body, and headers
  // console.log(`Verify User login status code: ${verifyLoginResponse.status}`);
  // console.log(`Verify User login response body: ${verifyLoginResponse.body}`);

  // Extract the JST Token from the response body

  const refreshAccessTokenmain = JSON.parse(verifyLoginResponse1main.body);



  const login_Access_Tokenmain = refreshAccessTokenmain.data.accessToken


  console.log(" login access token of user",user.aadhaarNumber,login_Access_Tokenmain)

  // console.log("login_Access_Token", login_Access_Token)


  // // Make a post request to kda/officer/register endpoint to to resgister officer
  // const registerOfficer = http.post(`${KdaUrl}/kda/officer/register`, JSON.stringify(officer), {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${login_Access_Tokenmain}`
  //   },
  // });

  // // console.log(`Register officer status code: ${registerOfficer.status}`);
  // console.log(`Register officer response body: ${registerOfficer.body}`);
  // // console.log(`Register officer response headers: ${JSON.stringify(registerOfficer.headers)}`);

  // //print KDAofficerId
  // const output = JSON.parse(registerOfficer.body);


}





// User to test


// INFO[0000] {"name":"3abpo9","soOrWoName":"wo","dob":"01/01/1990","gender":"MALE","registrationType":"CITIZEN","mobileNumber":"9876543210","email":"3abpo9@example.com","aadhaarNumber":"596457314573","photo":"552454","address":{"address":"lapata ganj","city":"Mumbai","state":"gumnnaan","pincode":225226,"country":"India"},"aadhaar":{"file_type":"pdf","file_data":"JVBERi0xLjQKJ..."}}  source=console
// INFO[0000] {"name":"kfx09p","soOrWoName":"so","dob":"01/01/1990","gender":"FEMALE","registrationType":"ORGANIZATION","mobileNumber":"9876543210","email":"kfx09p@example.com","aadhaarNumber":"426864021803","photo":"244135","address":{"address":"lapata ganj","city":"Mumbai","state":"gumnnaan","pincode":723989,"country":"India"},"aadhaar":{"file_type":"pdf","file_data":"JVBERi0xLjQKJ..."}}  source=console
// INFO[0000] {"name":"4d3q64","soOrWoName":"so","dob":"01/01/1990","gender":"FEMALE","registrationType":"ORGANIZATION","mobileNumber":"9876543210","email":"4d3q64@example.com","aadhaarNumber":"224796063531","photo":"344308","address":{"address":"lapata ganj","city":"Mumbai","state":"gumnnaan","pincode":242732,"country":"India"},"aadhaar":{"file_type":"pdf","file_data":"JVBERi0xLjQKJ..."}}  source=console
// INFO[0000] {"name":"bxcpjf","soOrWoName":"so","dob":"01/01/1990","gender":"FEMALE","registrationType":"ORGANIZATION","mobileNumber":"9876543210","email":"bxcpjf@example.com","aadhaarNumber":"363740138604","photo":"174243","address":{"address":"lapata ganj","city":"Mumbai","state":"gumnnaan","pincode":194081,"country":"India"},"aadhaar":{"file_type":"pdf","file_data":"JVBERi0xLjQKJ..."}}  source=console
// INFO[0000] {"name":"7tke1j","soOrWoName":"wo","dob":"01/01/1990","gender":"FEMALE","registrationType":"CITIZEN","mobileNumber":"9876543210","email":"7tke1j@example.com","aadhaarNumber":"810462909183","photo":"241678","address":{"address":"lapata ganj","city":"Mumbai","state":"gumnnaan","pincode":891388,"country":"India"},"aadhaar":{"file_type":"pdf","file_data":"JVBERi0xLjQKJ..."}}  source=console
// INFO[0002] Register status code: 200                     source=console
// INFO[0002] Register response body: {"success": true, "data": {"registrationId": "KDAUSER01354"}}  source=console                                                                                                                                             
// INFO[0002] Register status code: 200                     source=console
// INFO[0002] Register response body: {"success": true, "data": {"registrationId": "KDAUSER01353"}}  source=console                                                                                                                                             
// INFO[0002] Register status code: 200                     source=console
// INFO[0002] Register response body: {"success": true, "data": {"registrationId": "KDAUSER01355"}}  source=console                                                                                                                                             
// INFO[0002] Register status code: 200                     source=console                                                                                                                                                                                      
// INFO[0002] Register response body: {"success": true, "data": {"registrationId": "KDAUSER01356"}}  source=console                                                                                                                                             
// INFO[0002] Register status code: 200                     source=console                                                                                                                                                                                      
// INFO[0002] Register response body: {"success": true, "data": {"registrationId": "KDAUSER01357"}}  source=console                                                                                                                                             
// INFO[0007] Register officer response body: {"success": true, "data": {"userId": "KDAOFSR00366"}}  source=console
// INFO[0007] Register officer response body: {"success": true, "data": {"userId": "KDAOFSR00367"}}  source=console
// INFO[0007] Register officer response body: {"success": true, "data": {"userId": "KDAOFSR00369"}}  source=console
// INFO[0007] Register officer response body: {"success": true, "data": {"userId": "KDAOFSR00368"}}  source=console                                                                                                                                             
// INFO[0007] Register officer response body: {"success": true, "data": {"userId": "KDAOFSR00370"}}  source=console
                                                                                                                       