import React, { useEffect, useState } from "react";
import { signInWithGooglePopup } from "../../config/firebase.utils";
import { Decryption, Encryption } from "../../config/EncryptionDecryption";
import useToken from "../Hooks/UseToken";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import { IoIosLogOut } from "react-icons/io";
import { FaRegSave } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

export const Heading = () => {
  const [decryptedValue, refresh] = useToken();
  async function signInWithGoogle() {
    const response = await signInWithGooglePopup();
    const { email, displayName, photoURL } = response.user;
    const token = Encryption({ email, displayName, photoURL });
    localStorage.setItem("token", token);
    refresh();
  }
  return (
    <div className="bg-white z-50">
      <div className="flex justify-between p-4 max-w-6xl mx-auto">
        <h1 className="head_text">Blogify</h1>
        {decryptedValue?.email ? (
          <Popover className="">
            <PopoverTrigger>
              <div className="h-12 w-12 rounded-full overflow-hidden border-2 shadow-md cursor-pointer border-slate-700">
                <img
                  src={decryptedValue?.photoURL}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader className="font-bold text-orange-600">
                {decryptedValue?.email}
              </PopoverHeader>
              <PopoverBody>
                <VStack
                  divider={<StackDivider borderColor="gray.200" />}
                  spacing={4}
                  align="stretch"
                >
                  <p className="cursor-pointer font-semibold flex gap-2 items-center">
                    Saved Post <FaRegSave size={20} />
                  </p>
                  <p className="cursor-pointer font-semibold flex gap-2 items-center">
                    Recent Read <MdAccessTime size={20} />
                  </p>
                  <button
                    className="flex items-center btn_logout justify-center gap-2"
                    onClick={() => {
                      localStorage.removeItem("token");
                      refresh();
                    }}
                  >
                    Logout <IoIosLogOut size={20} />
                  </button>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : (
          <button
            onClick={signInWithGoogle}
            className="px-4 py-2 rounded-lg bg-orange-500 text-white outline-none"
          >
            Login / Register
          </button>
        )}
      </div>
    </div>
  );
};
