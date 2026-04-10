"use client";

import { useEffect } from "react";
import { supabase } from "../../lib/supabase";

export default function Dashboard() {

  useEffect(() => {
    const handleLogin = async () => {
      const { data } = await supabase.auth.getSession();

      if (data?.session) {
        const token = data.session.access_token;

        // 🔥 Redirect to Streamlit with token
        window.location.href =
          "https://ai-oracle-assistant.streamlit.app/?token=" + token;
      }
    };

    handleLogin();
  }, []);

  return <h2 style={{ textAlign: "center" }}>Logging you in...</h2>;
}