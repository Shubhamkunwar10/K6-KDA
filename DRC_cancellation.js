import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 1, // Virtual usersz
//   duration: '3s', // Test duration
};

const KdaUrl="http://35.238.20.97:9002"
const device_id="5678-5678-5678-1234"


//for applicants on tdr/application/create

const userRregistrationId="KDAUSER00002";  //978998370555
const userRregistrationId2="KDAUSER00003"; //350266635281
const userRregistrationId3="KDAUSER00004"; //643342356680
const userRregistrationId4="KDAUSER00005"; //482886889891


const userNewPassword="Rabbit@12345"
const loginOtpUser="1234565"

const KDAofficerId="KDAOFSR00016" 
const officerPassword="Rabbit@1234"



const officer_USER_MANAGER="KDAOFSR00004" //sahil
const officer_kda_registrar="KDAOFSR00005"
const officer_tdr_notice_manager="KDAOFSR00020" //shubham
const officer_TDR_APPLICATION_VERIFIER ="KDAOFSR00007" //anurag
const officer_TDR_APPLICATION_SUB_VERIFIER ="KDAOFSR00008"  //ankit
const officer_Chief_planner="KDAOFSR00009"
const officer_Chief_engineer="KDAOFSR00010"
const officerDM="KDAOFSR00017" 
const officer_drcIssuer="KDAOFSR00011"
const officer_DTA_verifier="KDAOFSR00012"
const officer_DTA_Approver="KDAOFSR00013"
const officer_DRC_MANAGER ="KDAOFSR00014"
const officer_NOMINEE_MANAGER ="KDAOFSR00015"



const user_login_Access_Token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFVU0VSMDAwMDIiLCJ1c2VybmFtZSI6IjJqdzZ4YSIsInJvbGUiOiJVU0VSIiwidXNlcl90eXBlIjoiVVNFUiIsImV4cCI6MTY4Mjc0OTQxMiwiaWF0IjoxNjgyNjYzMDEyLCJ0b2tlbl9pZCI6IjY2NDc1OGRkLTg4YjctNGIxMC04ZjUzLWM3M2EwNzQ4NDZkNCJ9.-zWcmJZeqnIxPhUMwyWBMjl7tzK5vBZSuAkzb0g69m4"
const user_login_Access_Token1="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFVU0VSMDAwMDMiLCJ1c2VybmFtZSI6IjRjMTg2Iiwicm9sZSI6IlVTRVIiLCJ1c2VyX3R5cGUiOiJVU0VSIiwiZXhwIjoxNjgyNzQ5NDUzLCJpYXQiOjE2ODI2NjMwNTMsInRva2VuX2lkIjoiMDBiOTRlYjItN2U0OS00Yzk1LThhOWQtMjljNDg3ZjQyMzJlIn0.XdCb2une6tVWHfiywUWdMGF2wXwGG91JYfH4fVzN1uM"
const user_login_Access_Token2="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFVU0VSMDAwMDQiLCJ1c2VybmFtZSI6IjlhbTRwIiwicm9sZSI6IlVTRVIiLCJ1c2VyX3R5cGUiOiJVU0VSIiwiZXhwIjoxNjgyNzQ4NDY2LCJpYXQiOjE2ODI2NjIwNjYsInRva2VuX2lkIjoiOTc2ZTcwNjEtMWFkNC00YzA0LThmMmYtNWZjZjFkZjg2OWRjIn0.Vm9fJPueaN6ZNmSV5iDDbsh7qYuxS84ih7NzX5lKZKs"
const user_login_Access_Token3="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFVU0VSMDAwMDUiLCJ1c2VybmFtZSI6IjB5c3UxbyIsInJvbGUiOiJVU0VSIiwidXNlcl90eXBlIjoiVVNFUiIsImV4cCI6MTY4Mjc0ODQ4NiwiaWF0IjoxNjgyNjYyMDg2LCJ0b2tlbl9pZCI6IjZiMmM3YzhjLTE0NmEtNDUwNC04OTFiLTY4NjcyMDQ5ZWQ4ZSJ9.vgC0oEQCXkz7M-p3W_Lhwk0bSeHykR7qb6-AgvVwHnI"



