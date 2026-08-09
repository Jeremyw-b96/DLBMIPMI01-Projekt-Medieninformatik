import { useState } from "react"; 

function ServiceCard({ title, short, description }) {
    const [isFlipped, setIsFlipped] = useState(false);
    return(
        <div onClick={() => setIsFlipped(!isFlipped)} className="cursor-pointer [perspective:1000px]">
            <div className={`relative h-64 w-full max-w-sm transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}>
                {/** Vorderseite **/}
                <div className="absolute inset-0 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg [backface-visibility:hidden]">
                    <h5 className="mb-3 text-2xl font-semibold text-gray-900">{title}</h5>
                    <p className="text-gray-600">{short}</p>
                    <p className="mt-6 text-sm font-medium text-blue-600">Klicken für Details →</p>
                </div>
                {/** Rückseite **/}
                <div className="absolute inset-0 rounded-2xl border border-blue-200 bg-blue-600 p-6 text-white shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h5 className="mb-3 text-2xl font-semibold">{title}</h5>
                    <p className="text-blue-100">{description}</p>
                    <p className="mt-6 text-sm font-medium text-blue-100">← Zurück</p>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard