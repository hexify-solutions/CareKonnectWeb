const endPoints = {
    login: 'auth/login',
    register: 'auth/register',
    verify: 'auth/verify-account',
    triggerPasswordReset: 'auth/trigger-forgot-password',
    resendVerifyEmail: 'auth/resend-verification',
    changePassword: 'auth/forgot-password',

    // globals
    search: 'global/search',


    // appointments
    createAppointment: 'appointments/book',
    getAppointment: (id: string) => `appointments/${id}`,


}

export default endPoints;