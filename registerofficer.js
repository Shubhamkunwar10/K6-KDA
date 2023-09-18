import http from 'k6/http';
import { sleep } from 'k6';
import { randomString, randomItem, randomIntBetween, uuidv4 } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

const officerPassword="somePassword1="
const device_id = "5678-5678-5678-1234"
const user_login_Access_Token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFVU0VSMDAxODkiLCJ1c2VybmFtZSI6ImNtMmYycCIsInJvbGUiOiJVU0VSIiwidXNlcl90eXBlIjoiVVNFUiIsImV4cCI6MTY4NDQwNTM0MiwiaWF0IjoxNjg0MzE4OTQyLCJ0b2tlbl9pZCI6ImY5NDhhMWI3LTc2NGUtNGUzMi05OWY3LWNjMjFkNDhkYTNiYyJ9.XoxFVzm_NuEebQyihMq472_Agd-G07YiCjsFE72LeYY"

export let options = {
  vus: 1, // Virtual users
  duration: "120s"
};

// const KdaUrl = "https://api-kda-dev.c3ihub.org"
const KdaUrl = "https://api-kda-staging.c3ihub.org"

const soOrWoNames = ['so', 'wo'];
const genders = ['MALE', 'FEMALE',];
const org = ['ORGANIZATION', 'CITIZEN',];


// Generate a random user object
function generateOfficer() {

  let name = Math.random().toString(36).substring(7);
  let mobileNumber = '9876543210';
  let email = `metaland6000@gmail.com`;
  let password= "somePassword1="

  return {
    name,
    password,
    mobileNumber,
    email,
  };
}

// Main test scenario
export default function () {
  
  // Generate a random user object
  const officer = generateOfficer()
 

  // Make a post request to kda/officer/register endpoint to to resgister officer
  const registerOfficer = http.post(`${KdaUrl}/kda/officer/register`, JSON.stringify(officer), {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user_login_Access_Token}`
    },
  });

  // console.log(`Register officer status code: ${registerOfficer.status}`);
  // console.log(`Register officer response body: ${registerOfficer.body}`);
  // console.log(`Register officer response headers: ${JSON.stringify(registerOfficer.headers)}`);

  //print KDAofficerId
  const output = JSON.parse(registerOfficer.body);
  console.log(output)
  console.log(output.data.userId)




  //login new officer
  
      //function to login officer   
      function officerLogin(officerID) {
        try {
          const response =  http.post(`${KdaUrl}/auth/kda/login`, JSON.stringify({
            userId:officerID,
            deviceId:device_id,
            password:"somePassword1="
      }), {
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          // Log the response status code, body, and headers
          // console.log(`officer login status code: ${response.status}`);
          // console.log(`officer login response body: ${response.body}`);
          // console.log(`officer login response headers: ${JSON.stringify(response.headers)}`);
      
          // Extract the transaction id from the response body
          const responseJsonfromOfficerLogin = JSON.parse(response.body);
          const access_token_login_officer=responseJsonfromOfficerLogin.data.accessToken;
          // console.log("dfg",access_token_login_officer);
          
          return access_token_login_officer;
        } catch (error) {
          console.error(error);
          throw error;
        }
          }

const loginOfficerToken=officerLogin(output.data.userId)

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
  
    const createPasswordforUser=createAccountPassword(loginOfficerToken,officerPassword)

    console.log(JSON.parse(createPasswordforUser.body))
    const loginOfficerTokenAgainn=officerLogin(output.data.userId)
    console.log(loginOfficerTokenAgainn )

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
                                                                                                                       