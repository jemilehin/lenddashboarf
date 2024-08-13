import { Users } from "../components/dummy/dummydata";

enum CONSTANTS {
    Db_NAME = "temidayo",
    Db_Version = 6,
    Store_Name = "lendsqr",
}

export const openDB : any = () => {
    return new Promise((resolve, reject) => {
        let request = indexedDB.open(CONSTANTS.Db_NAME, CONSTANTS.Db_Version);

        request.onupgradeneeded = (event) => {
            console.log("db upgrade started");
            let db = request.result;
            // db.deleteObjectStore(CONSTANTS.Store_Name)
            // console.log('object store deleted successfully')
            // if (!db.objectStoreNames.contains(CONSTANTS.Store_Name)) {
            const objectStore = db.createObjectStore(CONSTANTS.Store_Name, {
                    keyPath: "id",
                    autoIncrement: true,
                });
            // } else {
                // db.onversionchange = (event) => {
                    console.log('object store created successfully')

                    objectStore.transaction.oncomplete = () => {
                        console.log('transaction started')
                        const userObjectStore = db.transaction(CONSTANTS.Store_Name, 'readwrite').objectStore(CONSTANTS.Store_Name)

                        Users.forEach(user => userObjectStore.add(user))
                        console.log('users add')
                    }
                // };
            // }

            request.onsuccess = (event) => {
                resolve(request.result);
            };

            request.onerror = (event) => {
                reject(request.result);
            };
        };
    });
};

export const getData = () => {
    return new Promise((resolve,reject) => {
        let request = indexedDB.open(CONSTANTS.Db_NAME)
        console.log('requesting data')

        request.onsuccess = () => {
            const db = request.result
            const tx = db.transaction(CONSTANTS.Store_Name, 'readonly')
            const store = tx.objectStore(CONSTANTS.Store_Name)
            const res = store.getAll()
            res.onsuccess = (event) => {
                resolve(res.result)
            }
        }

        request.onerror = (event) => {
            console.log('err--->',event)
            reject(event.target)
        }
    });
};
