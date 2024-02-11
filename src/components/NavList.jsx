import {NavLink} from "react-router-dom";

const NavList = () => {

    const buttons = [{
        name: "Buildings", link: "/buildings"
    }, {
        name: "Snow", link: "/Snow"
    }, {
        name: "Food", link: "/food"
    }, {
        name: "ice-cream", link: "/ice-cream"
    }, {
        name: "Holi", link: "holi"
    }, {
        name: "Forest", link: "forest"
    }, {
        name: "Portrait", link: "portrait"
    },];

    return (
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
            {buttons.map(({name, link}) => {
                return (<NavLink to={link} className="mx-6" key={name}>
                    <button type="button"
                            className={({isActive}) => (isActive ?
                                    'text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3'
                                    : 'text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3'
                            )}
                    >
                        {name}
                    </button>
                </NavLink>);
            })}
        </div>
    );
}

export default NavList;