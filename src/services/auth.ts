import api from "../api";

interface Response {
  token: string;
  user_id: string;
}

export async function signIn(email, password) {
  try {
    const response = await api.post<Response>("/user/login", { email, password });
    return response.data;
  } catch (e) {
    if (e.response.data[0].field === "email") {
      return "email";
    } else {
      return "password";
    }
  }
}
