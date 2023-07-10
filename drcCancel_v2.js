import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 1, // Virtual usersz
//   duration: '3s', // Test duration
};

const KdaUrl="https://api-kda-dev.c3ihub.org"
const device_id="5678-5678-5678-1234"


//for applicants on tdr/application/create

const userRregistrationId="KDAUSER00202";  //343471014498
const userRregistrationId2="KDAUSER00206"; //899113997580
const userRregistrationId3="KDAUSER00207"; //173521727885
const userRregistrationId4="KDAUSER00208"; //187783361035


const userNewPassword="Rabbit@12345"
const loginOtpUser="1234565"

const KDAofficerId="KDAOFSR00381" 
const officerPassword="Rabbit@1234"



const officer_USER_MANAGER="KDAOFSR00383" //sahil
const officer_kda_registrar="KDAOFSR00384"
const officer_tdr_notice_manager="KDAOFSR00385" //shubham
const officer_TDR_APPLICATION_VERIFIER ="KDAOFSR00386" //anurag
const officer_TDR_APPLICATION_SUB_VERIFIER ="KDAOFSR00388"  //ankit
const officer_TDR_APPLICATION_SUB_VERIFIER1 ="KDAOFSR00517" 
const officer_TDR_APPLICATION_SUB_VERIFIER2 ="KDAOFSR00518" 
const officer_TDR_APPLICATION_SUB_VERIFIER3 ="KDAOFSR00519" 
const officer_TDR_APPLICATION_SUB_VERIFIER4 ="KDAOFSR00520" 
const officer_TDR_APPLICATION_SUB_VERIFIER5 ="KDAOFSR00521" 
const officer_Chief_planner="KDAOFSR00389"
const officer_Chief_engineer="KDAOFSR00392"
const officerDM="KDAOFSR00393" 
const officer_drcIssuer="KDAOFSR00394"
const officer_DTA_verifier="KDAOFSR00395"
const officer_DTA_Approver="KDAOFSR00396"
const officer_DRC_MANAGER ="KDAOFSR00397"
const officer_NOMINEE_MANAGER ="KDAOFSR00398"



const user_login_Access_Token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFVU0VSMDAyMDIiLCJ1c2VybmFtZSI6ImQ5bHkxIiwicm9sZSI6IlVTRVIiLCJ1c2VyX3R5cGUiOiJVU0VSIiwiZXhwIjoxNjg0NDA3Njg1LCJpYXQiOjE2ODQzMjEyODUsInRva2VuX2lkIjoiNjgzNWNkMzQtOTNmNy00NzM4LTg0NzUtZGFmNDhkM2MyOWMwIn0.VFAtZELc2tFWLSBPcYprgJqZHJjFHuwjyEPK5_FuKHg"
const user_login_Access_Token1="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFVU0VSMDAyMDYiLCJ1c2VybmFtZSI6InBid2s5cCIsInJvbGUiOiJVU0VSIiwidXNlcl90eXBlIjoiVVNFUiIsImV4cCI6MTY4NDQwNzc1NSwiaWF0IjoxNjg0MzIxMzU1LCJ0b2tlbl9pZCI6IjJhMWNmMTZkLWM2ZmMtNDMwOS05YjY3LWZhMjAxYmIwNTg2NSJ9.bKx9ikMZdwwijNjuQkRJUj5dW7pPDgCC3KuaZU0e9sI"
const user_login_Access_Token2="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFVU0VSMDAyMDciLCJ1c2VybmFtZSI6Inp1YXFkNyIsInJvbGUiOiJVU0VSIiwidXNlcl90eXBlIjoiVVNFUiIsImV4cCI6MTY4NDQwNzc4MiwiaWF0IjoxNjg0MzIxMzgyLCJ0b2tlbl9pZCI6ImRmOWQ3MWYzLWQxMWYtNGMyMi1hYjRhLTRmMTQwNjQ5NTFjYyJ9.HljepenN42RSTGm_urdcWJMK-0CAJLzJL0JlT9i-tAo"
const user_login_Access_Token3="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFVU0VSMDAyMDgiLCJ1c2VybmFtZSI6IjRneTF2ZSIsInJvbGUiOiJVU0VSIiwidXNlcl90eXBlIjoiVVNFUiIsImV4cCI6MTY4NDQwNzgwNiwiaWF0IjoxNjg0MzIxNDA2LCJ0b2tlbl9pZCI6ImYxOGExZDBhLTNjMmUtNDhlYi04ZmZjLTVlZGU0ZGU1ODVhZSJ9.9JWMGccQPcItn300s_E5m0d3JvAKa2kEnIt4E06pO0o"



