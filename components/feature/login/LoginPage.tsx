"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const login = async () => {
    try {
      setLoading(true);
      let { data, error } = await supabase.auth.signInWithOtp({
        email,
      
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        action="signIn"
        onSubmit={login}
        className="flex flex-col gap-y-4 text-primary-bg-dark"
      >
        <input
          type="email"
          name="email"
          id="email"
          className="rounded-md py-2 px-4"
        />
        <input
          type="password"
          name="password"
          id="password"
          className="rounded-md py-2 px-4"
        />
        <button type="submit" className="rounded-md py-2 px-4 bg-accent-light text-primary-bg-light">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
