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
        const addOfficersInfo =async (userId,designation,access_token) => {

          const officerloginTrxID=http.post(`${KdaUrl}/kda/admin/addOfficer`, JSON.stringify({
            userId: userId,
            designation: `${designation}`,
            department: "land",
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
      locationInfo: {
        khasraOrPlotNo: "1289",
        villageOrWard: "Kalyanpur",
        Tehsil: "Kalyanpur",
        district: "Kanpur"
          },
      propertyInfo: {
          masterPlan: "0x4244567890123456789012345678901234567890123456789012345678901235",
          roadWidth: 10,
          areaType: "UNDEVELOPED",
          landUse: "COMMERCIAL"
      },
      constructionDetails: {
          landArea: 1200,
          buildUpArea: 600,
          carpetArea: 800,
          numFloors: 3
      },
      tdrInfo: {
        areaAffected: 1000,
        circleRate: 1800,
        farProposed: 400,
        tdrType: "AMENITY"
    },
      owners: [{
          name: "Some bodys",
          soWo: "Ram Prakashs",
          age: "32",
          ownerAddress: "123 Main Sts",
          email:"r`ass@gmail.com"
      }],
    status: "PENDING",
    propertyId: "Kanpur/Kanpur/Kalyanp/22"
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
       aadhaar :"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"
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
    drcId:  drcId,
    farUtilized: 100,
    drcUtilizationDetails: {
      landUse: "COMMERCIAL",
      areaType: "BUILT",
      roadWidth: 12,
      purchasableFar: 2,
      basicFar: 1,
      circleRateUtilization: 70
  },
    locationInfo: {
      khasraOrPlotNo: "1278",
      villageOrWard: "Kalyanpur",
      Tehsil: "Kalyanpur",
      district: "Kanpur"
    }
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user_login_Access_Token}`,
    },
  });

  console.log("create utilization appl",createUtilization.body)
  const AppIdDUA=JSON.parse(createUtilization.body).data.applicationId
  console.log(AppIdDUA)
  const duaSignTrxId=JSON.parse(createUtilization.body).data.trxId

  signTrxnIdUser(duaSignTrxId,user_login_Access_Token)


//post to {{base_url}}/drc/application/utilization/sign

const signUtilization1=http.post(`${KdaUrl}/drc/application/utilization/sign`, JSON.stringify({
    applicationId:AppIdDUA

}), {
headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${user_login_Access_Token}`,
}},)

const responseOutputDUC1=JSON.parse(signUtilization1.body)
console.log("sign utilization sign",responseOutputDUC1)
signTrxnIdUser(duaSignTrxId,user_login_Access_Token)


const signUtilization2=http.post(`${KdaUrl}/drc/application/utilization/sign`, JSON.stringify({
  applicationId:AppIdDUA
}), {
headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${user_login_Access_Token1}`,
}},)
const responseOutputDUC2=JSON.parse(signUtilization2.body)
console.log("sign utilization sign",responseOutputDUC2)


const signUtilization3=http.post(`${KdaUrl}/drc/application/utilization/sign`, JSON.stringify({
  applicationId:AppIdDUA
}), {
headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${user_login_Access_Token2}`,
}},)

const responseOutputDUC3=JSON.parse(signUtilization3.body)
console.log("sign utilization sign",responseOutputDUC3)


const signUtilization4=http.post(`${KdaUrl}/drc/application/utilization/sign`, JSON.stringify({
  applicationId:AppIdDUA
}), {
headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${user_login_Access_Token3}`,
}},)

const responseOutputDUC4=JSON.parse(signUtilization4.body)
console.log("sign utilization sign",responseOutputDUC4)

}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// drc cancellation flow









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