// Main test scenario
export default function() {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  



    const addAdminInfo= http.post(`${KdaUrl}/kda/admin/addAdmin`, JSON.stringify({
      userId: KDAofficerId,
      designation: "VC",
      department: "land",
      zones: [1,2,3,4]
    }), {
      headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user_login_Access_Token}`,
    } 
  })



      // Log the response status code, body, and headers
      // console.log(`Add admin status code: ${addAdminInfo.status}`);
      console.log(`Add admin response body: ${addAdminInfo.body}`);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  




  //sign TrxId

    const signTrxnId = async (trxId, access_token_input) => {

      const endpoint = `${KdaUrl}/user/transaction/sign`

      const data = JSON.stringify({
        otp: loginOtpUser,
        password: officerPassword,
        trxId: trxId
      });

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token_input}`,
      };
        const responseTrxId = http.post(endpoint, data, { headers });
        const outputParse=JSON.parse(responseTrxId.body);
        console.log(outputParse.data);
    };

    //sign TrxId

    const signTrxnIdUser =(trxId, access_token_input) => {

      const endpoint = `${KdaUrl}/user/transaction/sign`

      const data = JSON.stringify({
        otp: loginOtpUser,
        password: userNewPassword,
        trxId: trxId
      });

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token_input}`,
      };
        const responseTrxId =http.post(endpoint, data, { headers });
        const responseHash=JSON.parse(responseTrxId.body).data
        console.log(trxId,"signed with info",responseHash)

    };



      //function to login officer   
      function officerLogin(officerID) {
        try {
          const response =  http.post(`${KdaUrl}/auth/kda/login`, JSON.stringify({
            userId:officerID,
            deviceId:device_id,
            password:officerPassword
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
          
          return access_token_login_officer;
        } catch (error) {
          console.error(error);
          throw error;
        }
          }



      
           // function to add officers
        const addOfficersInfo =async (userId,designation,department,access_token) => {

          const officerloginTrxID=http.post(`${KdaUrl}/kda/admin/addOfficer`, JSON.stringify({
            userId: userId,
            designation: `${designation}`,
            department: department,
            zones:[1]
          }), {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`,
          },
          });
         const officerloginTrxIDResponse=JSON.parse(officerloginTrxID.body)
         console.log("add officer info",officerloginTrxIDResponse)
         signTrxnId(officerloginTrxIDResponse.data.trxId,access_token)
          };



      //set role
      const setRole =async (userId,role,access_token) => {
        const endpoint = `${KdaUrl}/kda/admin/setRole`;
        
         const data = JSON.stringify({
          userId: userId,
          roles: [
                     role,
                    "DRC_MANAGER"
                  ]
         });
   
         const headers = {
           'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`,
        };
  
        const officerloginTrxID=http.post(endpoint, data, { headers });
        const officerloginTrxIDResponse=JSON.parse(officerloginTrxID.body)
        console.log("add officer roles info",officerloginTrxIDResponse)
        signTrxnId(officerloginTrxIDResponse.data.trxId,access_token)
      
      };



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  



// Make a POST request to /kda/admin/addOfficer endpoint to add officer role like vc, verifier,approver

const login_Access_Token_VC_role = officerLogin(KDAofficerId);
console.log("login_Access_Token_VC_role",login_Access_Token_VC_role)

// addOfficersInfo(officer_TDR_APPLICATION_SUB_VERIFIER ,"SUB_VERIFIER","LAND",login_Access_Token_VC_role)
// addOfficersInfo(officer_TDR_APPLICATION_SUB_VERIFIER1 ,"SUB_VERIFIER","PLANNING",login_Access_Token_VC_role)
// addOfficersInfo(officer_TDR_APPLICATION_SUB_VERIFIER2 ,"SUB_VERIFIER","ENGINEERING",login_Access_Token_VC_role)
// addOfficersInfo(officer_TDR_APPLICATION_SUB_VERIFIER3 ,"SUB_VERIFIER","PROPERTY",login_Access_Token_VC_role)
// addOfficersInfo(officer_TDR_APPLICATION_SUB_VERIFIER4 ,"SUB_VERIFIER","SALE",login_Access_Token_VC_role)
// addOfficersInfo(officer_TDR_APPLICATION_SUB_VERIFIER5 ,"SUB_VERIFIER","LEGAL",login_Access_Token_VC_role)

