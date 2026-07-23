import * as argon2 from "argon2";
import jwt, { SignOptions } from "jsonwebtoken";
import dotenv from "dotenv";

interface TokenPayload {
    id: number;
}

interface TokenResponse {
    accessToken: string;
    refreshToken: string;
}

dotenv.config();

export class AuthUtils {
    static async hashPassword(password: string): Promise<string> {
        return await argon2.hash(password);
    }

    static async verifyPassword(
        hashedPassword: string,
        plainPassword: string
    ): Promise<boolean> {
        return await argon2.verify(hashedPassword, plainPassword);
    }

    static generateAccessToken(payload: TokenPayload): string {
        const accessSecret = process.env.ACCESS_TOKEN_SECRET;
        const accessExpires = process.env.JWT_ACCESS_EXPIRES;
        if (!accessSecret) throw new Error("ACCESS_TOKEN_SECRET is missing.");
        if (!accessExpires) throw new Error ("JWT_ACCESS_EXPIRES is missing.");

        return jwt.sign(payload, accessSecret, { expiresIn: accessExpires, } as SignOptions);
    }

    static generateRefreshToken(payload: TokenPayload) : string {
        const refreshSecret = process.env.REFRESH_TOKEN_SECRET;
        const refreshExpires = process.env.JWT_REFRESH_EXPIRES;
        if (!refreshSecret) throw new Error("REFRESH_TOKEN_SECRET is missing.");
        if (!refreshExpires) throw new Error("JWT_REFRESH_EXPIRES is missing.");

        return jwt.sign(payload, refreshSecret, { expiresIn: refreshExpires, } as SignOptions);
    }

    static verifyAccessToken(token: string): TokenPayload | null {
        try {
            const accessSecret = process.env.ACCESS_TOKEN_SECRET;
            if (!accessSecret) throw new Error("ACCESS_TOKEN_SECRET is missing.");
            return jwt.verify(token, accessSecret) as TokenPayload;
        } catch (error) {
            return null;
        }
    }

    static verifyRefreshToken(token: string): TokenPayload | null {
        try {
            const refreshSecret = process.env.REFRESH_TOKEN_SECRET;
            if (!refreshSecret) throw new Error("REFRESH_TOKEN_SECRET is missing.");
            return jwt.verify(token, refreshSecret) as TokenPayload;
        } catch (error) {
            return null;
        }
    }

    static generateTokens(payload: TokenPayload): TokenResponse {
        return {
            accessToken: this.generateAccessToken(payload),
            refreshToken: this.generateRefreshToken(payload),
        };
    }
}