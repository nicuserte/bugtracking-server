import dataStore from 'nedb-promise';

export class NoteStore {
  constructor({ filename, autoload }) {
    this.store = dataStore({ filename, autoload });
  }
  
  async find(props) {
    return this.store.find(props);
  }
  
  async findOne(props) {
    console.log("find one");
    return this.store.findOne(props);
  }
  
  async insert(note) {
    console.log("insert")
    return this.store.insert(note);
  };
  
  async update(props, note) {
    console.log("update")
    return this.store.update(props, note);
  }
  
  async remove(props) {
    console.log("remove")
    return this.store.remove(props);
  }
}

export default new NoteStore({ filename: './db/notes.json', autoload: true });