// const adduserManagerInfo=addOfficersInfo(officer_USER_MANAGER,"NONE",login_Access_Token_VC_role)

// const addKdaRegistrarInfo=addOfficersInfo(officer_kda_registrar,"NONE",login_Access_Token_VC_role)

// const addNoticeManagerInfo=addOfficersInfo(officer_tdr_notice_manager,"ADMIN",login_Access_Token_VC_role)

// const addTDRVerifierInfo=addOfficersInfo(officer_TDR_APPLICATION_VERIFIER,"VERIFIER",login_Access_Token_VC_role)

// const addTDRSubVerifierInfo=addOfficersInfo(officer_TDR_APPLICATION_SUB_VERIFIER ,"SUB_VERIFIER",login_Access_Token_VC_role)

// const addChiefPlannerInfo=addOfficersInfo(officer_Chief_planner,"CHIEF_TOWN_AND_COUNTRY_PLANNER",login_Access_Token_VC_role)

// const addCheifEngineerInfo=addOfficersInfo(officer_Chief_engineer,"CHIEF_ENGINEER",login_Access_Token_VC_role)

// const addDMInfo=addOfficersInfo(officerDM,"DM",login_Access_Token_VC_role)

// const addDrcIssuer=addOfficersInfo(officer_drcIssuer,"NONE",login_Access_Token_VC_role)

const addDtaVerifier=addOfficersInfo(officer_DTA_verifier,"NONE",login_Access_Token_VC_role)

// const addDtaApprover=addOfficersInfo(officer_DTA_Approver,"NONE",login_Access_Token_VC_role)

// const addDrcManager=addOfficersInfo(officer_DRC_MANAGER,"NONE",login_Access_Token_VC_role)

// const addNomineeManager=addOfficersInfo(officer_NOMINEE_MANAGER,"NONE",login_Access_Token_VC_role)


// const set_tdr_notice_managerRole=setRole(officer_tdr_notice_manager,"TDR_NOTICE_MANAGER",login_Access_Token_VC_role)
// const set_tdr_registrar_Role=setRole(officer_kda_registrar,"KDA_REGISTRAR",login_Access_Token_VC_role)
// //Create Role
// const setTDRVerifierRole=setRole(officer_TDR_APPLICATION_VERIFIER,"TDR_APPLICATION_VERIFIER",login_Access_Token_VC_role)
// const setTDRSubVerifierRole=setRole(officer_TDR_APPLICATION_SUB_VERIFIER,"TDR_APPLICATION_SUB_VERIFIER",login_Access_Token_VC_role)
// const setChiefPlannerRole=setRole(officer_Chief_planner,"TDR_APPLICATION_APPROVER_CHIEF_TOWN_AND_COUNTRY_PLANNER",login_Access_Token_VC_role)
// const setCheifEngineerRole=setRole(officer_Chief_engineer,"TDR_APPLICATION_APPROVER_CHIEF_ENGINEER",login_Access_Token_VC_role)
// const setDMRole=setRole(officerDM,"TDR_APPLICATION_APPROVER_DM",login_Access_Token_VC_role)
// const setdrcIssuerRole=setRole(officer_drcIssuer,"DRC_ISSUER",login_Access_Token_VC_role)
const setDTA_VERIFIERRole=setRole(officer_DTA_verifier,"DTA_VERIFIER",login_Access_Token_VC_role)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  



