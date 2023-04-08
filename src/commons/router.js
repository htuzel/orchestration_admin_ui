export const DASHBOARD = "/dashboard";
export const CLIENTS = "/clients";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const CLIENT = "/client";
export const LOGOUT = "/logout";

export const protectedRoutes = [DASHBOARD, CLIENTS, CLIENT, LOGOUT];
export const authRoutes = [LOGIN, REGISTER];//
export const publicRoutes = [];