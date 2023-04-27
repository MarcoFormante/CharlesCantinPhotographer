
const SocialLink = (props) => {

    return (

            <a style={{ cursor: "pointer" }}href={props.href}>
                <img src={"https://trueappwork.000webhostapp.com/imgs"+ props.logo} alt={props.alt} />
            </a>

    )
}

export default SocialLink