//create ACCOUNT OFFICER

    //login_again after creating account
    const login_Access_Token_User_manager_role_main = officerLogin(officer_USER_MANAGER);
    console.log("login_Access_Token_User_manager_role_main",login_Access_Token_User_manager_role_main)
    const login_Access_Token_KDA_Registrar_role_main = officerLogin(officer_kda_registrar);
    console.log("login_Access_Token_KDA_Registrar_role_main",login_Access_Token_KDA_Registrar_role_main)
    const login_Access_tdr_notice_manager_role_main = officerLogin(officer_tdr_notice_manager);
    console.log("login_Access_tdr_notice_manager_role_main",login_Access_tdr_notice_manager_role_main)
    const login_Access_TDR_APPLICATION_VERIFIER_main = officerLogin(officer_TDR_APPLICATION_VERIFIER);
    console.log("login_Access_TDR_APPLICATION_VERIFIER_main",login_Access_TDR_APPLICATION_VERIFIER_main)

    const login_Access_TDR_APPLICATION_SUB_VERIFIER_main = officerLogin(officer_TDR_APPLICATION_SUB_VERIFIER);
    console.log("login_Access_TDR_APPLICATION_SUB_VERIFIER_main",login_Access_TDR_APPLICATION_SUB_VERIFIER_main)
    const login_Access_TDR_APPLICATION_SUB_VERIFIER_main1 = officerLogin(officer_TDR_APPLICATION_SUB_VERIFIER1);
    console.log("login_Access_TDR_APPLICATION_SUB_VERIFIER_main",login_Access_TDR_APPLICATION_SUB_VERIFIER_main1)
    const login_Access_TDR_APPLICATION_SUB_VERIFIER_main2 = officerLogin(officer_TDR_APPLICATION_SUB_VERIFIER2);
    console.log("login_Access_TDR_APPLICATION_SUB_VERIFIER_main",login_Access_TDR_APPLICATION_SUB_VERIFIER_main2)
    const login_Access_TDR_APPLICATION_SUB_VERIFIER_main3 = officerLogin(officer_TDR_APPLICATION_SUB_VERIFIER3);
    console.log("login_Access_TDR_APPLICATION_SUB_VERIFIER_main",login_Access_TDR_APPLICATION_SUB_VERIFIER_main3)
    const login_Access_TDR_APPLICATION_SUB_VERIFIER_main4 = officerLogin(officer_TDR_APPLICATION_SUB_VERIFIER4);
    console.log("login_Access_TDR_APPLICATION_SUB_VERIFIER_main",login_Access_TDR_APPLICATION_SUB_VERIFIER_main4)
    const login_Access_TDR_APPLICATION_SUB_VERIFIER_main5 = officerLogin(officer_TDR_APPLICATION_SUB_VERIFIER5);
    console.log("login_Access_TDR_APPLICATION_SUB_VERIFIER_main",login_Access_TDR_APPLICATION_SUB_VERIFIER_main5)

    const login_Access_Token_Cheif_Planner_role_main = officerLogin(officer_Chief_planner);
    console.log("login_Access_Token_Cheif_Planner_role_main",login_Access_Token_Cheif_Planner_role_main)
    const login_Access_Token_Cheif_Engineer_role_main = officerLogin(officer_Chief_engineer);
    console.log("login_Access_Token_Cheif_Engineer_role_main",login_Access_Token_Cheif_Engineer_role_main)
    const login_Access_Token_DM_role_main = officerLogin(officerDM);
    console.log("login_Access_Token_DM_role_main",login_Access_Token_DM_role_main)

    const login_Access_officer_drcIssuer_role_main=officerLogin(officer_drcIssuer)
    console.log("login_Access_officer_drcIssuer_role_main",login_Access_officer_drcIssuer_role_main)
    const login_Access_officer_DTA_verifier_role_main=officerLogin(officer_DTA_verifier)
    console.log("login_Access_officer_DTA_verifier_role_main",login_Access_officer_DTA_verifier_role_main)
    const login_Access_officer_DTA_Approver_role_main=officerLogin(officer_DTA_Approver)
    console.log("login_Access_officer_DTA_Approver_role_main",login_Access_officer_DTA_Approver_role_main)
    const login_Access_officer_DRC_MANAGER_role_main=officerLogin(officer_DRC_MANAGER)
    console.log("login_Access_officer_DRC_MANAGER_role_main",login_Access_officer_DRC_MANAGER_role_main)
    const login_Access_officer_NOMINEE_MANAGER_role_main=officerLogin(officer_NOMINEE_MANAGER)
    console.log("login_Access_officer_NOMINEE_MANAGER_role_main",login_Access_officer_NOMINEE_MANAGER_role_main)

  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

     // Make a POST request to /tdr/notice/create endpoint to creates the notice 

     const adminCreateTdrNotice = http.post(`${KdaUrl}/tdr/notice/create`, JSON.stringify({
      notice: {
          locationInfo: {
              khasraOrPlotNo: "A123",
              scheme: "Kalyanpur",
              zone: 1,
              district: "Kanpur"
          },
          propertyInfo: {
              masterPlan: "0x1234567890123456789012345678901234567890123456789012345678901234",
              roadWidth: 20,
              areaType: "UNDEVELOPED",
              landUse: "COMMERCIAL"
          },
          constructionDetails: {
              landArea: 1000,
              buildUpArea: 800,
              carpetArea: 600,
              numFloors: 2
          },
          tdrInfo: {
              areaAffected: 1000,
              circleRate: 2000,
              farProposed: 200,
              tdrType: "AMENITY"
          },
          owners: [
              {
                  name: "Some body",
                  soWo: "Ram Prakash",
                  age: "99",
                  ownerAddress: "123 Main St",
                  email: "rasd.phd@gmail.com"
              }
          ],
          status: "PENDING",
          propertyId: "Kanpur-Kalyanpur-11-03"
      },
      documents: {
          order: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"
      }
  }
  ), {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${login_Access_tdr_notice_manager_role_main}`,
          },
        });

      // Log the response status code, body, and headers
      // console.log(`Create notice by admin status code: ${adminCreateTdrNotice.status}`);
      console.log(`Create notice by admin response body: ${adminCreateTdrNotice.body}`);

      //console -> receives the transaction and notice id

      const dataAfterNoticeCreation=JSON.parse(adminCreateTdrNotice.body)


      const trxIdofNoticeCreation=dataAfterNoticeCreation.data.trxId
      const noticeIdofNoticeCreation=dataAfterNoticeCreation.data.noticeId

      console.log(trxIdofNoticeCreation,noticeIdofNoticeCreation)

      signTrxnId(trxIdofNoticeCreation,login_Access_tdr_notice_manager_role_main)
      console.log("Notice Created")


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  


//post request to  tdr/application/create  to create A TDR application


const createTdrApplication= http.post(`${KdaUrl}/tdr/application/create`, JSON.stringify({
    tdrApplication:{
        timeStamp: "1677061679",
        place: "Mumbai",
        farRequested: 2000,
        circleRate: 2,
        applicants: [
            {
              userId: userRregistrationId
            },
            {
              userId: userRregistrationId2
            },
            {
              userId: userRregistrationId3
            },
            {
              userId: userRregistrationId4
            } 

        ],
        status: "pending",
        noticeId: noticeIdofNoticeCreation
    },
    documents:{
       aadhaar :"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA",
       consentLetter: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA",
      mutationDocument: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"
    }
}), {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${user_login_Access_Token}`,
  },
});


   // Log the response status code, body, and headers
   console.log(`Create application by User status code: ${createTdrApplication.status}`);
   console.log(`Create application by User response body: ${createTdrApplication.body}`);

   const trxIdforApplicationCreated=JSON.parse(createTdrApplication.body)
   const TrxIdApplicationCreated=trxIdforApplicationCreated.data
  console.log("createTdrApplication trxId", trxIdforApplicationCreated.data.trxId)


  signTrxnIdUser(trxIdforApplicationCreated.data.trxId,user_login_Access_Token)
  const applicationIdByUser=TrxIdApplicationCreated.applicationId;

  console.log("Tdr Application Created by user",applicationIdByUser)


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

    //fetch application from {{base_url}}/tdr/application/fetch 
    
    // const fetchApplicationBeforeSign= http.post(`${KdaUrl}/tdr/application/fetch`, JSON.stringify({
    //   applicationId: applicationIdByUser
    // }), {
    // headers: {
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${user_login_Access_Token}`,
    // },
    // });
    // const fetchAppReposnes=JSON.parse(fetchApplicationBeforeSign.body)
    // console.log(`Fetch Application for ${applicationIdByUser}`, fetchAppReposnes.data)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  


const signTDRnow1=http.post( `${KdaUrl}/tdr/application/sign`,JSON.stringify({
  applicationId: applicationIdByUser
}), {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${user_login_Access_Token1}`
  },} )
  const tdrSignTrxId1=JSON.parse(signTDRnow1.body).data.trxId
  // console.log(tdrSignTrxId1)
  signTrxnIdUser(tdrSignTrxId1,user_login_Access_Token1)

 
  const signTDRnow2=http.post( `${KdaUrl}/tdr/application/sign`,JSON.stringify({
    applicationId: applicationIdByUser
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user_login_Access_Token2}`,
    },} )
    const tdrSignTrxId2=JSON.parse(signTDRnow2.body).data.trxId
    signTrxnIdUser(tdrSignTrxId2,user_login_Access_Token2)


const signTDRnow3=http.post( `${KdaUrl}/tdr/application/sign`,JSON.stringify({
  applicationId: applicationIdByUser
}), {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${user_login_Access_Token3}`,
  },} )
  const tdrSignTrxId3=JSON.parse(signTDRnow3.body).data.trxId
  signTrxnIdUser(tdrSignTrxId3,user_login_Access_Token3)



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  


