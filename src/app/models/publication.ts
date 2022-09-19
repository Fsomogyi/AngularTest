import { PublicationType } from "./publicationtype";

export interface Publication {
    id: number;
    authors: string[];
    type: PublicationType;
    title: string;
    in: string;
    year: number;
    location?: string;
    pages?: string;
    volume?: number;
    issue?: number;
    link?: string;
    file?: string;
}