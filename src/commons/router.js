export const DASHBOARD = "/dashboard";
export const MERCHANTS = "/merchants";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const CLIENT = "/client";

export const protectedRoutes = [DASHBOARD, MERCHANTS, CLIENT];
export const authRoutes = [LOGIN, REGISTER];
export const publicRoutes = [];