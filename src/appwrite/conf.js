import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

class Service {
  client = new Client();
  database;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createExpense({ name, amount, category, date, description }) {
    try {
      return await this.database.createDocument(
        config.appwriteDataBaseId,
        config.appwriteCollectionId,
        ID.unique(),
        {
          name,
          amount,
          category,
          date,
          description,
        }
      );
    } catch (error) {
      throw error;
      return false;
    }
  }

  async updateExpense(id, { name, amount, category, date, description }) {
    try {
      return await this.database.updateDocument(
        config.appwriteDataBaseId,
        config.appwriteCollectionId,
        id,
        { name, amount, category, date, description }
      );
    } catch (error) {
      throw error;
      return false;
    }
  }

  async deleteExpense(id) {
    try {
      await this.database.deleteDocument(
        config.appwriteDataBaseId,
        config.appwriteCollectionId,
        id
      );
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }

  async getExpense(id) {
    try {
      return await this.database.getDocument(
        config.appwriteDataBaseId,
        config.appwriteCollectionId,
        id
      );
    } catch (error) {
      throw error;
      return false;
    }
  }

  async getExpenses() {
    try {
      return await this.database.listDocuments(
        config.appwriteDataBaseId,
        config.appwriteCollectionId,
      );
    } catch (error) {
      throw error;
      return false;
    }
  }

//   async uploadFile(file) {
//     try {
//       return await this.bucket.createFile(
//         config.appwriteBucketId,
//         ID.unique(),
//         file
//       );
//     } catch (error) {
//       throw error;
//       return false;
//     }
//   }

//   async deleteFile(id) {
//     try {
//       await this.bucket.deleteFile(config.appwriteBucketId, id);
//       return true;
//     } catch (error) {
//       throw error;
//       return false;
//     }
//   }

//   getFilePreview(id) {
//     // console.log(typeof id)
//     return this.bucket.getFilePreview(config.appwriteBucketId, id);
//   }
}

const service = new Service();

export default service;
