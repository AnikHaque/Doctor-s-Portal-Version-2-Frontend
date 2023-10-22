export interface Doctor {
    fullName: string;
    email: string;
    phoneNumber: string;
    specialization: {
        name: string;
    };
    qualification: string;
}