// Main test scenario
export default function() {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  



    const addAdminInfo= http.post(`${KdaUrl}/kda/admin/addAdmin`, JSON.stringify({
      userId: KDAofficerId,
      designation: "VC",
      department: "land",
      zone: 1
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
        const addOfficersInfo =async (userId,designation,access_token) => {
        const endpoint = `${KdaUrl}/kda/admin/addofficer`;
        
         const data = JSON.stringify({
           userId: userId,
           designation: designation,
           department: "land",
           zone: 1
         });
   
         const headers = {
           'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`,
        };
  
        const officerloginTrxID=http.post(endpoint, data, { headers });
         const officerloginTrxIDResponse=JSON.parse(officerloginTrxID.body)
        console.log("add officer info",officerloginTrxIDResponse)
        const signTrxNow1=signTrxnId(officerloginTrxIDResponse.data.trxId,access_token)
      
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
        const signTrxNow1=signTrxnId(officerloginTrxIDResponse.data.trxId,access_token)
      
      };
    // Make a post request to /kda/login endpoint for officer login

    const login_Access_Token_officer = officerLogin(KDAofficerId);

    console.log("trxIdOfOfficerLogint",login_Access_Token_officer)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  



     // Make a POST request to create account /user/create endpoint with the new password for officer

     const createAccountforOfficer =createAccountPassword(login_Access_Token_officer,officerPassword)

      // Log the response status code, body, and headers
      console.log(`Create officer password status code: ${createAccountforOfficer.status}`);
      console.log(`Create officer password account response body: ${createAccountforOfficer.body}`);

      
      
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
      
      // Make a post request to /kda/login endpoint for officer login anf get rxID    
      
//       const login_Access_Token_verifier_role = officerLogin(officer_TDR_APPLICATION_VERIFIER);
//  const createAccountforVerifier =createAccountPassword(login_Access_Token_verifier_role,officerPassword)


//   const login_Access_Token_notice_manager_role = officerLogin(officer_tdr_notice_manager);
//   const createAccountforApprover =createAccountPassword(login_Access_Token_notice_manager_role,officerPassword)
 
//   const login_Access_Token_officer_USER_MANAGER_role = officerLogin(officer_USER_MANAGER);
//   const createAccountforofficer_USER_MANAGER =createAccountPassword(login_Access_Token_officer_USER_MANAGER_role,officerPassword)
 
//   const login_Access_Token_Cheif_Engineer_role=officerLogin(officer_Chief_engineer);
//   const createAccountForCheifEngineer=createAccountPassword(login_Access_Token_Cheif_Engineer_role,officerPassword)
 
//   const login_Access_Token_DM_role=officerLogin(officerDM);
//   const createAccountForDM=createAccountPassword(login_Access_Token_DM_role,officerPassword)
 
//   const login_Access_Token_Cheif_Planner_role=officerLogin(officer_Chief_planner);
//   const createAccountForChiefPlanner=createAccountPassword(login_Access_Token_Cheif_Planner_role,officerPassword)
 
//   const login_officer_kda_registrar=officerLogin(officer_kda_registrar)
//   const createAccountofficer_kda_registrar=createAccountPassword(login_officer_kda_registrar,officerPassword)
 
//   const login_officer_drcIssuer=officerLogin(officer_drcIssuer)
//   const createAccountofficer_drcIssuerr=createAccountPassword(login_officer_drcIssuer,officerPassword)

//   const login_officer_DTA_verifier=officerLogin(officer_DTA_verifier)
//   const createAccountofficer_DTA_verifier=createAccountPassword(login_officer_DTA_verifier,officerPassword)
 
//  const login_officer_DTA_Approver=officerLogin(officer_DTA_Approver)
//  const createAccountofficer_DTA_Approver=createAccountPassword(login_officer_DTA_Approver,officerPassword)

//  const login_officer_DRC_MANAGER=officerLogin(officer_DRC_MANAGER)
//  const createAccountofficer_DRC_MANAGER=createAccountPassword(login_officer_DRC_MANAGER,officerPassword)

//  const login_officer_NOMINEE_MANAGER=officerLogin(officer_NOMINEE_MANAGER)
//  const createAccountofficer_NOMINEE_MANAGER=createAccountPassword(login_officer_NOMINEE_MANAGER,officerPassword)





// Make a POST request to /kda/admin/addOfficer endpoint to add officer role like vc, verifier,approver

const login_Access_Token_VC_role = officerLogin(KDAofficerId);
console.log("login_Access_Token_VC_role",login_Access_Token_VC_role)





// const adduserManagerInfo=addOfficersInfo(officer_USER_MANAGER,"VERIFIER",login_Access_Token_VC_role)

// const addKdaRegistrarInfo=addOfficersInfo(officer_kda_registrar,"APPROVER",login_Access_Token_VC_role)

// const addNoticeManagerInfo=addOfficersInfo(officer_tdr_notice_manager,"APPROVER",login_Access_Token_VC_role)

// const addTDRVerifierInfo=addOfficersInfo(officer_TDR_APPLICATION_VERIFIER,"VERIFIER",login_Access_Token_VC_role)

// const addTDRSubVerifierInfo=addOfficersInfo(officer_TDR_APPLICATION_SUB_VERIFIER ,"SUB_VERIFIER",login_Access_Token_VC_role)

// const addChiefPlannerInfo=addOfficersInfo(officer_Chief_planner,"APPROVER",login_Access_Token_VC_role)

// const addCheifEngineerInfo=addOfficersInfo(officer_Chief_engineer,"APPROVER",login_Access_Token_VC_role)

// const addDMInfo=addOfficersInfo(officerDM,"APPROVER",login_Access_Token_VC_role)

// const addDrcIssuer=addOfficersInfo(officer_drcIssuer,"APPROVER",login_Access_Token_VC_role)

// const addDtaVerifier=addOfficersInfo(officer_DTA_verifier,"VERIFIER",login_Access_Token_VC_role)

// const addDtaApprover=addOfficersInfo(officer_DTA_Approver,"APPROVER",login_Access_Token_VC_role)

// const addDrcManager=addOfficersInfo(officer_DRC_MANAGER,"APPROVER",login_Access_Token_VC_role)

// const addNomineeManager=addOfficersInfo(officer_NOMINEE_MANAGER,"APPROVER",login_Access_Token_VC_role)





// console.log(`Add VC info: ${adduserManagerInfo}`);
// console.log(`Add KDA Registrar info: ${addKdaRegistrarInfo}`);
// console.log(`Add Approver info: ${addNoticeManagerInfo}`);
// console.log(`ADD officer_TDR_APPLICATION_VERIFIER Info: ${addTDRVerifierInfo}`);
// console.log(`Add TDR SUB_VERIFIER info: ${addTDRSubVerifierInfo}`);
// console.log(`Add Chief Planner info: ${addChiefPlannerInfo}`);
// console.log(`Add Cheif Engineer info: ${addCheifEngineerInfo}`);
// console.log(`Add Dm info: ${addDMInfo}`);
// console.log(`Add DRC ISSUER info: ${addDrcIssuer}`);
// console.log(`Add DTA VERIFIER info: ${addDtaVerifier}`);
// console.log(`Add DTA APPROVER info: ${addDtaApprover}`);
// console.log(`Add DRC manager info: ${addDrcManager}`);
// console.log(`Add Nominee Manager info: ${addNomineeManager}`);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  



//create ACCOUNT OFFICER

    //login_again after creating account
    const login_Access_Token_User_manager_role_main = officerLogin(officer_USER_MANAGER);
    // console.log("login_Access_Token_User_manager_role_main",login_Access_Token_User_manager_role_main)
    const login_Access_Token_KDA_Registrar_role_main = officerLogin(officer_kda_registrar);
    // console.log("login_Access_Token_KDA_Registrar_role_main",login_Access_Token_KDA_Registrar_role_main)
    const login_Access_tdr_notice_manager_role_main = officerLogin(officer_tdr_notice_manager);
    // console.log("login_Access_tdr_notice_manager_role_main",login_Access_tdr_notice_manager_role_main)
    const login_Access_TDR_APPLICATION_VERIFIER_main = officerLogin(officer_TDR_APPLICATION_VERIFIER);
    // console.log("login_Access_TDR_APPLICATION_VERIFIER_main",login_Access_TDR_APPLICATION_VERIFIER_main)
    const login_Access_TDR_APPLICATION_SUB_VERIFIER_main = officerLogin(officer_TDR_APPLICATION_SUB_VERIFIER);
    // console.log("login_Access_TDR_APPLICATION_SUB_VERIFIER_main",login_Access_TDR_APPLICATION_SUB_VERIFIER_main)
    const login_Access_Token_Cheif_Planner_role_main = officerLogin(officer_Chief_planner);
    // console.log("login_Access_Token_Cheif_Planner_role_main",login_Access_Token_Cheif_Planner_role_main)
    const login_Access_Token_Cheif_Engineer_role_main = officerLogin(officer_Chief_engineer);
    // console.log("login_Access_Token_Cheif_Engineer_role_main",login_Access_Token_Cheif_Engineer_role_main)
    const login_Access_Token_DM_role_main = officerLogin(officerDM);
    // console.log("login_Access_Token_DM_role_main",login_Access_Token_DM_role_main)

    const login_Access_officer_drcIssuer_role_main=officerLogin(officer_drcIssuer)
    // console.log("login_Access_officer_drcIssuer_role_main",login_Access_officer_drcIssuer_role_main)
    const login_Access_officer_DTA_verifier_role_main=officerLogin(officer_DTA_verifier)
    // console.log("login_Access_officer_DTA_verifier_role_main",login_Access_officer_DTA_verifier_role_main)
    const login_Access_officer_DTA_Approver_role_main=officerLogin(officer_DTA_Approver)
    // console.log("login_Access_officer_DTA_Approver_role_main",login_Access_officer_DTA_Approver_role_main)
    const login_Access_officer_DRC_MANAGER_role_main=officerLogin(officer_DRC_MANAGER)
    // console.log("login_Access_officer_DRC_MANAGER_role_main",login_Access_officer_DRC_MANAGER_role_main)
    const login_Access_officer_NOMINEE_MANAGER_role_main=officerLogin(officer_NOMINEE_MANAGER)
    console.log("login_Access_officer_NOMINEE_MANAGER_role_main",login_Access_officer_NOMINEE_MANAGER_role_main)
// 



   

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  



// const set_tdr_notice_managerRole=setRole(officer_tdr_notice_manager,"TDR_NOTICE_MANAGER",login_Access_Token_VC_role)
// const set_tdr_registrar_Role=setRole(officer_kda_registrar,"KDA_REGISTRAR",login_Access_Token_VC_role)
// //Create Role
// const setTDRVerifierRole=setRole(officer_TDR_APPLICATION_VERIFIER,"TDR_APPLICATION_VERIFIER",login_Access_Token_VC_role)
// const setTDRSubVerifierRole=setRole(officer_TDR_APPLICATION_SUB_VERIFIER,"TDR_APPLICATION_SUB_VERIFIER",login_Access_Token_VC_role)
// const setChiefPlannerRole=setRole(officer_Chief_planner,"TDR_APPLICATION_APPROVER_CHIEF_TOWN_AND_COUNTRY_PLANNER",login_Access_Token_VC_role)
// const setCheifEngineerRole=setRole(officer_Chief_engineer,"TDR_APPLICATION_APPROVER_CHIEF_ENGINEER",login_Access_Token_VC_role)
// const setDMRole=setRole(officerDM,"TDR_APPLICATION_APPROVER_DM",login_Access_Token_VC_role)
// const setdrcIssuerRole=setRole(officer_drcIssuer,"DRC_ISSUER",login_Access_Token_VC_role)
// const setDTA_VERIFIERRole=setRole(officer_DTA_verifier,"DTA_VERIFIER",login_Access_Token_VC_role)

  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

     // Make a POST request to /tdr/notice/create endpoint to creates the notice 

     const adminCreateTdrNotice = http.post(`${KdaUrl}/tdr/notice/create`, JSON.stringify({
      landInfo: {
          khasraOrPlotNo: "0x1234567890123456789012345678901234567890123456789012345678901234",
          villageOrWard: "0x1234567890123456789012345678901234567890123456789012345678901234",
          Tehsil: "0x1234567890123456789012345678901234567890123456789012345678901234",
          district: "0x1234567890123456789012345678901234567890123456789012345678901234",
          landUse: "COMMERCIAL"
          },
      masterPlanInfo: {
          masterPlan: "0x1234567890123456789012345678901234567890123456789012345678901234",
          roadWidth: 20,
          areaType: "UNDEVELOPED"
      },
      constructionDetails: {
          landArea: 1000,
          buildUpArea: 800,
          carpetArea: 600,
          numFloors: 2
      },
      areaSurrendered: 1000,
      circleRateSurrendered: 2000,
      status: "PENDING"
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
        circleRateUtilized: 2,
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
        aadhaar: {
        file_type: "pdf",
        file_data: "JVBERi0xLjQKJ..."
        }
    }
}), {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${user_login_Access_Token}`,
  },
});


   // Log the response status code, body, and headers
   console.log(`Create notice by User status code: ${createTdrApplication.status}`);
   console.log(`Create notice by User response body: ${createTdrApplication}`);

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
    console.log("Approve Application signed info",dataAfterVerify.data)
    const signApproveTrxId=signTrxnId(dataAfterVerify.data.trxId,access_token);

};

// post to /tdr/application/approve to verify the newApplicationId created

const approverByPlanner=approveNewApplication(applicationIdByUser,login_Access_Token_Cheif_Planner_role_main)
const approverByChief_Engineer=approveNewApplication(applicationIdByUser,login_Access_Token_Cheif_Engineer_role_main)
const approverByDM=approveNewApplication(applicationIdByUser,login_Access_Token_DM_role_main)
console.log("Application Approved")



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

    // //fetch application from {{base_url}}/tdr/application/fetch 
    
    // const fetchApplicationAfter= http.post(`${KdaUrl}/tdr/application/fetch`, JSON.stringify({
    //   applicationId: applicationIdByUser
    // }), {
    // headers: {
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${user_login_Access_Token}`,
    // },
    // });
    // const fetchAppReposne=JSON.parse(fetchApplicationAfter.body)
    // console.log(`Fetch Application for ${applicationIdByUser}`, fetchAppReposne.data) 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

// post to /tdr/application/issueDrc to issue new DRC

const IssueDrcByVC = http.post(`${KdaUrl}/tdr/application/issueDrc`,  JSON.stringify({
    applicationId: applicationIdByUser,
    farGranted: 200
}), {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${login_Access_Token_VC_role}`,
  },
});

const IssueDrcResponse=JSON.parse(IssueDrcByVC.body)
const drcId=IssueDrcResponse.data.drcId
console.log("drc isssued",IssueDrcResponse.data.drcId)

signTrxnId(IssueDrcResponse.data.trxId,login_Access_Token_VC_role)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 


// post to /drc/application/transfer/create to issue new DRC

// const transferDrcByUser = http.post(`${KdaUrl}/drc/application/transfer/create`,  JSON.stringify({
//   dta: {
//     drcId: drcId,
//     farTransferred: 100,
//     buyers: [
//         "KDAUSER01116"
//     ],
//     status: "pending"
// },
// documents: {
//     saleDeed: {
//         file_type: "pdf",
//         file_data: "JVBERi0xLjQKJ..."
//     }
// }
// }), {
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${user_login_Access_Token}`,
//   },
// });

// const transferDrcResponse=JSON.parse(transferDrcByUser.body)
// console.log("transferDrcResponse",transferDrcResponse.data)
// signTrxnIdUser(transferDrcResponse.data.trxId,user_login_Access_Token)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// drc cancellation flow

//post to  /drc/cancel


const RejectDrcByVC = http.post(`${KdaUrl}/drc/cancel`,  JSON.stringify({
    drcId: drcId,
    reason:"Not intrested"
}), {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${login_Access_Token_VC_role}`,
  },
});

const RejectDrcResponse=RejectDrcByVC.body
console.log(RejectDrcResponse)

}












// {
//   "name": "Shubham Kunwar",
//   "password": "Rabbit@1234",
//   "soOrWoName": "so",
//   "dob": "10/10/1998",
//   "gender": "MALE",
//   "mobileNumber": "9876543210",
//   "email": "rabbit123@gmail.com",
//   "photo": "123213",
//   "address": {
//       "address": "lapata ganj",
//       "city": "Mumbai",
//       "state": "gumnnaan",
//       "pincode": 123123,
//       "country": "India"
//   }

// }


// {
//   "success": true,
//   "data": {
//       "userId": "KDAOFSR00061"
//   }
// }