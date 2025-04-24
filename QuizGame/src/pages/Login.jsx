// src/pages/Login.jsx
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../services/supabase";

function Login() {
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      providers={["google"]}
      redirectTo={window.location.origin}
    />
  );
}

export default Login;
