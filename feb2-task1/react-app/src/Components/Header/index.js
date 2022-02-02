
function Header(props){

    const{name,isUserProduct}=props;
    if (isUserProduct===
        'userActive')
        {
            return(
                <h1>The user name is: {name}</h1>
            )
        }
    else if (isUserProduct==='productActive')
    {
        return(
            <h1>The Product name is: {name}</h1>
        )

    }
}

export default Header;