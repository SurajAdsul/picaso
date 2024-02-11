const Loader = () => {
    let circleCommonClasses = 'h-4 w-4 bg-current   rounded-full bg-blue-400';

    return (<div className="grid place-content-center px-4 py-24">
            <div className='flex'>
                <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
                <div
                    className={`${circleCommonClasses} mr-1 animate-bounce200`}
                ></div>
                <div className={`${circleCommonClasses} animate-bounce400`}></div>
            </div>
        </div>);
};

export default Loader;