import { IEntity } from './i-entity.interface';

export interface IAggregateRoot extends IEntity {
    // Base interface for aggregate roots in our domain
    // This helps identify which entities are aggregate roots
}
