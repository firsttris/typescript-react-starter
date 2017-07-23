export interface CurrentUser {
    id?: string;
    name: string;
    chipId?: string;
    email: string;
    isAdmin: boolean;
    changed?: boolean;
    exception?: string;
}
