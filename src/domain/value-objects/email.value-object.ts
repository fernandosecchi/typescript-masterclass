export class Email {
    private readonly value: string;

    constructor(email: string) {
        this.validate(email);
        this.value = email;
    }

    private validate(email: string): void {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error('Invalid email format');
        }
    }

    public getValue(): string {
        return this.value;
    }

    public equals(other: Email): boolean {
        return this.value === other.value;
    }

    public toString(): string {
        return this.value;
    }
}
