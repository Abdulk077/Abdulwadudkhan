
const Project = () => {
    const  PROJECT = "hii";
return (
    <div className="border-b border-nuetral-900 pb-4">
        <h1 className="my-20 text-center text-4xl"></h1>
        <div>
            {PROJECT.map((project,index) => {
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                    <img
                    src={project.image}
                    width={150}
                    height={150}
                    alt={project.title}
                    className="mb-6 rounded"
                    />
                    </div>
                    <div className="w-full max-w-xl lg:w-34">
                        <h6 className="mb-2 font-semibold"> title</h6>
                        <p className="mb-4 text-neutral-500">
                            description
                        </p>
                        <span> tech</span>
                    </div>
                </div>
            })}
        </div>
    </div>
)
}

export default Project;
