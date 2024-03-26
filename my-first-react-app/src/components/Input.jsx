import General from "./General";

export default function Input({
    info,
    setInfo,
}) {
    return (
        <>
            <div className="input-container">
                <div className="general-container">
                    <General info={info} setInfo={setInfo} />
                </div>
            </div>
        </>
    )
}