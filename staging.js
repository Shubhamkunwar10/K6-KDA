import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 1, // Virtual usersz
//   duration: '3s', // Test duration
};

// const KdaUrl="https://api-kda-dev.c3ihub.org"
const KdaUrl = "https://api-kda-staging.c3ihub.org"

const device_id="5678-5678-5678-1234"
//for applicants on tdr/application/create

const userRregistrationId="KDAUSER00005";  
const userRregistrationId3="KDAUSER00009"; //488400053404

const userNewPassword="ramdwivedI12="
const loginOtpUser="1234565"

const officerPassword="ramdwivedI12="

// Import the JSON data or paste it here
const jsonData =[{
    "_id": "KDAOFSR00032",
    "value": {
      "name": "Ras Dwivedi",
      "password": "somePassword1=",
      "mobileNumber": "8950650695",
      "email": "rasd.phd+36263326@gmail.com",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwMzIiLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6WyJVU0VSX01BTkFHRVIiLCJURFJfTk9USUNFX01BTkFHRVIiLCJURFJfQVBQTElDQVRJT05fVkVSSUZJRVIiLCJURFJfQVBQTElDQVRJT05fU1VCX1ZFUklGSUVSIiwiRFJDX0lTU1VFUiIsIkRUQV9WRVJJRklFUiIsIkRUQV9BUFBST1ZFUiIsIkRVQV9WRVJJRklFUiIsIkRVQV9BUFBST1ZFUiIsIkRSQ19NQU5BR0VSIiwiRFJDX0NBTkNFTExFUiIsIk5PTUlORUVfTUFOQUdFUiIsIkRPQ1VNRU5UX1ZFUklGSUVSIiwiUFJPSkVDVF9NQU5BR0VSIl0sInVzZXJfdHlwZSI6IktEQV9PRkZJQ0VSIiwiZXhwIjoxNjk0OTYyNjQzLCJpYXQiOjE2OTQ4NzYyNDMsInRva2VuX2lkIjoiOWFkNmEyMmEtZWZhYS00Nzk3LTgyMDItOGMyNjIwMGViMjRhIn0.zBgruW3Gm-KaPDYtpAZ1XPcY7WDKiy0VFc6BlSySIlM",
      "designation": "VC",
      "department": "ALL",
      "zones": [
        1,
        2,
        3,
        4
      ]
    }
  },
  {
    "_id": "KDAOFSR00033",
    "value": {
      "name": "Ras Dwivedi",
      "password": "somePassword1=",
      "mobileNumber": "8950650695",
      "email": "rasd.phd+81025198@gmail.com",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwMzMiLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6WyJURFJfTk9USUNFX01BTkFHRVIiLCJQUk9KRUNUX01BTkFHRVIiXSwidXNlcl90eXBlIjoiS0RBX09GRklDRVIiLCJleHAiOjE2OTQ5NjIyMTksImlhdCI6MTY5NDg3NTgxOSwidG9rZW5faWQiOiIzNGUwNDAyZS03OTA5LTRkOGUtOWJjZC1iNzUzMTQzZDVkMjAifQ.6MT2WU7SAWJjvH8umJWddda-svUIqOlDWaoDWWGfGZc",
      "designation": "DRAFTSMAN",
      "department": "PLANNING",
      "zones": [
        1
      ]
    }
  },
  {
    "_id": "KDAOFSR00034",
    "value": {
      "name": "Ras Dwivedi",
      "password": "somePassword1=",
      "mobileNumber": "8950650695",
      "email": "rasd.phd+70395720@gmail.com",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwMzQiLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6WyJURFJfTk9USUNFX01BTkFHRVIiLCJQUk9KRUNUX01BTkFHRVIiXSwidXNlcl90eXBlIjoiS0RBX09GRklDRVIiLCJleHAiOjE2OTQ5NTQ4NzAsImlhdCI6MTY5NDg2ODQ3MCwidG9rZW5faWQiOiJhNjA1ZjNjZS1mMTcwLTQ5Y2EtODExNC1iZDE5NGQ3MzMzNTEifQ.pHXp5iXGrb11Uh01jDkNgAG6PKqWULm40vQNg-AuTxY",
      "designation": "EXECUTIVE_ENGINEER",
      "department": "PLANNING",
      "zones": [
        1
      ]
    }
  },
  {
    "_id": "KDAOFSR00035",
    "value": {
      "name": "Ras Dwivedi",
      "password": "somePassword1=",
      "mobileNumber": "8950650695",
      "email": "rasd.phd+99739949@gmail.com",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwMzUiLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6WyJURFJfTk9USUNFX01BTkFHRVIiLCJURFJfQVBQTElDQVRJT05fVkVSSUZJRVIiLCJEVUFfVkVSSUZJRVIiLCJEVUFfQVBQUk9WRVIiLCJQUk9KRUNUX01BTkFHRVIiXSwidXNlcl90eXBlIjoiS0RBX09GRklDRVIiLCJleHAiOjE2OTQ5NjI1OTgsImlhdCI6MTY5NDg3NjE5OCwidG9rZW5faWQiOiJlMmZjNGRhNy1hMDc1LTQ0MDgtYTU5MC1iYjBhNGMwYmYwNmQifQ.0AqIdfQNQO-LrqX6LqCTOj8sYcKIo8UbCiexbNZRjHo",
      "designation": "TOWN_PLANNER",
      "department": "PLANNING",
      "zones": [
        1
      ]
    }
  },
  {
    "_id": "KDAOFSR00036",
    "value": {
      "name": "Ras Dwivedi",
      "password": "somePassword1=",
      "mobileNumber": "8950650695",
      "email": "rasd.phd+43329862@gmail.com",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwMzYiLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6WyJURFJfTk9USUNFX01BTkFHRVIiXSwidXNlcl90eXBlIjoiS0RBX09GRklDRVIiLCJleHAiOjE2OTQ5NjIxNTgsImlhdCI6MTY5NDg3NTc1OCwidG9rZW5faWQiOiI4MDM4ZDI5Mi0xMTlkLTRmODAtYmU5OC0wOTgxYzk1NmNlODgifQ.W2emup_LAZKBvsj0cd5xrC0qCULrIkQOL0VGbX9fjPc",
      "designation": "AMEEN",
      "department": "LAND",
      "zones": [
        1
      ]
    }
  },
  {
    "_id": "KDAOFSR00037",
    "value": {
      "name": "Ras Dwivedi",
      "password": "somePassword1=",
      "mobileNumber": "8950650695",
      "email": "rasd.phd+47472840@gmail.com",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwMzciLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6WyJURFJfTk9USUNFX01BTkFHRVIiXSwidXNlcl90eXBlIjoiS0RBX09GRklDRVIiLCJleHAiOjE2OTQ5NjIxODUsImlhdCI6MTY5NDg3NTc4NSwidG9rZW5faWQiOiJkM2YyMWYzZC00Yjk0LTQxMjUtOGMwYS04YWVlNTc3ZDRiNTIifQ.AnP8hRJc3HNfxIn9tfN-n9z7qZCK4jFt-xe1q_a2xe8",
      "designation": "TEHSILDAR",
      "department": "LAND",
      "zones": [
        1
      ]
    }
  },
  {
    "_id": "KDAOFSR00038",
    "value": {
      "name": "Ras Dwivedi",
      "password": "somePassword1=",
      "mobileNumber": "8950650695",
      "email": "rasd.phd+13353785@gmail.com",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwMzgiLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6WyJURFJfTk9USUNFX01BTkFHRVIiXSwidXNlcl90eXBlIjoiS0RBX09GRklDRVIiLCJleHAiOjE2OTQ5NjIyMDEsImlhdCI6MTY5NDg3NTgwMSwidG9rZW5faWQiOiJjZWZjZTY2MC1kYTI3LTQ0MGQtODA1My03ZDlhNDE1NWViMzQifQ.qospU3YiOot44hn--_-MN0452oqD85gjswwZph5rPQA",
      "designation": "OSD",
      "department": "LAND",
      "zones": [
        1
      ]
    }
  },
  {
    "_id": "KDAOFSR00039",
    "value": {
      "name": "Ras Dwivedi",
      "password": "somePassword1=",
      "mobileNumber": "8950650695",
      "email": "rasd.phd+30156571@gmail.com",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwMzkiLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6WyJURFJfTk9USUNFX01BTkFHRVIiXSwidXNlcl90eXBlIjoiS0RBX09GRklDRVIiLCJleHAiOjE2OTQ5NjIyMzQsImlhdCI6MTY5NDg3NTgzNCwidG9rZW5faWQiOiJmNjJhZWU1Yy02ODg2LTQ1NDQtYjIwNy0yMjM1ZjlhYjllMGUifQ.P2rO2OvdW5nHqzFRcWRogRxt3AQJHr4uA8nmp8poTsM",
      "designation": "ASSISTANT_ENGINEER",
      "department": "PLANNING",
      "zones": [
        1
      ]
    }
  },
  {
    "_id": "KDAOFSR00040",
    "value": {
      "name": "Ras Dwivedi",
      "password": "somePassword1=",
      "mobileNumber": "8950650695",
      "email": "rasd.phd+69352256@gmail.com",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwNDAiLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6WyJURFJfTk9USUNFX01BTkFHRVIiXSwidXNlcl90eXBlIjoiS0RBX09GRklDRVIiLCJleHAiOjE2OTQ5NjIyNTIsImlhdCI6MTY5NDg3NTg1MiwidG9rZW5faWQiOiJjZmE4NDdjYS0yNjdmLTRjODgtOWVmZC1hZGMxNTc0MDliOGIifQ.HZXb3jLQOtyKY7XdfCelL6LbcvriVW9B4di_dc8OQgU",
      "designation": "JUNIOR_ENGINEER",
      "department": "PLANNING",
      "zones": [
        1
      ]
    }
  },
  {
    "_id": "KDAOFSR00041",
    "value": {
      "name": "Ras Dwivedi",
      "password": "somePassword1=",
      "mobileNumber": "8950650695",
      "email": "rasd.phd+65985303@gmail.com",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwNDEiLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6WyJURFJfQVBQTElDQVRJT05fVkVSSUZJRVIiLCJEVUFfVkVSSUZJRVIiLCJEVEFfVkVSSUZJRVIiXSwidXNlcl90eXBlIjoiS0RBX09GRklDRVIiLCJleHAiOjE2OTQ5NjIzMjcsImlhdCI6MTY5NDg3NTkyNywidG9rZW5faWQiOiJmMTY5YjNiOC02YzVkLTRmMjctODllOS03YmJhNGZhYWU2YzAifQ.XBRr4xcEsK6SEg7DwoJOCTElQsB6xAx2DDXttJFp6Fk",
      "designation": "L2_LAND",
      "department": "LAND",
      "zones": [
        1
      ]
    }
  },
  {
    "_id": "KDAOFSR00042",
    "value": {
      "name": "Ras Dwivedi",
      "password": "somePassword1=",
      "mobileNumber": "8950650695",
      "email": "rasd.phd+13948365@gmail.com",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwNDIiLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6WyJURFJfQVBQTElDQVRJT05fVkVSSUZJRVIiLCJEVUFfVkVSSUZJRVIiLCJEVEFfVkVSSUZJRVIiLCJEUkNfSVNTVUVSIl0sInVzZXJfdHlwZSI6IktEQV9PRkZJQ0VSIiwiZXhwIjoxNjk0OTYyMzQ2LCJpYXQiOjE2OTQ4NzU5NDYsInRva2VuX2lkIjoiMWQyMjJhMmMtOGFhMi00MWE3LTkxOTctZWEzOTBmZDFlOGQyIn0.4sB8MwOdTHj5afpZpXAuNPkIzbU1YbSSleH8uP6JjTY",
      "designation": "L3_LAND",
      "department": "LAND",
      "zones": [
        1
      ]
    }
  },
  {
    "_id": "KDAOFSR00043",
    "value": {
      "name": "Ras Dwivedi",
      "password": "somePassword1=",
      "mobileNumber": "8950650695",
      "email": "rasd.phd+96635252@gmail.com",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwNDMiLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6WyJURFJfQVBQTElDQVRJT05fVkVSSUZJRVIiLCJEVUFfVkVSSUZJRVIiLCJEVEFfVkVSSUZJRVIiXSwidXNlcl90eXBlIjoiS0RBX09GRklDRVIiLCJleHAiOjE2OTQ5NjI1NjQsImlhdCI6MTY5NDg3NjE2NCwidG9rZW5faWQiOiI2YzM2Yzk4Yi1lYjM0LTQ2M2EtYmU0Mi0yYmJmZjVjOTEwMzIifQ.o_4O3FaFM0PH7hwJK8Er8o-olHTKH8LNE-ENf3KfGgU",
      "designation": "L1",
      "department": "PLANNING",
      "zones": [
        1
      ]
    }
  },
  {
    "_id": "KDAOFSR00044",
    "value": {
      "name": "Ras Dwivedi",
      "password": "somePassword1=",
      "mobileNumber": "8950650695",
      "email": "rasd.phd+74508016@gmail.com",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwNDQiLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6WyJURFJfQVBQTElDQVRJT05fVkVSSUZJRVIiLCJEVUFfVkVSSUZJRVIiLCJEVEFfVkVSSUZJRVIiXSwidXNlcl90eXBlIjoiS0RBX09GRklDRVIiLCJleHAiOjE2OTQ5NjI1ODAsImlhdCI6MTY5NDg3NjE4MCwidG9rZW5faWQiOiJiMWMwODgxZi1jMzIyLTRmZTMtODVjMC0wNzEwNDc0MzYzY2QifQ.ZwrOsMZl7CcvGa0BWTspHZujaNFkl902CM_f-D6-fWA",
      "designation": "L2",
      "department": "PLANNING",
      "zones": [
        1
      ]
    }
  },
  {
    "_id": "KDAOFSR00045",
    "value": {
      "name": "Ras Dwivedi",
      "password": "somePassword1=",
      "mobileNumber": "8950650695",
      "email": "rasd.phd+28237293@gmail.com",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwNDUiLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6WyJURFJfQVBQTElDQVRJT05fVkVSSUZJRVIiLCJEVUFfVkVSSUZJRVIiLCJEVEFfVkVSSUZJRVIiLCJEUkNfSVNTVUVSIl0sInVzZXJfdHlwZSI6IktEQV9PRkZJQ0VSIiwiZXhwIjoxNjk0OTYyNDAwLCJpYXQiOjE2OTQ4NzYwMDAsInRva2VuX2lkIjoiN2YyNzI5OWEtZDQxMy00ZjBjLTljYWMtMTc3MzYwZGY1NmUxIn0.BkBKuU3PvlO7LVMnyYdBBRaepWGQTdlkRrUp0NK91fs",
      "designation": "L3",
      "department": "PLANNING",
      "zones": [
        1
      ]
    }
  },
  {
    "_id": "KDAOFSR00046",
    "value": {
      "name": "Ras Dwivedi",
      "password": "somePassword1=",
      "mobileNumber": "8950650695",
      "email": "rasd.phd+37090213@gmail.com",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwNDYiLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6WyJURFJfTk9USUNFX01BTkFHRVIiLCJURFJfQVBQTElDQVRJT05fVkVSSUZJRVIiLCJURFJfQVBQTElDQVRJT05fQVBQUk9WRVIiLCJEVUFfVkVSSUZJRVIiLCJEVUFfQVBQUk9WRVIiLCJQUk9KRUNUX01BTkFHRVIiLCJURFJfQVBQTElDQVRJT05fQVBQUk9WRVJfQ0hJRUZfVE9XTl9QTEFOTkVSIl0sInVzZXJfdHlwZSI6IktEQV9PRkZJQ0VSIiwiZXhwIjoxNjk0OTYyNDM2LCJpYXQiOjE2OTQ4NzYwMzYsInRva2VuX2lkIjoiYTk3YmUxNzYtYzU3NC00YWMzLWJhYzEtMWU0NDZjNjA4ZjRiIn0.HVzwmeyKSG04kC9UleHpCyvALafvp0lmXJYjZPbPcSU",
      "designation": "CHIEF_TOWN_PLANNER",
      "department": "PLANNING",
      "zones": [
        1
      ]
    }
  },
  {
    "_id": "KDAOFSR00047",
    "value": {
      "name": "Ras Dwivedi",
      "password": "somePassword1=",
      "mobileNumber": "8950650695",
      "email": "rasd.phd+4143921@gmail.com",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwNDciLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6WyJURFJfQVBQTElDQVRJT05fQVBQUk9WRVJfQ0hJRUZfVE9XTl9BTkRfQ09VTlRSWV9QTEFOTkVSIl0sInVzZXJfdHlwZSI6IktEQV9PRkZJQ0VSIiwiZXhwIjoxNjk0OTYyNDU0LCJpYXQiOjE2OTQ4NzYwNTQsInRva2VuX2lkIjoiNmJkNzI3MDEtYjYyNC00M2E4LTg4YjgtZWJiOTFkOTk2NGRmIn0._KN5Uhci-zoVKSO14NsGdmfznU7FKA83fFh0XZyy_Xc",
      "designation": "CHIEF_TOWN_AND_COUNTRY_PLANNER",
      "department": "NONE",
      "zones": [
        1
      ]
    }
  },
  {
    "_id": "KDAOFSR00048",
    "value": {
      "name": "Ras Dwivedi",
      "password": "somePassword1=",
      "mobileNumber": "8950650695",
      "email": "rasd.phd+67275919@gmail.com",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwNDgiLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6WyJURFJfQVBQTElDQVRJT05fQVBQUk9WRVJfQ0hJRUZfRU5HSU5FRVIiXSwidXNlcl90eXBlIjoiS0RBX09GRklDRVIiLCJleHAiOjE2OTQ5NjI0NzIsImlhdCI6MTY5NDg3NjA3MiwidG9rZW5faWQiOiIyNGIwMzJiYy1hMzEyLTRjNjgtOTA5NC0zMjM3ZTcxODY4ZTUifQ.dAjCFxghzEWs7skaTVMjDKvQ3FYx1ycq2Hhg0rIWQtE",
      "designation": "CHIEF_ENGINEER",
      "department": "ALL",
      "zones": [
        1
      ]
    }
  },
  {
    "_id": "KDAOFSR00049",
    "value": {
      "name": "Ras Dwivedi",
      "password": "somePassword1=",
      "mobileNumber": "8950650695",
      "email": "rasd.phd+96658492@gmail.com",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwNDkiLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6WyJURFJfQVBQTElDQVRJT05fQVBQUk9WRVJfRE0iXSwidXNlcl90eXBlIjoiS0RBX09GRklDRVIiLCJleHAiOjE2OTQ5NjI0OTAsImlhdCI6MTY5NDg3NjA5MCwidG9rZW5faWQiOiI3Yzg5MzljNS03YzkwLTQ0MWQtYjNkMC0wZDM1YmI0OGI5ZWMifQ._9SKgEo45z2yxuebD1x7RYek3dcXqtUgwJZietWQI6o",
      "designation": "DM",
      "department": "NONE",
      "zones": [
        1
      ]
    }
  },
  {
    "_id": "KDAOFSR00050",
    "value": {
      "name": "Ras Dwivedi",
      "password": "somePassword1=",
      "mobileNumber": "8950650695",
      "email": "rasd.phd+10410224@gmail.com",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwNTAiLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6WyJVU0VSX01BTkFHRVIiLCJURFJfTk9USUNFX01BTkFHRVIiLCJURFJfQVBQTElDQVRJT05fVkVSSUZJRVIiLCJURFJfQVBQTElDQVRJT05fU1VCX1ZFUklGSUVSIiwiRFJDX0lTU1VFUiIsIkRUQV9WRVJJRklFUiIsIkRUQV9BUFBST1ZFUiIsIkRVQV9WRVJJRklFUiIsIkRVQV9BUFBST1ZFUiIsIkRSQ19NQU5BR0VSIiwiRFJDX0NBTkNFTExFUiIsIk5PTUlORUVfTUFOQUdFUiIsIkRPQ1VNRU5UX1ZFUklGSUVSIiwiUFJPSkVDVF9NQU5BR0VSIl0sInVzZXJfdHlwZSI6IktEQV9PRkZJQ0VSIiwiZXhwIjoxNjk0OTYyNjEzLCJpYXQiOjE2OTQ4NzYyMTMsInRva2VuX2lkIjoiYzI4ODRmZTItNWE0Ny00MmRlLTg2YjQtYWQ5NDFkOWY1ZTE1In0.hHVze2KHqu2kyMFzB1XDxEmu2APxRF5fcaaxNOJosx0",
      "designation": "ADDITIONAL_SECRETARY",
      "department": "ALL",
      "zones": [
        1
      ]
    }
  },
  {
    "_id": "KDAOFSR00051",
    "value": {
      "name": "Ras Dwivedi",
      "password": "somePassword1=",
      "mobileNumber": "8950650695",
      "email": "rasd.phd+2325379@gmail.com",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwNTEiLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6WyJVU0VSX01BTkFHRVIiLCJURFJfTk9USUNFX01BTkFHRVIiLCJURFJfQVBQTElDQVRJT05fVkVSSUZJRVIiLCJURFJfQVBQTElDQVRJT05fU1VCX1ZFUklGSUVSIiwiRFJDX0lTU1VFUiIsIkRUQV9WRVJJRklFUiIsIkRUQV9BUFBST1ZFUiIsIkRVQV9WRVJJRklFUiIsIkRVQV9BUFBST1ZFUiIsIkRSQ19NQU5BR0VSIiwiRFJDX0NBTkNFTExFUiIsIk5PTUlORUVfTUFOQUdFUiIsIkRPQ1VNRU5UX1ZFUklGSUVSIiwiUFJPSkVDVF9NQU5BR0VSIl0sInVzZXJfdHlwZSI6IktEQV9PRkZJQ0VSIiwiZXhwIjoxNjk0OTYyNjI4LCJpYXQiOjE2OTQ4NzYyMjgsInRva2VuX2lkIjoiODY2MmZkMzQtN2E2Ny00MmFkLTgxMzktZDJkNjMzNTE0ZGI4In0.TYqUaRIaQC9CG2gqu1-hWSEeCx054JgR_0batNrBMUY",
      "designation": "SECRETARY",
      "department": "ALL",
      "zones": [
        1
      ]
    }
  },
  {
    "_id": "KDAOFSR00052",
    "value": {
      "name": "Ras Dwivedi",
      "password": "somePassword1=",
      "mobileNumber": "8950650695",
      "email": "rasd.phd+67901196@gmail.com",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwNTIiLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6WyJURFJfQVBQTElDQVRJT05fVkVSSUZJRVIiLCJEVUFfVkVSSUZJRVIiLCJEVEFfVkVSSUZJRVIiXSwidXNlcl90eXBlIjoiS0RBX09GRklDRVIiLCJleHAiOjE2OTQ5NjIzMTIsImlhdCI6MTY5NDg3NTkxMiwidG9rZW5faWQiOiI3YjcwNDdmNi1hYmNkLTRiZDktYWMwOS02OWZkY2M2ZmI0MDkifQ.lR5jA2wLWmju5Wj_4OU7DTYgm-0DCCc35DYWGvTo92s",
      "designation": "L1_LAND",
      "department": "LAND",
      "zones": [
        1
      ]
    }
  },
  {
    "_id": "KDAUSER00005",
    "value": {
      "name": "Ras Dwivedi",
      "soOrWoName": "so",
      "dob": "02/02/1979",
      "gender": "MALE",
      "registrationType": "COMPANY",
      "mobileNumber": "8950650695",
      "email": "rasd.phd@gmail.com",
      "aadhaarNumber": "444999091817",
      "photo": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA",
      "notificationId": "2342432",
      "designation": "KDA_USER",
      "address": {
        "address": "lapata ganj",
        "city": "Mumbai",
        "state": "gumnnaan",
        "pincode": 123123,
        "country": "India"
      },
      "aadhaar": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFVU0VSMDAwMDUiLCJ1c2VybmFtZSI6IlJhcyBEd2l2ZWRpIiwicm9sZSI6IlVTRVIiLCJ1c2VyX3R5cGUiOiJVU0VSIiwiZXhwIjoxNjk0OTYyNTU5LCJpYXQiOjE2OTQ4NzYxNTksInRva2VuX2lkIjoiYTRjM2EzZGMtMGU1Ny00ZmE3LTk0MmItMzZhNzk1NWE2MzcwIn0.O8wJcbN9yAeCrcNrR1Pji1P7q2-dUPM4Y9VOZVjguPM"
    }
  }]

