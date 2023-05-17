// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 10);
camera.lookAt(10, 0, 0);

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a light to the scene
const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

// Set the background color to light blue
scene.background = new THREE.Color(0xadd8e6);

// Create a building
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const building = new THREE.Mesh(geometry, material);



// Create an educational map
const mapGroup = new THREE.Group();

// Create a func
const createBuilding=(x,y,z,bgColor)=>{ 
    const building= new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: bgColor }));
    building.position.set(x,y,z);
    mapGroup.add(building)
}
// Create additional buildings
const building1=createBuilding(0,1,0,"red")

createBuilding(0,-1,0,"white")
createBuilding(0,3,0,"white")

createBuilding(2,1,0,"white")
createBuilding(2,-1,0,"red")
createBuilding(2,3,0,"red")

createBuilding(4,1,0,"red")
createBuilding(4,-1,0,"white")
createBuilding(4,3,0,"white")

createBuilding(6,1,0,"white")
createBuilding(6,-1,0,"red")
createBuilding(6,3,0,"red")




// Add the educational map to the scene
scene.add(mapGroup);

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Create a button to connect the wallet
// const connectButton = document.createElement("button");
// connectButton.innerText = "Connect Wallet";
// document.body.appendChild(connectButton);

// Create a function to handle wallet connection
const connectWallet = async () => {
  // Check if the user has already connected their wallet
  if (typeof window.ethereum !== "undefined") {
    // Request account access if needed
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    // Update the button text to show the user's address
    connectButton.innerText = accounts[0];
  } else {
    // If the user's wallet is not detected, show an error message
    alert("Please install MetaMask to connect your wallet.");
  }
};

// Add an event listener to the connect button
connectButton.addEventListener("click", connectWallet);











// // Create a function to mint an NFT for the land
// const mintNFT = async (building) => {
//   // Get the building1's mesh data
//   const meshData = building.toJSON();

//   // Convert the mesh data to a string
//   const meshDataString = JSON.stringify(meshData);

//   // Create a metadata object
//   const metadata = {
//     name: "My Land NFT",
//     description: "This is an NFT for my land",
//     image: "https://myimage.com",
//     attributes: [
//       {
//         trait_type: "Name",
//         value: "Building 1"
//       }
//     ],
//     mesh: meshDataString
//   };

//   // Mint the NFT on OpenSea
//   const response = await fetch('https://api.opensea.io/asset/contractAddress/mint/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'X-API-KEY': 'your_api_key'
//     },
//     body: JSON.stringify({
//       metadata
//     })
//   });

//   const data = await response.json();
//   console.log(data);
// }
