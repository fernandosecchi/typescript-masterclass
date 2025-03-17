export class PhoneNumber {
    private readonly value: string;

    constructor(phoneNumber: string) {
        this.validate(phoneNumber);
        this.value = phoneNumber;
    }

    private validate(phoneNumber: string): void {
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        if (!phoneRegex.test(phoneNumber)) {
            throw new Error('Invalid phone number format');
        }
    }

    public getValue(): string {
        return this.value;
    }

    public equals(other: PhoneNumber): boolean {
        return this.value === other.value;
    }

    public toString(): string {
        return this.value;
    }

    public getFormattedNumber(): string {
        // Remove all non-digit characters except '+'
        const cleaned = this.value.replace(/[^\d+]/g, '');

        // Format based on whether it's international or not
        if (cleaned.startsWith('+')) {
            // International format
            return cleaned.replace(/(\+\d{2})(\d{3})(\d{3})(\d{4})/, '$1 $2 $3 $4');
        } else {
            // Local format
            return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        }
    }
}
