import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_END_POINT: ENDPOINT,
} = process.env;

const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66937898002409a907b7")
  .setKey(
    "f8957b1e6bedb0142d26332b9e9e4c83495febb0508f75dad83702ad2f65282bf5a7025b4bf9affad1f0bf40dc8fcff1e61310146ccfdb06e7c1ea2c254383e73066eaaee62183e7d6da614ab314446f6213961f0ee6547d9608e41dbd7a63e1fbe4326e27988ea56950559a5513998124e6591b2700aee6bcc4398974ec9305",
  );

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
