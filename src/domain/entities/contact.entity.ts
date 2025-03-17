import { Person } from './person.entity';
import { Email } from '../value-objects/email.value-object';
import { PhoneNumber } from '../value-objects/phone-number.value-object';
import { Address } from '../value-objects/address.value-object';

export enum ContactRole {
    EMPLOYEE = 'EMPLOYEE',
    MANAGER = 'MANAGER',
    DIRECTOR = 'DIRECTOR',
    EXTERNAL = 'EXTERNAL'
}

export class Contact extends Person {
    constructor(
        id: string,
        firstName: string,
        lastName: string,
        email: Email,
        phoneNumber: PhoneNumber,
        address: Address,
        private readonly companyId: string,
        private role: ContactRole,
        private department: string,
        private position: string
    ) {
        super(id, firstName, lastName, email, phoneNumber, address);
        this.validate();
    }

    public validate(): void {
        this.validateCommon();

        if (!this.companyId) {
            throw new Error('Company ID is required');
        }
        if (!this.role) {
            throw new Error('Role is required');
        }
        if (!this.department) {
            throw new Error('Department is required');
        }
        if (!this.position) {
            throw new Error('Position is required');
        }
    }

    public getCompanyId(): string {
        return this.companyId;
    }

    public getRole(): ContactRole {
        return this.role;
    }

    public getDepartment(): string {
        return this.department;
    }

    public getPosition(): string {
        return this.position;
    }

    public updateRole(role: ContactRole): void {
        this.role = role;
        this.updatedAt = new Date();
    }

    public updateDepartment(department: string): void {
        this.department = department;
        this.updatedAt = new Date();
    }

    public updatePosition(position: string): void {
        this.position = position;
        this.updatedAt = new Date();
    }

    public toJSON(): Record<string, any> {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email.toString(),
            phoneNumber: this.phoneNumber.toString(),
            address: this.address.toString(),
            companyId: this.companyId,
            role: this.role,
            department: this.department,
            position: this.position,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}