let VC_All_JWT="" 
let DRAFTSMAN_PLANNING_JWT=""
let EXEC_ENG_PLANNING_JWT=""
let TOWN_PLANNER_PLANNING_JWT ="" 
let AMEEN_LAND_JWT ="" 
let TEHSILDAR_LAND_JWT =""
let OSD_LAND_JWT =""
let ASSIST_ENG_PLANNING_JWT =""
let JUNIOR_ENGINEER_PLANNING_JWT =""
let L2_LAND_JWT =""
let L3_LAND_JWT=""
let L1_PLANNING_JWT=""
let L2_PLANNING_JWT=""
let L3_PLANNING_JWT=""
let CHIEF_TOWN_PLANNER_PLANNING_JWT=""
let CHIEF_TOWN_COUNTRY_PLANNER_PLANNING_JWT=""
let CHIEF_ENGN_ALL_JWT =""
let DM_JWT =""
let ADDITIONAL_SECRETARY_ALL_JWT =""
let SECRETERY_ALL_JWT =""
let L1_LAND_JWT=""
let L1_LEGAL_JWT="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIFRPS0VOIiwiaWQiOiJLREFPRlNSMDAwNTQiLCJ1c2VybmFtZSI6ImU4Ync3cSIsInJvbGUiOlsiVERSX0FQUExJQ0FUSU9OX1ZFUklGSUVSIiwiRFVBX1ZFUklGSUVSIiwiRFRBX1ZFUklGSUVSIl0sInVzZXJfdHlwZSI6IktEQV9PRkZJQ0VSIiwiZXhwIjoxNjk0OTgwNzUxLCJpYXQiOjE2OTQ4OTQzNTEsInRva2VuX2lkIjoiYjI1NmNlMTUtNDllMS00OGMzLWFmMjUtNDIzMWMxYWZkOWFkIn0.QkaNedYP-6Aow3jpcZc5zGinz_4eaZ4IPVOsxr-EOm4"
let KDA_USER_JWT =""

