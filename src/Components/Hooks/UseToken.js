import { useState, useEffect } from "react";
import { Decryption } from "../../config/EncryptionDecryption";

const useToken = () => {
  const [token, setToken] = useState(null);
  const [decryptedValue, setDecryptedValue] = useState(null);

  const getTokenFromLocalStorage = () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setDecryptedValue(JSON.parse(Decryption(token)));
    }else{
      setDecryptedValue(null);
    }
  };
  useEffect(() => {
    getTokenFromLocalStorage();
  }, []);
  const refresh = () => {
    getTokenFromLocalStorage();
  };
  return [decryptedValue, refresh];
};

export default useToken;
