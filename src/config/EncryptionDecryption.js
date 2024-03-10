import CryptoJS from "crypto-js";

const encryptionSecretCode = import.meta.env.VITE_ENCRYPTION_CODE;

export const Decryption = (value) => {
  try {
    return CryptoJS.AES.decrypt(value, encryptionSecretCode).toString(
      CryptoJS.enc.Utf8
    );
  } catch (error) {
    console.error("Decryption Error:", error);
    return null;
  }
};

export const Encryption = (value) => {
  try {
    return CryptoJS.AES.encrypt(
      JSON.stringify(value),
      encryptionSecretCode
    ).toString();
  } catch (error) {
    console.error("Encryption Error:", error);
    return null;
  }
};
