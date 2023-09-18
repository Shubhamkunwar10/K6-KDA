import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 1, // Virtual usersz
//   duration: '3s', // Test duration
};

const KdaUrl="https://api-kda-dev.c3ihub.org"
// const KdaUrl = "https://api-kda-staging.c3ihub.org"

const device_id="5678-5678-5678-1234"
//for applicants on tdr/application/create

const userRregistrationId="KDAUSER00708";  //340656851366
const userRregistrationId3="KDAUSER00709"; //488400053404

const userNewPassword="Rabbit@12345"
const loginOtpUser="1234565"

const KDAofficerId="KDAOFSR01491" 
const officerPassword="somePassword1="

const officer_USER_MANAGER="KDAOFSR01352" //sahil
const officer_kda_registrar="KDAOFSR01353"
const officer_tdr_notice_manager="KDAOFSR01354" //shubham
const officer_TDR_APPLICATION_VERIFIER ="KDAOFSR01355" //anurag
const officer_TDR_APPLICATION_SUB_VERIFIER ="KDAOFSR01447"  //ankit
const officer_TDR_APPLICATION_SUB_VERIFIER1 ="KDAOFSR01448"
const officer_TDR_APPLICATION_SUB_VERIFIER2 ="KDAOFSR01449"
const officer_TDR_APPLICATION_SUB_VERIFIER3 ="KDAOFSR01450"
const officer_TDR_APPLICATION_SUB_VERIFIER4 ="KDAOFSR01451"
const officer_TDR_APPLICATION_SUB_VERIFIER5 ="KDAOFSR01452"
const officer_Chief_planner="KDAOFSR01362"
const officer_Chief_engineer="KDAOFSR01363"
const officerDM="KDAOFSR01364"
const officer_drcIssuer="KDAOFSR01365"
const officer_DTA_verifier="KDAOFSR01366"
const officer_DTA_Approver="KDAOFSR01367"
const officer_DRC_MANAGER ="KDAOFSR01368"
const officer_NOMINEE_MANAGER ="KDAOFSR01369"

const user_login_Access_Token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFVU0VSMDA3MDgiLCJ1c2VybmFtZSI6Im9hemgzYSIsInJvbGUiOiJVU0VSIiwidXNlcl90eXBlIjoiVVNFUiIsImV4cCI6MTY5MTkwNjM4NSwiaWF0IjoxNjkxODE5OTg1LCJ0b2tlbl9pZCI6IjZhNTU0M2JjLTQzOTktNDg1NS1iYTRmLTk5ZTY3ZDE4NjQ2NSJ9.z0Lb7abC0r0dVly2oLqMPxNuCHIoKpla4iuLv_FjfcQ"
const user_login_Access_Token2="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFVU0VSMDA3MDkiLCJ1c2VybmFtZSI6InN4YTk5Iiwicm9sZSI6IlVTRVIiLCJ1c2VyX3R5cGUiOiJVU0VSIiwiZXhwIjoxNjkxOTA3NDM4LCJpYXQiOjE2OTE4MjEwMzgsInRva2VuX2lkIjoiM2Q2YWMwZjgtZjVmZS00YzI0LWI3NzctODRmNTJhMTc5ZDZjIn0.mPZ0htSlLzf1YcDb1u9dCldSwRJPjnX0eCLoNaSnkZM"

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



    //fetch application from {{base_url}}/tdr/application/fetch 


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
            zones: [1,2,3,4]
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
// addOfficersInfo(officer_TDR_APPLICATION_SUB_VERIFIER4 ,"SUB_VERIFIER","SALES",login_Access_Token_VC_role)
// addOfficersInfo(officer_TDR_APPLICATION_SUB_VERIFIER5 ,"SUB_VERIFIER","LEGAL",login_Access_Token_VC_role)

// const adduserManagerInfo=addOfficersInfo(officer_USER_MANAGER,"NONE","land",login_Access_Token_VC_role)

// const addKdaRegistrarInfo=addOfficersInfo(officer_kda_registrar,"NONE","land",login_Access_Token_VC_role)

// const addNoticeManagerInfo=addOfficersInfo(officer_tdr_notice_manager,"ADMIN","land",login_Access_Token_VC_role)

// const addTDRVerifierInfo=addOfficersInfo(officer_TDR_APPLICATION_VERIFIER,"VC","land",login_Access_Token_VC_role)

