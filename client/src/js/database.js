import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) =>{
  // console.error('putDb not implemented');
  console.log('receive data from jateDB');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const req = store.put({id: 1, value: content})
  const result = await req;
  console.log('data saved to jateDB', result);
};

export const getDb = async () => {
// console.error('getDb not implemented');
  console.log('receive data from jateDB');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const Store = tx.objectStore('jate');
  const req = Store.get(1);
  const result = await req;
  console.log('data saved to jateDB', result);
  return result;
};

initdb();