// Main test scenario
export default async function() {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

  jsonData.forEach(item => {
    const designation = item.value.designation;
    const jwt = item.value.jwt;

    switch (designation) {
      case "VC":
        VC_All_JWT = jwt;
        break;
      case "DRAFTSMAN":
        DRAFTSMAN_PLANNING_JWT = jwt;
        break;
      case "EXECUTIVE_ENGINEER":
        EXEC_ENG_PLANNING_JWT = jwt;
        break;
      case "TOWN_PLANNER":
        TOWN_PLANNER_PLANNING_JWT = jwt;
        break;
      case "AMEEN":
        AMEEN_LAND_JWT = jwt;
        break;
      case "TEHSILDAR":
        TEHSILDAR_LAND_JWT = jwt;
        break;
      case "OSD":
        OSD_LAND_JWT = jwt;
        break;
      case "ASSISTANT_ENGINEER":
        ASSIST_ENG_PLANNING_JWT = jwt;
        break;
      case "JUNIOR_ENGINEER":
        JUNIOR_ENGINEER_PLANNING_JWT = jwt;
        break;
      case "L2_LAND":
        L2_LAND_JWT = jwt;
        break;
      case "L3_LAND":
        L3_LAND_JWT = jwt;
        break;
      case "L1":
        L1_PLANNING_JWT = jwt;
        break;
      case "L2":
        L2_PLANNING_JWT = jwt;
        break;
      case "L3":
        L3_PLANNING_JWT = jwt;
        break;
      case "CHIEF_TOWN_PLANNER":
        CHIEF_TOWN_PLANNER_PLANNING_JWT = jwt;
        break;
      case "CHIEF_TOWN_AND_COUNTRY_PLANNER":
        CHIEF_TOWN_COUNTRY_PLANNER_PLANNING_JWT = jwt;
        break;
      case "CHIEF_ENGINEER":
        CHIEF_ENGN_ALL_JWT = jwt;
        break;
      case "DM":
        DM_JWT = jwt;
        break;
      case "ADDITIONAL_SECRETARY":
        ADDITIONAL_SECRETARY_ALL_JWT = jwt;
        break;
      case "SECRETARY":
        SECRETERY_ALL_JWT = jwt;
        break;
      case "L1_LAND":
        L1_LAND_JWT = jwt;
      case "KDA_USER":
        KDA_USER_JWT = jwt;
        break;
      default:
        break;
    }
  });

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
        const responseHash=JSON.parse(responseTrxId.body)
        console.log(trxId,"signed with info",responseHash)

    };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

