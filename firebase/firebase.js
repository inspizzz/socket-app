import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, updateDoc, getDoc, getDocs, deleteDoc, addDoc, query, where } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCzHh8Xs93weNz0yqZlz0RdPXfWg-MDFxQ",
	authDomain: "socket-checking.firebaseapp.com",
	projectId: "socket-checking",
	storageBucket: "socket-checking.firebasestorage.app",
	messagingSenderId: "275839911196",
	appId: "1:275839911196:web:e39734a6c4e5487a3626d9",
	measurementId: "G-TVE6HKDBYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

// CONNECT TO THE LOCAL FIRESTORE EMULATOR
// connectFirestoreEmulator(db, "localhost", 8080);




export async function getUniversities() {
	const documents = await getDocs(collection(db, "universities"))
	return documents.docs.map((document) => {
		return { ...document.data(), id: document.id, type: "universities" }
	})
}

export async function getBuildings({universityId=false}) {

	// get documents from the collection conditionally using the universityID
	let documents;
	console.log(universityId)
	if (universityId) {
		documents = await getDocs(query(collection(db, "buildings"), where("universityId", "==", universityId)));
	} else {
		documents = await getDocs(collection(db, "buildings"));
	}
	console.log(documents.docs)

	return documents.docs.map((document) => {
		return { ...document.data(), id: document.id, type: "buildings" }
	})
}

export async function getRooms({universityId=false, buildingId=false}) {

	// get all different combination of rooms
	let documents;
	if (universityId && buildingId) {
		documents = await getDocs(query(collection(db, "rooms"), where("universityId", "==", universityId), where("buildingId", "==", buildingId)));
	} else if (universityId) {
		documents = await getDocs(query(collection(db, "rooms"), where("universityId", "==", universityId)));
	} else if (buildingId) {
		documents = await getDocs(query(collection(db, "rooms"), where("buildingId", "==", buildingId)));
	} else {
		documents = await getDocs(collection(db, "rooms"));
	}

	return documents.docs.map((document) => {
		return { ...document.data(), id: document.id, type: "rooms" }
	})
}

export async function getSockets({universityId=false, buildingId=false, roomId=false}) {

	// get all differnet combinations of sockets
	let documents;
	if (universityId && buildingId && roomId) {
		documents = await getDocs(query(collection(db, "sockets"), where("universityId", "==", universityId), where("buildingId", "==", buildingId), where("roomId", "==", roomId)));
	} else if (universityId && buildingId) {
		documents = await getDocs(query(collection(db, "sockets"), where("universityId", "==", universityId), where("buildingId", "==", buildingId)));
	} else if (buildingId && roomId) {
		documents = await getDocs(query(collection(db, "sockets"), where("buildingId", "==", buildingId), where("roomId", "==", roomId)));
	} else if (universityId && roomId) {
		documents = await getDocs(query(collection(db, "sockets"), where("universityId", "==", universityId), where("roomId", "==", roomId)));
	} else if (universityId) {
		documents = await getDocs(query(collection(db, "sockets"), where("universityId", "==", universityId)));
	} else if (buildingId) {
		documents = await getDocs(query(collection(db, "sockets"), where("buildingId", "==", buildingId)));
	} else if (roomId) {
		documents = await getDocs(query(collection(db, "sockets"), where("roomId", "==", roomId)));
	} else {
		documents = await getDocs(collection(db, "sockets"));
	}

	return documents.docs.map((document) => {
		return { ...document.data(), id: document.id, type: "sockets" }
	})
}


// ----------------------------------------
export async function getUniversity(university) {
	const uni = await getDoc(doc(db, `universities/${university}`))
	if (!uni.data()) throw Error("University not found")
	return uni.data()
}

export async function getBuilding(building) {
	const data = await getDoc(doc(db, `buildings/${building}`))
	if (!data.data()) throw Error("Building not found")
	return data.data()
}

export async function getRoom(room) {
	const data = await getDoc(doc(db, `rooms/${room}`))
	if (!data.data()) throw Error("Room not found")
	return data.data()
}

export async function getSocket(socket) {
	const data = await getDoc(doc(db, `sockets/${socket}`));
	console.log(data.data())
	if (!data.data()) { throw Error("Socket not found") }
	return data.data()
}


// ----------------------------------------
export async function createSuggestion(text) {
	try {
		const docRef = await addDoc(collection(db, "suggestions"), {
			text: text
		})
		return true
	} catch (e) {
		return false
	}
}

/**
 * This function increments the counter on the sockets document
 * 
 * @param {*} socketId the socket to be incremented
 */
export async function reportSocket(socketId) {

}

export { auth, db }