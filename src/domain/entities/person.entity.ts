import { IEntity } from '../interfaces/i-entity.interface';
import { Email } from '../value-objects/email.value-object';
import { PhoneNumber } from '../value-objects/phone-number.value-object';
import { Address } from '../value-objects/address.value-object';

export abstract class Person implements IEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;

    protected constructor(
        id: string,

        protected firstName: string,
        protected lastName: string,
        protected email: Email,
        protected phoneNumber: PhoneNumber,
        protected address: Address
    ) {
        this.id = id;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.validate();
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public getEmail(): Email {
        return this.email;
    }

    public getPhoneNumber(): PhoneNumber {
        return this.phoneNumber;
    }

    public getAddress(): Address {
        return this.address;
    }

    protected validateCommon(): void {
        if (!this.firstName || this.firstName.trim().length === 0) {
            throw new Error('First name is required');
        }
        if (!this.lastName || this.lastName.trim().length === 0) {
            throw new Error('Last name is required');
        }
    }

    public abstract validate(): void;

    public update(
        firstName?: string,
        lastName?: string,
        email?: Email,
        phoneNumber?: PhoneNumber,
        address?: Address
    ): void {
        if (firstName) this.firstName = firstName;
        if (lastName) this.lastName = lastName;
        if (email) this.email = email;
        if (phoneNumber) this.phoneNumber = phoneNumber;
        if (address) this.address = address;

        this.updatedAt = new Date();
        this.validate();
    }
}
