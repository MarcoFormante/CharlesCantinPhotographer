
const SocialLink = (props) => {

    return (

            <a style={{ cursor: "pointer" }}href={props.href}>
                <img src={props.iconImg} alt={props.alt} />
            </a>

    )
}

export default SocialLink