async function performActionWithJWT(jwt, action, data) {
    // Create a new object and copy properties from 'data' into it
    const payload = {
      noticeId: data.noticeId,
      action: action,
      trxId: data.trxId,
      comment: data.comment,
      file: data.file
    };
  
    const response =await http.post(`${KdaUrl}/tdr/notice/act`, JSON.stringify(payload), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
    });
  
    return response;
  }
async function performTDRApplicationActionWithJWT(jwt, action) {
    // Create a new object and copy properties from 'data' into it
    const payload = {
        applicationId: applicationIdByUser,
        action: action,
        comment: "COMMERCIAL",
        file: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"
      };
  
    const response = http.post(`${KdaUrl}/tdr/application/act`, JSON.stringify(payload), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
    });
    const tdrSignTrxId=await JSON.parse(response.body).data.trxId
    console.log(tdrSignTrxId)

  
  signTrxnIdUser(tdrSignTrxId, jwt);
    
      return true;
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

//create new project

// const createnewProjectByDraftsman= http.post(`${KdaUrl}/propertyManager/project/create`, JSON.stringify({
//     name: "IIT-KDA-210",
//     areaType: "DEVELOPED",
//     landUse: "AIRSTRIP",
//     tdrType: "HERITAGE",
//     zoneAndSchemeInfo: [
//         {
//             zone: 1,
//             scheme: "12312"
//         },
//         {
//             zone: 2,
//             scheme: "123"
//         }
//     ]
// }), {
// headers: {
// 'Content-Type': 'application/json',
// 'Authorization': `Bearer ${DRAFTSMAN_PLANNING_JWT}`,
// },
// });
// const fetchTrxIdforNewProject=JSON.parse(createnewProjectByDraftsman.body).data.trxId
// console.log(`Fetch trxid For createProjectByDraftsman`, fetchTrxIdforNewProject)
// signTrxnId(fetchTrxIdforNewProject,DRAFTSMAN_PLANNING_JWT)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  


