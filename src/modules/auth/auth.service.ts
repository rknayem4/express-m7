import bcrypt from "bcryptjs";
import { pool } from "../../db/index.js";
import type { ILoginUser } from "./auth.interface.js";
import jwt from "jsonwebtoken";
import config from "../../config/index.js";

const loginUserBD = async (payload: ILoginUser) => {
  // check if the user exist
  // check if the password match
  // check the user status
  // if pass all then generate jwt token

  const { email, password } = payload;

  const user = await pool.query(
    `
    SELECT * FROM users WHERE email=$1
    `,
    [email],
  );
  // console.log(user.rows[0])
  if (user.rowCount === 0) {
    throw new Error("Invalid credentials!!");
  }

  const matchPassword = await bcrypt.compare(password, user.rows[0].password);
  if (!matchPassword) {
    throw new Error("Invalid Email or Password !!");
  }

  // console.log(user.rows[0].is_active)
  if (user.rows[0].is_Active === true) {
    throw new Error("User is suspend!");
  }
  const jwtPayload = {
    id: user.rows[0].id,
    email: user.rows[0].id,
    password: user.rows[0].id,
  };
  delete user.rows[0].password;
  const accessToken = jwt.sign(jwtPayload, config.token_scr, {
    expiresIn: "1d",
  });
  return { accessToken, user: user.rows[0] };
};
export const authService = {
  loginUserBD,
};
