import clientPromise from "./db_collections";

export const getUserCollection = async () => {
    const client = await clientPromise;
    return client.db("learning_quran").collection("users");
};


