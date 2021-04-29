export interface CardModel {
    id: string;
    lastDigits: number;
    balance: number;
    type: 'master-card' | 'visa';
}