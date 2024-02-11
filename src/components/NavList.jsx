import { NavLink } from "react-router-dom";

const NavList = () => {
  const buttons = [
    {
      name: "Food",
      link: "/food",
    },
    {
      name: "Snow",
      link: "/snow",
    },
    {
      name: "Ice-cream",
      link: "/ice-cream",
    },
    {
      name: "Holi",
      link: "/holi",
    },
    {
      name: "Concert",
      link: "/concert",
    },
    {
      name: "Forest",
      link: "/forest",
    },
    {
      name: "Portrait",
      link: "/portrait",
    },
  ];

  return (
    <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
      {buttons.map(({ name, link }) => {
        return (
          <NavLink
            to={link}
            key={name}
            className={({ isActive }) =>
              isActive
                ? "mx-6 text-indigo-700 hover:text-white border border-indigo-600 bg-white hover:bg-indigo-700 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
                : "mx-6 text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
            }
          >
            {name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavList;
