import { Button, Flex, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { firebaseApp } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const firebaseDb = getFirestore(firebaseApp);

  const navigate = useNavigate();

  const login = async () => {
    const { user } = await signInWithPopup(firebaseAuth, provider);
    const { refreshToken, providerData } = user;

    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));

    await setDoc(
      doc(firebaseDb, "users", providerData[0].uid),
      providerData[0]
    );

    navigate("/", { replace: true });
  };

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      position={"relative"}
    >
      <Image 
        src='https://media.istockphoto.com/id/1062562640/photo/human-resource-management-and-recruitment-employment-business-concept.jpg?s=612x612&w=0&k=20&c=TCpUhbY0UqgLcj98hgieI8-ablMmsukiYQBdTWGNL1E=' 
        objectFit="cover" width={"full"} height={"full"}
      />
      <Flex
        position={"absolute"}
        width={"100vw"}
        height={"100vh"}
        bg={"blackAlpha.600"}
        top={0}
        left={0}
        justifyContent="center"
        alignItems={"center"}
      >
        <HStack>
          <div className="bg-white rounded-lg">
            <Button
              leftIcon={<FcGoogle fontSize={30} />}
              colorScheme="whiteAlpha"
              shadow={"lg"}
              onClick={() => login()}
            >
              <h1
                className="text-3xl text-purple-900 "
              >
                Signin with Google
              </h1>
            </Button>
          </div>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Login;
