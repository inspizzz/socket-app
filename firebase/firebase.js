import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, updateDoc, getDoc, getDocs, deleteDoc } from "firebase/firestore";

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
		return {...document.data(), id: document.id}
	})
}

export async function getBuildings() {
	const documents = await getDocs(collection(db, `buildings`))
	return documents.docs.map((document) => {
		return {...document.data(), id: document.id}
	})
}

export async function getRooms() {
	const documents = await getDocs(collection(db, `rooms`))
	return documents.docs.map((document) => {
		return {...document.data(), id: document.id}
	})
}

export async function getSockets() {
	const documents = await getDocs(collection(db, `sockets`))
	return documents.docs.map((document) => {
		return {...document.data(), id: document.id}
	})
}



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
	const data = await getDoc(doc(db,`sockets/${socket}`));
	console.log(data.data())
	if (!data.data()) {throw Error("Socket not found")}
	return data.data()
}


export { auth, db }