import dotenv from 'dotenv';
import path from "path"
dotenv.config({
  path: path.join(process.cwd(), ".env"),
})

const config = {
  port: process.env.PORT,
  connection_string: process.env.BACKEND_UR as string,
  token_scr: process.env.TOKEN_SECRET as string
}
export default config;