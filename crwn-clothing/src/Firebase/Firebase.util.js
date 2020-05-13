import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyCtJY15q9WUpkUt5NW6Sli6qtlameDRk8E",
    authDomain: "crown-db-5d43c.firebaseapp.com",
    databaseURL: "https://crown-db-5d43c.firebaseio.com",
    projectId: "crown-db-5d43c",
    storageBucket: "crown-db-5d43c.appspot.com",
    messagingSenderId: "226046575291",
    appId: "1:226046575291:web:fcab70ecde5233c91e9f9e",
    measurementId: "G-XQML909L9S"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();


var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)


export const AddCollectionAndDocInDB = async (collectionkey, dataToAdd) => {
    const CollectionRef = firestore.collection(collectionkey)
    console.log(CollectionRef)

    const batch = firestore.batch()
    dataToAdd.forEach(data => {
        const newDocRef = CollectionRef.doc();
        batch.set(newDocRef, data)
    })
    return await batch.commit();
}






export const createUserProfileDocInDB = async (userAuth, AdditionalData) => {
    if (!userAuth) {
        return;
    }
    const userRefUID = firestore.doc(`users/${userAuth.uid}`);
    console.log("uid " + userRefUID)
    const snapShot = await userRefUID.get()
    console.log("snapshot data at util" + snapShot.data())

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const timeStamp = new Date();
        console.log("displayname" + displayName)
        console.log("email" + email)

        try {
            await userRefUID.set({
                email,
                displayName,
                timeStamp,
                ...AdditionalData
            })
        } catch (err) {
            console.log(err.message)
        }
    }

    return userRefUID;

}








