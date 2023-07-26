import SQLite from 'react-native-sqlite-storage';
const tableName = "KeepNotes"

const db = SQLite.openDatabase(
  {name: `${tableName}`, location: 'default'},
  () => {},
  error => {
    console.log(error.code);
  },
);

export const createTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS 
      ${tableName} 
        (Title TEXT,Note TEXT,ArchiveData INTEGER,Pindata INTEGER,DeleteData INTEGER);`,
      [],
      (tx, results) => {
        console.log('table created successfully', results);
      },
      error => {
        console.log('error on creating table' + error);
      },
    );
  });
};

export const addNoteSQL = async (
  Title,
  Note,
  ArchiveData,
  Pindata,
  DeleteData,
) => {
  try {
    await db.transaction(async txn => {
      Pindata = Pindata ? 1 : 0;
      ArchiveData = ArchiveData ? 1 : 0;
      DeleteData = DeleteData ? 1 : 0;

      await txn.executeSql(
        `INSERT INTO ${tableName} (Title ,Note ,ArchiveData ,Pindata ,DeleteData) VALUES (?,?,?,?,?)`,
        [Title, Note, ArchiveData, Pindata, DeleteData],
        () => {
          console.log('Inserted');
        },
        error => {
          console.log('Sqlite', error);
        },
      );
    });
  } catch (error) {
    console.log(error.code);
  }
};

const ExecuteQuery = (sql, params = []) =>
  new Promise((resolve, reject) => {
    db.transaction(trans => {
      trans.executeSql(
        sql,
        params,
        results => {
          resolve(results);
        },
        error => {
          reject(error);
        },
      );
    });
  });

const SELECT_DATA = `SELECT * FROM ${tableName};`;
export const getNotesSQL = async () => {
  console.log("Hi in fetch data")
  try {
    const result = await ExecuteQuery(SELECT_DATA);
    console.log("result",result)
    var rows = result?.rows;
    console.log("rows is ", rows);
    let arr = [];
    for (let i = 0; i < rows?.length; i++) {
      var item = rows?.item(i);
      item.Pindata = Boolean(item.Pindata);
      item.ArchiveData = Boolean(item.ArchiveData);
      item.DeleteData = Boolean(item.DeleteData);
      arr.push(item);
    }
    console.log("Notes data in sqlte", arr)
    return arr;
  } catch (error) {
    console.log(error);
  }
};
