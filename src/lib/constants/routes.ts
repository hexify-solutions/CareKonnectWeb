const routes = {
  home: "/",
  // auth routes
  signup: "/onboarding/signup",
  login: "/onboarding/signin",
  logout: "?useraction=logout",
  passwordChange: "/onboarding/password-change",
  verifyEmail: "/onboarding/verify-email",
  passwordReset: "/onboarding/password-reset",


  // doctors
  doctor: (id: string) => "/doctor/" + id,
  doctorPayment: (queryString: string) =>  "/doctor/payment" + queryString,

  // search
  search: (queryString: string) => `/search?${queryString}`,

  // hospital routes
  hospital: (id: string) => "/hospital/" + id,

  // user routes
  profile: "/user/profile",
  userDashboard: "/user/dashboard",
  userDashboardAppointments: "/user/dashboard/appointments",
  userDashboardServices: "/user/dashboard/services",
  userDashboardPrescription: "/user/dashboard/prescription",
  userDashboardHealthRecords: "/user/dashboard/records",
  userDashboardSupports: "/user/dashboard/supports",
  userDashboardHealthBenefits: "/user/dashboard/healthbenefits",

  // appointment routes
  appointmentDetails: (slug: string) => "/appointment/details/" + slug,
  appointmentById: (id: string) => `/appointments/${id}`

};

export default routes;
