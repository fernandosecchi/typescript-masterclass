import { IAggregateRoot } from '../interfaces/i-aggregate-root.interface';

export enum ProjectStatus {
    PLANNED = 'PLANNED',
    IN_PROGRESS = 'IN_PROGRESS',
    ON_HOLD = 'ON_HOLD',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED'
}

export class Project implements IAggregateRoot {
    private team: Set<string>; // Contact IDs
    public readonly createdAt: Date;
    public readonly updatedAt: Date;

    constructor(
        public readonly id: string,
        private name: string,
        private description: string,
        private companyId: string,
        private status: ProjectStatus,
        private startDate: Date,
        private endDate?: Date,
        private budget?: number
    ) {
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.team = new Set<string>();
        this.validate();
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getCompanyId(): string {
        return this.companyId;
    }

    public getStatus(): ProjectStatus {
        return this.status;
    }

    public getStartDate(): Date {
        return this.startDate;
    }

    public getEndDate(): Date | undefined {
        return this.endDate;
    }

    public getBudget(): number | undefined {
        return this.budget;
    }

    public addTeamMember(contactId: string): void {
        this.team.add(contactId);
        this.updateTimestamp();
    }

    public removeTeamMember(contactId: string): void {
        this.team.delete(contactId);
        this.updateTimestamp();
    }

    public getTeamMembers(): string[] {
        return Array.from(this.team);
    }

    public hasTeamMember(contactId: string): boolean {
        return this.team.has(contactId);
    }

    private validate(): void {
        if (!this.name || this.name.trim().length === 0) {
            throw new Error('Project name is required');
        }
        if (!this.companyId) {
            throw new Error('Company ID is required');
        }
        if (!this.status) {
            throw new Error('Project status is required');
        }
        if (!this.startDate) {
            throw new Error('Start date is required');
        }
        if (this.endDate && this.startDate > this.endDate) {
            throw new Error('End date must be after start date');
        }
        if (this.budget !== undefined && this.budget < 0) {
            throw new Error('Budget cannot be negative');
        }
    }

    public update(
        name?: string,
        description?: string,
        status?: ProjectStatus,
        startDate?: Date,
        endDate?: Date,
        budget?: number
    ): void {
        if (name) this.name = name;
        if (description) this.description = description;
        if (status) this.status = status;
        if (startDate) this.startDate = startDate;
        this.endDate = endDate;
        this.budget = budget;

        this.validate();
        this.updateTimestamp();
    }

    private updateTimestamp(): void {
        (this.updatedAt as Date) = new Date();
    }

    public toJSON(): Record<string, any> {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            companyId: this.companyId,
            status: this.status,
            startDate: this.startDate,
            endDate: this.endDate,
            budget: this.budget,
            team: Array.from(this.team),
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}