//     const createProjectByDraftsman= http.post(`${KdaUrl}/propertyManager/project/act`, JSON.stringify({
//             projectId: "PROJ00000003",
//             action: "CREATE",
//             comment: "COMMERCIAL"
//     }), {
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${DRAFTSMAN_PLANNING_JWT}`,
//     },
//     });
//     const fetchTrxId=JSON.parse(createProjectByDraftsman.body).data.trxId
//     console.log(`Fetch trxid For createProjectByDraftsman`, fetchTrxId)
// signTrxnId(fetchTrxIdforNewProject,DRAFTSMAN_PLANNING_JWT)

  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

     // Make a POST request to /tdr/notice/create endpoint to creates the notice 

//      const adminCreateTdrNotice = http.post(`${KdaUrl}/tdr/notice/create`, JSON.stringify({
//       notice: {
//           locationInfo: {
//             khasraOrPlotNo: "2526",
//             scheme: "ASHIYANA",
//             village: "Kalyanpur",
//             tehsil: "Kanpur",
//             zone: 1,
//             district: "Kanpur"
//           },
//           propertyInfo: {
//               masterPlan: "0x1234567890123456789012345678901234567890123456789012345678901234",
//               roadWidth: 20,
//               landUse: "RESERVED_FOREST_ZOO"
//           },
//           constructionDetails: {
//               landArea: 3200,
//               buildUpArea: 3000,
//               carpetArea: 2800,
//               numFloors: 4
//           },
//           tdrInfo: {
//               areaAffected: 1000,
//               circleRate: 2000,
//               farProposed: 200,
//               tdrType: "AMENITY"
//           },
//           owners: [
//               {
//                   name: "shubham",
//                   soWo: "S S kunwa",
//                   age: "24",
//                   phone: "07310747066",
//                   ownerAddress: "dehradun",
//                   email: "shubhamkunwar.evilsk@gmail.com"
//               }
//           ],
//           status: "PENDING",
//           propertyId: "1-ASHIYANA-2526"
//       },
//       documents: {
//           order: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"
//       }
//   }
//   ), {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${VC_All_JWT}`,
//           },
//         });

