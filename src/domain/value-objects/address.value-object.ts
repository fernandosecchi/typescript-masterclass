export class Address {
    constructor(
        private readonly street: string,
        private readonly city: string,
        private readonly state: string,
        private readonly country: string,
        private readonly zipCode: string
    ) {
        this.validate();
    }

    private validate(): void {
        if (!this.street || !this.city || !this.state || !this.country || !this.zipCode) {
            throw new Error('All address fields are required');
        }
    }

    public getStreet(): string {
        return this.street;
    }

    public getCity(): string {
        return this.city;
    }

    public getState(): string {
        return this.state;
    }

    public getCountry(): string {
        return this.country;
    }

    public getZipCode(): string {
        return this.zipCode;
    }

    public getFullAddress(): string {
        return `${this.street}, ${this.city}, ${this.state} ${this.zipCode}, ${this.country}`;
    }

    public equals(other: Address): boolean {
        return this.getFullAddress() === other.getFullAddress();
    }

    public toString(): string {
        return this.getFullAddress();
    }
}
