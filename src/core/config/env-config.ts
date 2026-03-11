import dotenv from 'dotenv'
dotenv.config();

export const EnvConfig={
    server:{
        port:Number(process.env.PORT ?? "5001")
    }
}