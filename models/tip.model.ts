import { ReactNode } from "react";

export interface TipModel {
    id: string;
    title: string;
    subtitle?: string;
    buttonText?: string;
    buttonEnabled?: boolean;
    svg?: ReactNode;
}