// post to /tdr/application/verify to verify the newApplicationId created
const VerifyNewApplication = (applicationId, access_token) => {

  const endpoint = `${KdaUrl}/tdr/application/verify`

  const data = JSON.stringify({
        applicationId: applicationId

  });

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${access_token}`,
  };
    const responseBody=http.post(endpoint, data, { headers });

    const dataAfterVerifyApplication = JSON.parse(responseBody.body);
    console.log("data After Verify info",dataAfterVerifyApplication)
    const signTrxNow=signTrxnId(dataAfterVerifyApplication.data.trxId,access_token);
};


const verifyBySubVerifier1=VerifyNewApplication(applicationIdByUser,login_Access_TDR_APPLICATION_SUB_VERIFIER_main)
const verifyBySubVerifier2=VerifyNewApplication(applicationIdByUser,login_Access_TDR_APPLICATION_SUB_VERIFIER_main1)
const verifyBySubVerifier3=VerifyNewApplication(applicationIdByUser,login_Access_TDR_APPLICATION_SUB_VERIFIER_main2)
const verifyBySubVerifier4=VerifyNewApplication(applicationIdByUser,login_Access_TDR_APPLICATION_SUB_VERIFIER_main3)
const verifyBySubVerifier5=VerifyNewApplication(applicationIdByUser,login_Access_TDR_APPLICATION_SUB_VERIFIER_main4)
const verifyBySubVerifier6=VerifyNewApplication(applicationIdByUser,login_Access_TDR_APPLICATION_SUB_VERIFIER_main5)
const verifyByVerifier=VerifyNewApplication(applicationIdByUser,login_Access_TDR_APPLICATION_VERIFIER_main)


  // console.log("verifyByVerifier",verifyByVerifier)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

const approveNewApplication = (applicationId, access_token) => {

  const endpoint = `${KdaUrl}/tdr/application/approve`

  const data = JSON.stringify({

        applicationId: applicationId,

 });

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${access_token}`,
  };
    const responseBody=http.post(endpoint, data, { headers });
    const dataAfterVerify = JSON.parse(responseBody.body);
    console.log(`Approve ${applicationId} Application signed info`,dataAfterVerify.data)
    const signApproveTrxId=signTrxnId(dataAfterVerify.data.trxId,access_token);

};

