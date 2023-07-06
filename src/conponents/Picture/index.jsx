const Picture = ({ picture, title }) => {
    if (!picture)
        return null;

    return (
        <div>
            <img src={picture} alt={title} className="w-5/6 rounded-md border-2 border-primarySubcontent" />
        </div>
    )
}

export default Picture;