//       // Log the response status code, body, and headers
//       // console.log(`Create notice by admin status code: ${adminCreateTdrNotice.status}`);
//       console.log(`Create notice by admin response body: ${adminCreateTdrNotice.body}`);

//       //console -> receives the transaction and notice id

//       const dataAfterNoticeCreation=JSON.parse(adminCreateTdrNotice.body)

//       const trxIdofNoticeCreation=dataAfterNoticeCreation.data.trxId
//       const trxIdofNoticeCreation=dataAfterNoticeCreation.data.trxId
      const noticeIdofNoticeCreation="NOTICE-1-ASHIYANA-2526-8"
//       const noticeIdofNoticeCreation=dataAfterNoticeCreation.data.noticeId

//     //   console.log(trxIdofNoticeCreation,noticeIdofNoticeCreation)

//       signTrxnId(trxIdofNoticeCreation,VC_All_JWT)
//       console.log("Notice Created")

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

//post request to  tdr/application/create  to create A TDR application


// const createTdrApplication= http.post(`${KdaUrl}/tdr/application/create`, JSON.stringify({
//     tdrApplication:{
//         timeStamp: "1677061679",
//         place: "Mumbai",
//         circleRate: 2,
//         scheme:"Kalyanpur",
//         applicants: [
//             {
//               userId: userRregistrationId
//             } ,
//             {
//               userId: userRregistrationId3
//             } ,
//         ],
//         status: "pending",
//         noticeId: noticeIdofNoticeCreation
       
