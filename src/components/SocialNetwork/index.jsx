export const SocialNetwork = ({link,name, icon}) => {
    return (
        <>
            <a href={link} id={name}>{icon}</a>
        </>
    )
}