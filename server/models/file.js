const { getDB } = require("../config/mongoConnection");

class File {
  static files() {
    const database = getDB();
    return database.collection("raw_data");
  }

  static async getFiles() {
    try {
      const files = await this.files().find().toArray();
      return files;
    } catch (error) {
      throw error;
    }
  }

  static async addFile(data) {
    try {
      await this.files().insertOne(data);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = File;