// post to /tdr/application/approve to verify the newApplicationId created

const approverByPlanner=approveNewApplication(applicationIdByUser,login_Access_Token_Cheif_Planner_role_main)
const approverByChief_Engineer=approveNewApplication(applicationIdByUser,login_Access_Token_Cheif_Engineer_role_main)
const approverByDM=approveNewApplication(applicationIdByUser,login_Access_Token_DM_role_main)
console.log("Application Approved")



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

    //fetch application from {{base_url}}/tdr/application/fetch 
    
    const fetchApplicationAfter= http.post(`${KdaUrl}/tdr/application/fetch`, JSON.stringify({
      applicationId: applicationIdByUser
    }), {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user_login_Access_Token}`,
    },
    });
    const fetchAppReposne=JSON.parse(fetchApplicationAfter.body)
    console.log(`Fetch Application for ${applicationIdByUser}`, fetchAppReposne.data) 
    const myApplId=fetchAppReposne


    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

// post to /tdr/application/issueDrc to issue new DRC

const IssueDrcByVC = http.post(`${KdaUrl}/tdr/application/issueDrc`,  JSON.stringify({
  applicationId: applicationIdByUser,
  farGranted: 200
}), {
headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${login_Access_officer_drcIssuer_role_main}`,
},
});

const IssueDrcResponse=JSON.parse(IssueDrcByVC.body)
const drcId=IssueDrcResponse.data.drcId
console.log("drc isssued",IssueDrcResponse)

signTrxnId(IssueDrcResponse.data.trxId,login_Access_officer_drcIssuer_role_main)
   

////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////


// drc cancellation flow
    
    //post to  /drc/cancel
    
    const startDrcCancel = http.post(`${KdaUrl}/drc/cancel/start`,  JSON.stringify({
        drcId:drcId,
        notice:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${login_Access_Token_VC_role}`,
      },
    });
    
    const RejectDrcResponseStart=JSON.parse(startDrcCancel.body)
    console.log("Start DRC Cancel",RejectDrcResponseStart)
    
    
    const RejectDrcByVC = http.post(`${KdaUrl}/drc/cancel`,  JSON.stringify({
      drcId: drcId,
      cancellationOrder:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${login_Access_Token_VC_role}`,
      },
    });
    
    const RejectDrcResponse=RejectDrcByVC.body
    console.log("reject drc response",RejectDrcResponse)    
    
    
    
}
    
    