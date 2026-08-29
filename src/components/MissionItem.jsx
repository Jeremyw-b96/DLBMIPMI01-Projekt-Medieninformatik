function MissionItem({ icon, title, description }) {
    return (
        <div className="inset-0 flex flex-col items-center text-center p-6 bg-white rounded-2xl hover:border hover:border-vektor-muted/40 hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-vektor-accent/40 border-2 border-vektor-primary lg:h-12 lg:w-12 hover:bg-vektor-accent transition-colors duration-200">
                <svg className="w-5 h-5 text-vektor-primary lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    {icon}
                </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-vektor-dark">{title}</h3>
            <p className="text-vektor-navy/80">{description}</p>
        </div>
    );
}

export default MissionItem;