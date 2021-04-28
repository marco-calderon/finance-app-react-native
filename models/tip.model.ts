import { ReactChild, ReactChildren, ReactNode } from "react";

export interface TipModel {
    title: string;
    subtitle?: string;
    buttonText?: string;
    buttonEnabled?: boolean;
    svg?: ReactNode;
}