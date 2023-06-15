
const BoxesStart = () => {
    const boxTexts = [
        "Jättegod mat! Hit kommer jag igen",
        "6 av 5 stjärnor!",
        "Min mormor tappade hakan!",
        "Min flickvän sa ja, nu äter vi här varje fredag!"
    ];

    return (
        <div className="four-boxes">
            {boxTexts.map((text, index) => (
                <div className="box" key={index}>
                    {text}
                </div>
            ))}
        </div>
    );
};
export default BoxesStart;