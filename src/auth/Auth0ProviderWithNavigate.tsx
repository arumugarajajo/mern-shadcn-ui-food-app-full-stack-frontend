// import { UseCreateMyUser } from "@/api/MyUserApi";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  // Auth token
  const { getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  //custom hooks
  // const { createUser, isError, isLoading, isSuccess } = UseCreateMyUser();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUrl = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  if (!domain || !clientId || !redirectUrl || !audience) {
    throw new Error("unable to initialise auth");
  }
  const onRedirectCallback = async () => {
    const token = await getAccessTokenSilently();
    console.log("Token", token);
    navigate("/auth-callback");
  };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUrl,
        audience,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
