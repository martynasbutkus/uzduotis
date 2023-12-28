import './Stripes.css'

const Hero = ({color, title, subtitle}) => {
    return (
        <>
        <div className={color}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
        </>
    )
}

export default Hero