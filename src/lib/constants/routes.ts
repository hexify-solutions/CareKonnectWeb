const routes = {
  home: "/",
  // auth routes
  signup: "/onboarding/signup",
  login: "/onboarding/signin",
  logout: "?useraction=logout",
  cart: "/product/cart",
  passwordChange: "/onboarding/password-change",
  verifyEmail: "/onboarding/verify-email",
  passwordReset: "/onboarding/password-reset",

  //pharmacy
  pharmacy: (id: string) => "/pharmacy/" + id,
  findAPharmacy: (id: string) => "/pharmacy/drugsearch/" + id,

  // checkout
  checkout: "/product/cart/checkout",
  checkoutPayment: "/product/cart/checkout/payment",

  // doctors
  doctor: (id: string) => "/doctor/" + id,
  doctorPayment: (queryString: string) => "/doctor/payment" + queryString,

  // search
  search: (queryString: string) => `/search?${queryString}`,

  // hospital routes
  hospital: (id: string) => "/hospital/" + id,

  // user routes
  profile: "/user/profile",
  profileVitals: "/user/profile/vitals",
  userDashboard: "/user/dashboard",
  userDashboardAppointments: "/user/dashboard/appointments",
  userDashboardServices: "/user/dashboard/services",
  userDashboardPrescription: "/user/dashboard/prescription",
  userDashboardPrescriptionDetails: (slug: string) =>
    "/user/dashboard/prescription/" + slug,
  userDashboardHealthRecords: "/user/dashboard/records",
  userDashboardSupports: "/user/dashboard/supports",
  userDashboardHealthBenefits: "/user/dashboard/healthbenefits",

  // appointment routes
  appointmentDetails: (slug: string) => "/appointment/details/" + slug,
  appointmentById: (id: string) => `/appointments/${id}`,
  appointmentMeeting: (meeting: Record<string, string>) =>
    `${process.env.NEXT_PUBLIC_COMMUNICATIONS_URL}/${meeting?.appointmentRef || meeting?.appointmentId}/?appointmentId=${meeting?.appointmentId}`,
}

export default routes
