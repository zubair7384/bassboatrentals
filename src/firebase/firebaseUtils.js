import 'firebase/compat/auth';
import {
  getDatabase,
  ref,
  get,
  //   update,
  //   set,
  //   push,
  //   remove,
  //   onValue,
  query,
  orderByChild,
  equalTo,
} from 'firebase/database';
// import {getAuth, onAuthStateChanged} from 'firebase/auth';
// import emailjs from 'emailjs-com';
// import moment from 'moment-timezone';

// const database = getDatabase();
export async function getListingByUserID(userId) {
  try {
    const database = getDatabase();
    const listingsRef = ref(database, 'listings');

    // Create a query to filter listings by ownerId using the index
    const listingsQuery = query(
      listingsRef,
      orderByChild('ownerId'),
      equalTo(userId),
    );

    // Fetch the results of the query
    const snapshot = await get(listingsQuery);

    if (snapshot.exists()) {
      const listingsObject = snapshot.val();

      // Convert the object of objects to an array of objects with 'id' property
      const listingsArray = Object.keys(listingsObject).map(key => ({
        id: key,
        ...listingsObject[key],
      }));

      return listingsArray;
    } else {
      console.log('No listings found for the user.');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving listings:', error);
    throw error;
  }
}

export async function getListingByID(id) {
  try {
    const database = getDatabase();
    const listingRef = ref(database, `listings/${id}`);

    // Fetch the specific listing by its ID
    const snapshot = await get(listingRef);

    if (snapshot.exists()) {
      // Directly return the data if it exists
      const listing = snapshot.val();
      return {id, ...listing};
    } else {
      console.log('No data found for the listing with ID:', id);
      return null;
    }
  } catch (error) {
    console.error('Error retrieving listing details:', error);
    throw error;
  }
}

export async function getUserByID(uid) {
  try {
    return new Promise(async (resolve, reject) => {
      const database = getDatabase();
      const usersRef = ref(database, `users/${uid}`);
      try {
        const snapshot = await get(usersRef);
        if (snapshot.exists()) {
          const userDetails = snapshot.val();
          resolve(userDetails);
        } else {
          console.log('No data found for the current user');
          resolve(null);
        }
      } catch (error) {
        console.error('Error retrieving user details:', error);
        reject(error);
      }
    });
  } catch (error) {
    console.error('Error retrieving current user details:', error);
    throw error;
  }
}

export async function getListingLockDatesByID(id) {
  try {
    return new Promise(async (resolve, reject) => {
      const database = getDatabase();
      const listingsRef = ref(database, `listings/${id}/lockDates`);
      console.log('listing res lockDates', listingsRef);
      try {
        const snapshot = await get(listingsRef);
        if (snapshot.exists()) {
          const listingsObject = snapshot.val();
          if (listingsObject) {
            resolve(listingsObject);
          } else {
            console.log('No Lock Dates');
            resolve(null);
          }
        } else {
          console.log('No Lock Dates');
          resolve(null);
        }
      } catch (error) {
        console.error('Error retrieving No Lock Dates details:', error);
        reject(error);
      }
    });
  } catch (error) {
    console.error('Error retrieving No Lock Dates details:', error);
    throw error;
  }
}
