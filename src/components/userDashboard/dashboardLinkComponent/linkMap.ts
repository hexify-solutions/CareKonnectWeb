import routes from "@/lib/constants/routes";
const links = [
  {
    label: "Home Dashboard",
    path: routes.userDashboard,
  },
  {
    label: "Appointments",
    path: routes.userDashboardAppointments,
  },
  {
    label: "My services",
    path: routes.userDashboardServices,
  },
  {
    label: "Prescriptions",
    path: routes.userDashboardPrescription,
  },
  {
    label: "Health Records",
    path: routes.userDashboardHealthRecords,
  },
  {
    label: "Help & Support",
    path: routes.userDashboardSupports,
  },
];

export default links;
