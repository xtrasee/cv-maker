import "../styles/General.css"

export default function General({ info, setInfo }) {
    const handleInfoChange = (input, value) => {
        const newInfo = { ...info, [input]: value };
        setInfo(newInfo);
    }

    return (
        <form className="general-container">
            <h1>General Information</h1>
            <label>
                Full Name
                <input
                    id="name"
                    value={info.name}
                    autoComplete="name"
                    onChange={(e) => handleInfoChange("name", e.target.value)}
                />
            </label>

            <label>
                Email
                <input
                    id="email"
                    value={info.email}
                    autoComplete="email"
                    onChange={(e) => handleInfoChange("email", e.target.value)}
                />
            </label>

            <label>
                Phone
                <input
                    id="phone"
                    value={info.phone}
                    autoComplete="tel"
                    onChange={(e) => handleInfoChange("phone", e.target.value)}
                />
            </label>
        </form>
    )
}