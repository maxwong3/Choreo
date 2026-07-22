import * as argon2 from "argon2";

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
}