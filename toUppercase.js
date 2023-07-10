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

// const userRregistrationId="KDAUSER00035";  //460678122020
// const userRregistrationId2="KDAUSER00032"; //719881070754
// const userRregistrationId3="KDAUSER00033"; //606636803146
// const userRregistrationId4="KDAUSER00034"; //940392114286

const userRregistrationId="KDAUSER00376";  //467317782961
const userRregistrationId2="KDAUSER00377"; //331142004297
const userRregistrationId3="KDAUSER00378"; //178207150100
const userRregistrationId4="KDAUSER00379"; //668418909439


const userNewPassword="Rabbit@12345"
const loginOtpUser="1234565"

// const KDAofficerId="KDAOFSR00103" 
// const officerPassword="Rabbit@1234"

const KDAofficerId="KDAOFSR00876" 
const officerPassword="Rabbit@1234"



// const officer_USER_MANAGER="KDAOFSR00102" //sahil
// const officer_kda_registrar="KDAOFSR00084"
// const officer_tdr_notice_manager="KDAOFSR00085" //shubham
// const officer_TDR_APPLICATION_VERIFIER ="KDAOFSR00087" //anurag
// const officer_TDR_APPLICATION_SUB_VERIFIER ="KDAOFSR00088"  //ankit
// const officer_TDR_APPLICATION_SUB_VERIFIER1 ="KDAOFSR00089" 
// const officer_TDR_APPLICATION_SUB_VERIFIER2 ="KDAOFSR00090" 
// const officer_TDR_APPLICATION_SUB_VERIFIER3 ="KDAOFSR00091" 
// const officer_TDR_APPLICATION_SUB_VERIFIER4 ="KDAOFSR00092" 
// const officer_TDR_APPLICATION_SUB_VERIFIER5 ="KDAOFSR00093" 
// const officer_Chief_planner="KDAOFSR00094"
// const officer_Chief_engineer="KDAOFSR00095"
// const officerDM="KDAOFSR00096" 
// const officer_drcIssuer="KDAOFSR00097"
// const officer_DTA_verifier="KDAOFSR00098"
// const officer_DTA_Approver="KDAOFSR00099"
// const officer_DRC_MANAGER ="KDAOFSR00100"
// const officer_NOMINEE_MANAGER ="KDAOFSR00101"

const officer_USER_MANAGER="KDAOFSR00383" //sahil
const officer_kda_registrar="KDAOFSR00384"
const officer_tdr_notice_manager="KDAOFSR00883" //shubham
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



const user_login_Access_Token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFVU0VSMDAzNzYiLCJ1c2VybmFtZSI6ImJvajN2cyIsInJvbGUiOiJVU0VSIiwidXNlcl90eXBlIjoiVVNFUiIsImV4cCI6MTY4NDg0MzE1MiwiaWF0IjoxNjg0NzU2NzUyLCJ0b2tlbl9pZCI6ImE1MWUzMmYxLWIxN2UtNDQ1ZS05NWZhLWJkYTQ0NGYwOTZiNiJ9.BPxes6uujOI2GXEzQas6tO2PD1iC6Xj_PK6yCkzvPHE"
const user_login_Access_Token1="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFVU0VSMDAzNzciLCJ1c2VybmFtZSI6Imp0aTJkbSIsInJvbGUiOiJVU0VSIiwidXNlcl90eXBlIjoiVVNFUiIsImV4cCI6MTY4NDg0MzE4MiwiaWF0IjoxNjg0NzU2NzgyLCJ0b2tlbl9pZCI6IjEyMDI5YmYyLTIyNzItNGY5My1hNWI0LWRlNTU4YjJmOGFhMCJ9.63AhfD7DwJMpJuCbzdSK_gqQSN56ANsP3UWD8Naq8WI"
const user_login_Access_Token2="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFVU0VSMDAzNzgiLCJ1c2VybmFtZSI6InUxbWNuNyIsInJvbGUiOiJVU0VSIiwidXNlcl90eXBlIjoiVVNFUiIsImV4cCI6MTY4NDg0MzIxOCwiaWF0IjoxNjg0NzU2ODE4LCJ0b2tlbl9pZCI6ImViNzNlYzlkLTY2ODgtNDA3ZC1iYjk3LWQxY2VjMjcwZWQ3MCJ9.R6nh-bXUFMjRx9wU9bpCIfnix8pldGz7MeVUeeacmAU"
const user_login_Access_Token3="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFVU0VSMDAzNzkiLCJ1c2VybmFtZSI6ImNwOGgxciIsInJvbGUiOiJVU0VSIiwidXNlcl90eXBlIjoiVVNFUiIsImV4cCI6MTY4NDg0MzI0MiwiaWF0IjoxNjg0NzU2ODQyLCJ0b2tlbl9pZCI6IjVmYmY4ZDdjLWMyOWItNGY0YS04M2M0LWQwMTIzMWI3MjFhZSJ9.1joJl3gh0lPswVQW6x8ZmiXpnsAkCmDoDyUMdujWzvM"



// Main test scenario
export default function() {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  



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



const transferDrcByUser = http.post(`${KdaUrl}/drc/application/transfer/create`,  JSON.stringify({
  dta: {
    drcId:  "DRC-Kanpur-Kalyanpur-124-01-7-1",
    farTransferred: 100,
    buyers: [
        "KDAUSER00369"
    ],
    status: "pending"
},
documents: {
    saleDeed: {
        file_type: "pdf",
        file_data: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"
    }
}
}), {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${user_login_Access_Token}`,
  },
});

const transferDrcResponse=JSON.parse(transferDrcByUser.body)
console.log("transferDrcResponse",transferDrcResponse)


}





