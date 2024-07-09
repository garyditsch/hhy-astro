const Logo = () => {
    return (
        <>
            <div className="flex items-center space-x-4">
                <div className="h-16 w-16">
                    <a href="/"><img src="/LogoSquare.png" alt="logo" /></a>
                </div>
                <div>
                    <span className="text-dark">Happier & Healthier You</span>
                </div>
            </div>
        </>
    )
}

export default Logo;