const routes = {
  home: "/",
  // auth routes
  signup: "/onboarding/signup",
  login: "/onboarding/signin",
  passwordChange: "/onboarding/password-change",
  verifyEmail: "/onboarding/verify-email",
  passwordReset: "/onboarding/password-reset",

  // hospital routes
  hospital: (id: string) => "/hospital/" + id,
  doctor: (id: string) => "/doctor/" + id,
  profile: "/user/profile",
  userDashboard: "/user/dashboard",
  userDashboardAppointments: "/user/dashboard/appointments",
  userDashboardServices: "/user/dashboard/services",
  userDashboardPrescription: "/user/dashboard/prescription",
  userDashboardHealthRecords: "/user/dashboard/records",
  userDashboardSupports: "/user/dashboard/supports",

};

export default routes;
