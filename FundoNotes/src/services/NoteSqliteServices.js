import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {name: 'FundoNotes', location: 'default'},
  () => {},
  error => {
    console.log(error.code);
  },
);

export const createTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      'CREATE TABLE IF NOT EXISTS ' +
        'FundoNotes' +
        '(ID TEXTPRIMARY KEY,noteId TEXT ,Title TEXT,Note TEXT,Archive INTEGER,Pinned INTEGER,Remainder TEXT,Trash INTEGER,BackgroundColor TEXT,IsList INTEGER,List TEXT,Flag TEXT);',
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
