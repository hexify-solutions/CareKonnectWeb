
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

    // user dashboard and profile 
    stats: '/dashboard/stats',
    vitals: '/vitals',
    createUserVitals: "/vitals",
    getUserVitals: "/vitals/user",
    createEmergencyContact: 'emergency',
    getEmergencyContact: "emergency",


    // appointments
    createAppointment: 'appointments/book',
    payment: "payment",
    getAppointment: (id: string) => `/appointments/${id}`,
    getUsersAppointments: 'appointments',
    transaction: "transaction",


}

export default endPoints;