// const addTDRSubVerifierInfo=addOfficersInfo(officer_TDR_APPLICATION_SUB_VERIFIER ,"SUB_VERIFIER","land",login_Access_Token_VC_role)

// const addChiefPlannerInfo=addOfficersInfo(officer_Chief_planner,"CHIEF_TOWN_AND_COUNTRY_PLANNER","land",login_Access_Token_VC_role)

// const addCheifEngineerInfo=addOfficersInfo(officer_Chief_engineer,"CHIEF_ENGINEER","land",login_Access_Token_VC_role)

// const addDMInfo=addOfficersInfo(officerDM,"DM","land",login_Access_Token_VC_role)

// const addDrcIssuer=addOfficersInfo(officer_drcIssuer,"NONE","land",login_Access_Token_VC_role)

// const addDtaVerifier=addOfficersInfo(officer_DTA_verifier,"SUB_VERIFIER","land",login_Access_Token_VC_role)

// const addDtaApprover=addOfficersInfo(officer_DTA_Approver,"NONE","land",login_Access_Token_VC_role)

// const addDrcManager=addOfficersInfo(officer_DRC_MANAGER,"NONE","land",login_Access_Token_VC_role)

// const addNomineeManager=addOfficersInfo(officer_NOMINEE_MANAGER,"NONE","land",login_Access_Token_VC_role)


