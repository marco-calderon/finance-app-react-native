import { ReactNode } from "react";

export interface SettingModel {
    id: string;
    title: string;
    backgroundColor?: string;
    svg?: ReactNode;
}