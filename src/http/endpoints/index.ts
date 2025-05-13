
const endPoints = {
    login: 'auth/login',
    register: 'auth/register',
    verify: 'auth/verify-account',
    triggerPasswordReset: 'auth/trigger-forgot-password',
    resendVerifyEmail: 'auth/resend-verification',
    changePassword: 'auth/forgot-password',
    userChangePassword: "auth/reset-password",

    // globals
    search: 'global/search',
    getTopSpecialists: 'global/top-specialists',

    // user dashboard and profile 
    stats: '/dashboard/stats',
    vitals: '/vitals',
    createUserVitals: "/vitals",
    getUserVitals: "/vitals/user",
    createEmergencyContact: 'emergency',
    getEmergencyContact: "emergency",
    updateProfile: 'auth/profile',


    // appointments
    createAppointment: 'appointments/book',
    payment: "payment",
    getAppointment: (id: string) => `/appointments/${id}`,
    getUsersAppointments: 'appointments',
    transaction: "transaction",


    // doctor 
    getDoctor: (id: string) => `doctors/${id}`,

    // pharmacies 
    getPharmacy: (id: string) => `pharmacies/${id}`,
    getPharmacyDrugs: () => `inventory`,
    getPharmacyDrug: (params: { pharmacyId: string; drugId: string }) => `inventory/${params.drugId}`,

    // documents 
    uploadDocument: "/documents"

}

export default endPoints;