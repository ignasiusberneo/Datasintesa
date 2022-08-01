const File = require("../models/File");

class FileController {
  static async getFiles(req, res, next) {
    try {
      let files = await File.getFiles();
      files.forEach((el) => {
        el.availability = (el.availDur / 900) * 100;
      });
      res.status(200).json(files);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async uploadFile(req, res, next) {
    try {
      let { resultTime, enodebId, cellId, availDur } = req.body;
      const data = {
        resultTime,
        enodebId,
        cellId,
        availDur,
      };
      await File.addFile(data);
      res.status(201).json({
        message: "Upload File Success",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = FileController;