// const set_tdr_notice_managerRole=setRole(officer_tdr_notice_manager,"TDR_NOTICE_MANAGER",login_Access_Token_VC_role)
// const set_tdr_registrar_Role=setRole(officer_kda_registrar,"DTA_APPROVER",login_Access_Token_VC_role)
// //Create Role
// const setTDRVerifierRole=setRole(officer_TDR_APPLICATION_VERIFIER,"TDR_APPLICATION_VERIFIER",login_Access_Token_VC_role)
// const setTDRSubVerifierRole=setRole(officer_TDR_APPLICATION_SUB_VERIFIER,"TDR_APPLICATION_SUB_VERIFIER",login_Access_Token_VC_role)
// const setChiefPlannerRole=setRole(officer_Chief_planner,"TDR_APPLICATION_APPROVER_CHIEF_TOWN_AND_COUNTRY_PLANNER",login_Access_Token_VC_role)
// const setCheifEngineerRole=setRole(officer_Chief_engineer,"TDR_APPLICATION_APPROVER_CHIEF_ENGINEER",login_Access_Token_VC_role)
// const setDMRole=setRole(officerDM,"TDR_APPLICATION_APPROVER_DM",login_Access_Token_VC_role)
// const setdrcIssuerRole=setRole(officer_drcIssuer,"DRC_ISSUER",login_Access_Token_VC_role)
// const setDTA_VERIFIERRole=setRole(officer_DTA_verifier,"DUA_VERIFIER",login_Access_Token_VC_role)
// const setDRC_Manager_Role=setRole(officer_DRC_MANAGER,"DRC_MANAGER ",login_Access_Token_VC_role)
// const setNominee_ManagerRole=setRole(officer_NOMINEE_MANAGER,"NOMINEE_MANAGER ",login_Access_Token_VC_role)
//  const setDTAApprover_Role=setRole(officer_DTA_Approver,"DUA_APPROVER",login_Access_Token_VC_role)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
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
            khasraOrPlotNo: "2526",
            scheme: "ASHIYANA",
            village: "Kalyanpur",
            tehsil: "Kanpur",
            zone: 1,
            district: "Kanpur"
          },
          propertyInfo: {
              masterPlan: "0x1234567890123456789012345678901234567890123456789012345678901234",
              roadWidth: 20,
              areaType: "DEVELOPED",
              landUse: "COMMERCIAL"
          },
          constructionDetails: {
              landArea: 3200,
              buildUpArea: 3000,
              carpetArea: 2800,
              numFloors: 4
          },
          tdrInfo: {
              areaAffected: 1000,
              circleRate: 2000,
              farProposed: 200,
              tdrType: "AMENITY"
          },
          owners: [
              {
                  name: "shubham",
                  soWo: "S S kunwa",
                  age: "24",
                  phone: "07310747066",
                  ownerAddress: "dehradun",
                  email: "shubhamkunwar.evilsk@gmail.com"
              }
          ],
          status: "PENDING",
          propertyId: "1-ASHIYANA-2526"
      },
      documents: {
          order: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"
      }
  }
  ), {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${login_Access_Token_VC_role}`,
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

      signTrxnId(trxIdofNoticeCreation,login_Access_Token_VC_role)
      console.log("Notice Created")

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

//post request to  tdr/application/create  to create A TDR application


const createTdrApplication= http.post(`${KdaUrl}/tdr/application/create`, JSON.stringify({
    tdrApplication:{
        timeStamp: "1677061679",
        place: "Mumbai",
        circleRate: 2,
        applicants: [
            {
              userId: userRregistrationId
            } ,
            {
              userId: userRregistrationId3
            } ,
        ],
        status: "pending",
        noticeId: noticeIdofNoticeCreation
       
    },
    documents:{
       aadhaar :"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA",
       consentLetter: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA",
      mutationDocument: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA",
      affidavit:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA",
      areaStatement:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"
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
  // const applicationIdByUser="KDATA0000429";

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



  // const signTDRnow2=http.post( `${KdaUrl}/tdr/application/sign`,JSON.stringify({
  //   applicationId: applicationIdByUser
  // }), {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${user_login_Access_Token2}`,
  //   },} )
  //   const tdrSignTrxId2=JSON.parse(signTDRnow2.body).data.trxId
  //   signTrxnIdUser(tdrSignTrxId2,user_login_Access_Token2)
///////////////////////////////////////////////////////////////////////////////////////////////////////

//ervify docs
const verifyDocsBeforeVerify=http.post( `${KdaUrl}/tdr/application/documents/verify`,JSON.stringify({
  applicationId: applicationIdByUser
}), {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${login_Access_Token_VC_role}`,
  },} )
  const verifieddocs=JSON.parse(verifyDocsBeforeVerify.body).data
  console.log("docs verified",verifieddocs)
  signTrxnId(verifieddocs.trxId,login_Access_Token_VC_role)




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
    console.log(`Approve ${applicationId} Application signed info`,dataAfterVerify)
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
    sleep(60)


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
console.log("drc isssued",IssueDrcResponse)

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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

//post to  drc/application/transfer/sign to sign application

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  


//Utilixzation 

//post to {{base_url}}/drc/application/utilization/create

const createUtilization=http.post(`${KdaUrl}/drc/application/utilization/create`, JSON.stringify({
    drcId: drcId,
    farUtilized: 50,
    drcUtilizationDetails: {
      landUse: "COMMERCIAL",
      areaType: "BUILT",
      roadWidth: 12,
      purchasableFar: 2,
      basicFar: 1,
      circleRateUtilization: 70
  },
  locationInfo: {
    khasraOrPlotNo: "137",
    scheme: "Kalyanpur",
    village: "Kalyanpur",
    tehsil: "Kalyanpur",
    zone: 1,
    district: "Kanpur"
},
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user_login_Access_Token}`,
    },
  });

  console.log("create utilization appl",createUtilization)
  const AppIdDUA=JSON.parse(createUtilization.body)
  console.log("daua",AppIdDUA)
  const duaSignTrxId=JSON.parse(createUtilization.body).data.trxId


  const utilisationId=AppIdDUA.data.applicationId

  signTrxnIdUser(duaSignTrxId,user_login_Access_Token)


//post to {{base_url}}/drc/application/utilization/sign


// const transferDrcByUser = http.post(`${KdaUrl}/drc/application/transfer/create`,  JSON.stringify({
//   dta: {
//     drcId: drcId,
//     farTransferred: 100,
//     buyers: [
//         "KDAUSER00433"
//     ],
//     status: "pending"
// },
// documents: {
//     saleDeed: {
//         file_type: "pdf",
//         file_data: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"
//     }
// }
// }), {
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${user_login_Access_Token}`,
//   },
// });

// const transferDrcResponse=JSON.parse(transferDrcByUser.body)
// console.log("transferDrcResponse",transferDrcResponse)



const signUtilization = async (applicationId, user_login_Access_Toke) => {
  const endpoint = `${KdaUrl}/drc/application/utilization/sign`;

  const data = JSON.stringify({
    applicationId: applicationId
  });

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${user_login_Access_Toke}`,
  };


  const responseTrxId = http.post(endpoint, data, { headers });

  console.log("sign utilization sign", JSON.parse(responseTrxId.body));
};

signUtilization(utilisationId,user_login_Access_Token)
// signUtilization(utilisationId,user_login_Access_Token2)



}





