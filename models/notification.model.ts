import { ReactNode } from "react";

export interface NotificationModel {
    title: string;
    subtitle: string;
    svg?: ReactNode;
}