const routes = {
    home: '/',
    // auth routes
    signup: "/onboarding/signup",
    login: "/onboarding/signin",
    passwordChange: "/onboarding/password-change",
    verifyEmail: '/onboarding/verify-email',
    passwordReset: '/onboarding/password-reset',

    // hospital routes
    hospital: (id: string) => '/hospital/' + id,
    doctor: (id: string) => '/doctor/' + id,


}

export default routes;
