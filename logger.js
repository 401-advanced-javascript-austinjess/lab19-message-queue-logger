const Q = require('@nmq/q/client');

const db = new Q('database');
const files = new Q('files');

files.subscribe('save', (payload) => {
  console.log('FILE SAVE', payload);
});

files.subscribe('error', (payload) => {
  console.log('FILE ERROR', payload);
});

console.log(files.subscriptions());

db.subscribe('create', (payload) => {
  console.log('DB CREATE', payload);
});

db.subscribe('read', (payload) => {
  console.log('DB READ', payload);
});

db.subscribe('update', (payload) => {
  console.log('DB UPDATE', payload);
});

db.subscribe('delete', (payload) => {
  console.log('DB DELETE', payload);
});

db.subscribe('error', (payload) => {
  console.log('DB ERROR', payload);
});

console.log(db.subscriptions());
