import { IAggregateRoot } from '../interfaces/i-aggregate-root.interface';
import { Address } from '../value-objects/address.value-object';
import { Email } from '../value-objects/email.value-object';
import { PhoneNumber } from '../value-objects/phone-number.value-object';

export class Company implements IAggregateRoot {
    private contacts: Set<string>; // Contact IDs
    private projects: Set<string>; // Project IDs
    public readonly createdAt: Date;
    public readonly updatedAt: Date;

    constructor(
        public readonly id: string,
        private name: string,
        private email: Email,
        private phoneNumber: PhoneNumber,
        private address: Address,
        private taxId: string
    ) {
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.contacts = new Set<string>();
        this.projects = new Set<string>();
        this.validate();
    }

    public getName(): string {
        return this.name;
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

    public getTaxId(): string {
        return this.taxId;
    }

    public addContact(contactId: string): void {
        this.contacts.add(contactId);
        this.updateTimestamp();
    }

    public removeContact(contactId: string): void {
        this.contacts.delete(contactId);
        this.updateTimestamp();
    }

    public addProject(projectId: string): void {
        this.projects.add(projectId);
        this.updateTimestamp();
    }

    public removeProject(projectId: string): void {
        this.projects.delete(projectId);
        this.updateTimestamp();
    }

    public getContacts(): string[] {
        return Array.from(this.contacts);
    }

    public getProjects(): string[] {
        return Array.from(this.projects);
    }

    public hasContact(contactId: string): boolean {
        return this.contacts.has(contactId);
    }

    public hasProject(projectId: string): boolean {
        return this.projects.has(projectId);
    }

    private validate(): void {
        if (!this.name || this.name.trim().length === 0) {
            throw new Error('Company name is required');
        }
        if (!this.taxId || this.taxId.trim().length === 0) {
            throw new Error('Tax ID is required');
        }
    }

    public update(
        name?: string,
        email?: Email,
        phoneNumber?: PhoneNumber,
        address?: Address,
        taxId?: string
    ): void {
        if (name) this.name = name;
        if (email) this.email = email;
        if (phoneNumber) this.phoneNumber = phoneNumber;
        if (address) this.address = address;
        if (taxId) this.taxId = taxId;

        this.validate();
        this.updateTimestamp();
    }

    private updateTimestamp(): void {
        (this.updatedAt as Date) = new Date();
    }
}
