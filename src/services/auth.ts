import api from "../api";

interface ResponseSignIn {
  token: string;
  user_id: string;
}

interface ResponseRegister {
  token: string;

  user: {
    id: string;
    email: string;
    username: string;
    tel: string;
  };
}

export async function signIn(email, password) {
  try {
    const response = await api.post<ResponseSignIn>("/user/login", { email, password });
    return response.data;
  } catch (e) {
    if (e.response.data[0].field === "email") {
      return "email";
    } else {
      return "password";
    }
  }
}

export async function register(username, email, password, tel) {
  try {
    const response = await api.post<ResponseRegister>("/user/register", {
      username,
      email,
      password,
      tel,
    });
    return response.data;
  } catch (error) {
    if (error.response.data.erro.constraint === "users_username_unique") {
      return "user";
    }
    if (error.response.data.erro.constraint === "users_email_unique") {
      return "email";
    }
  }
}