//     },
//     documents:{
//        aadhaar :"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA",
//        consentLetter: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA",
//       mutationDocument: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA",
//       affidavit:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA",
//       areaStatement:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"
//     }
// }), {
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${KDA_USER_JWT}`,
//   },
// });


//    // Log the response status code, body, and headers
//    console.log(`Create application by User status code: ${createTdrApplication.status}`);
//    console.log(`Create application by User response body: ${createTdrApplication.body}`);

//    const trxIdforApplicationCreated=JSON.parse(createTdrApplication.body)
//    const TrxIdApplicationCreated=trxIdforApplicationCreated.data
//   console.log("createTdrApplication trxId", trxIdforApplicationCreated.data.trxId)


//   signTrxnIdUser(trxIdforApplicationCreated.data.trxId,KDA_USER_JWT)
//   const applicationIdByUser=TrxIdApplicationCreated.applicationId
  const applicationIdByUser="KDATA0000020";

//   console.log("Tdr Application Created by user",applicationIdByUser)



  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

const dataCreateNoticeAmeen = {
    noticeId: noticeIdofNoticeCreation,
    comment: "COMMERCIAL",
    file: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"
  };

  const actCreateNoticeResponse =await performActionWithJWT(AMEEN_LAND_JWT, "CREATE", dataCreateNoticeAmeen);

  const tdrSignTrxId2 = JSON.parse(actCreateNoticeResponse.body).data.trxId;

  signTrxnIdUser(tdrSignTrxId2, AMEEN_LAND_JWT);
  console.log("data created by Ameen ")

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

const dataVerifyNoticeTehsildar = {
    noticeId: noticeIdofNoticeCreation,
    comment: "COMMERCIAL",
    file: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"
  };

  const dataVerifyNoticeTehsildarResponse =await performActionWithJWT(TEHSILDAR_LAND_JWT, "VERIFY", dataVerifyNoticeTehsildar);

  const tdrSignTrxId3 = JSON.parse(dataVerifyNoticeTehsildarResponse.body).data.trxId;

  signTrxnIdUser(tdrSignTrxId3, TEHSILDAR_LAND_JWT);
  console.log("data verify by Tehsildar ")

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
const dataApproveNoticeOSD = {
    noticeId: noticeIdofNoticeCreation,
    comment: "COMMERCIAL",
    file: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"
  };

  const dataApproveNoticeOSDResponse =await performActionWithJWT(OSD_LAND_JWT, "APPROVE", dataApproveNoticeOSD);

  const tdrSignTrxId4 = JSON.parse(dataApproveNoticeOSDResponse.body).data.trxId;

  // Assuming you have a function called signTrxnIdUser
  signTrxnIdUser(tdrSignTrxId4, OSD_LAND_JWT);
  console.log("data Approved by Osd land")


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
const dataVerifyNoticeDraftsman = {
    noticeId: noticeIdofNoticeCreation,
    comment: "COMMERCIAL",
    file: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"
  };

  const dataVerifyNoticeDraftsmanResponse =await performActionWithJWT(DRAFTSMAN_PLANNING_JWT, "VERIFY", dataVerifyNoticeDraftsman);

  const tdrSignTrxId5 = JSON.parse(dataVerifyNoticeDraftsmanResponse.body).data.trxId;

  // Assuming you have a function called signTrxnIdUser
  signTrxnIdUser(tdrSignTrxId5, DRAFTSMAN_PLANNING_JWT);
  console.log("data verified by Draftsman")

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
const dataVerifyNoticeJuniorEng = {
    noticeId: noticeIdofNoticeCreation,
    comment: "COMMERCIAL",
    file: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"
  };

  const dataVerifyNoticeJuniorEngResponse =await performActionWithJWT(JUNIOR_ENGINEER_PLANNING_JWT, "VERIFY", dataVerifyNoticeJuniorEng);

  const tdrSignTrxId7 = JSON.parse(dataVerifyNoticeJuniorEngResponse.body).data.trxId;

  // Assuming you have a function called signTrxnIdUser
  signTrxnIdUser(tdrSignTrxId7, JUNIOR_ENGINEER_PLANNING_JWT);

  console.log("data verified by Junjor eng")


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
const dataVerifyNoticeAssistantEng = {
    noticeId: noticeIdofNoticeCreation,
    comment: "COMMERCIAL",
    file: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"
  };

  const dataVerifyNoticeAssistantEngResponse =await performActionWithJWT(ASSIST_ENG_PLANNING_JWT, "VERIFY", dataVerifyNoticeAssistantEng);

  const tdrSignTrxId6 = JSON.parse(dataVerifyNoticeAssistantEngResponse.body).data.trxId;

  // Assuming you have a function called signTrxnIdUser
  signTrxnIdUser(tdrSignTrxId6, ASSIST_ENG_PLANNING_JWT);
  console.log("data verified by Assit Eng")



  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

  
  const dataApproveNoticeTownPlanner = {
    noticeId: noticeIdofNoticeCreation,
    comment: "COMMERCIAL",
    file: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"
  };

  const dataApproveNoticeTownPlannerResponse =await performActionWithJWT(TOWN_PLANNER_PLANNING_JWT, "APPROVE", dataApproveNoticeTownPlanner);

  const tdrSignTrxId8 = JSON.parse(dataApproveNoticeTownPlannerResponse.body).data.trxId;

  // Assuming you have a function called signTrxnIdUser
  signTrxnIdUser(tdrSignTrxId8, TOWN_PLANNER_PLANNING_JWT);
  console.log("data approved by TownPlanner")

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  


  const dataVerifyL1LandResponse =await performTDRApplicationActionWithJWT(L1_LAND_JWT, "VERIFY");
console.log(dataVerifyL1LandResponse)

  const dataForwardL2LandResponse =await performTDRApplicationActionWithJWT(L2_LAND_JWT, "FORWARD");
console.log(dataForwardL2LandResponse)

  const dataForwardL3LandResponse =await performTDRApplicationActionWithJWT(L3_LAND_JWT, "FORWARD");
console.log(dataForwardL3LandResponse)

  const dataVerifyL1PlanningResponse =await performTDRApplicationActionWithJWT(L1_PLANNING_JWT, "VERIFY");
console.log(dataVerifyL1PlanningResponse)

  const dataForwardL2PlanningResponse =await performTDRApplicationActionWithJWT(L2_PLANNING_JWT, "FORWARD");
console.log(dataForwardL2PlanningResponse)

  const dataForwardL3PlanningResponse =await performTDRApplicationActionWithJWT(L3_PLANNING_JWT, "FORWARD");
console.log(dataForwardL3PlanningResponse)

console.log("TOWN_PLANNER_PLANNING_JWT")
  const dataForwardTownPlannerresonse =await performTDRApplicationActionWithJWT(TOWN_PLANNER_PLANNING_JWT, "FORWARD");
console.log(dataForwardTownPlannerresonse)

  const dataRecommendCheifTownPlannerResponse =await performTDRApplicationActionWithJWT(CHIEF_TOWN_PLANNER_PLANNING_JWT, "RECOMMEND");
console.log(dataRecommendCheifTownPlannerResponse)

  const dataRecommendCheifTownCountryPlannerResponse =await performTDRApplicationActionWithJWT(CHIEF_TOWN_COUNTRY_PLANNER_PLANNING_JWT, "RECOMMEND");
console.log(dataRecommendCheifTownCountryPlannerResponse)

  const dataRecommendCheifEnginnerResponse =await performTDRApplicationActionWithJWT(CHIEF_ENGN_ALL_JWT, "RECOMMEND");
console.log(dataRecommendCheifEnginnerResponse)

  const dataRecommendDMResponse =await performTDRApplicationActionWithJWT(DM_JWT, "RECOMMEND");
console.log(dataRecommendDMResponse)

  const dataForwardAdditionalSecreteryResponse =await performTDRApplicationActionWithJWT(ADDITIONAL_SECRETARY_ALL_JWT, "FORWARD");
console.log(dataForwardAdditionalSecreteryResponse)

  const dataForwardSecreteryResponse =await performTDRApplicationActionWithJWT(SECRETERY_ALL_JWT, "FORWARD");
console.log(dataForwardSecreteryResponse)

  const dataIssueByVCResponse =await performTDRApplicationActionWithJWT(VC_All_JWT, "ISSUE");
console.log(dataIssueByVCResponse)


//   const dataVerifyByL1LegalResponse =await performTDRApplicationActionWithJWT(L1_LEGAL_JWT, "VERIFY");
// console.log(dataVerifyByL1LegalResponse)


///////////////////////////////////////////////////////////////////////////////////////////////////////

//ervify docs
const verifyDocsBeforeVerify=http.post( `${KdaUrl}/tdr/application/documents/verify`,JSON.stringify({
  applicationId: applicationIdByUser
}), {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${VC_All_JWT}`,
  },} )
  const verifieddocs=await JSON.parse(verifyDocsBeforeVerify.body)
  console.log("docs verified",verifieddocs)
  signTrxnId(verifieddocs.trxId,VC_All_JWT)




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

sleep(60)

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
      'Authorization': `Bearer ${KDA_USER_JWT}`,
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
//     'Authorization': `Bearer ${KDA_USER_JWT}`,
//   },
// });

// const transferDrcResponse=JSON.parse(transferDrcByUser.body)
// console.log("transferDrcResponse",transferDrcResponse.data)
// signTrxnIdUser(transferDrcResponse.data.trxId,KDA_USER_JWT)


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
      'Authorization': `Bearer ${KDA_USER_JWT}`,
    },
  });

  console.log("create utilization appl",createUtilization)
  const AppIdDUA=JSON.parse(createUtilization.body)
  console.log("daua",AppIdDUA)
  const duaSignTrxId=JSON.parse(createUtilization.body).data.trxId


  const utilisationId=AppIdDUA.data.applicationId

  signTrxnIdUser(duaSignTrxId,KDA_USER_JWT)


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
//     'Authorization': `Bearer ${KDA_USER_JWT}`,
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

signUtilization(utilisationId,KDA_USER_JWT)
// signUtilization(utilisationId,KDA_USER_JWT2)



}





