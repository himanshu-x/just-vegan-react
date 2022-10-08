
const withBox = (Component) => {
    const ReturnFn = (props) => {
        // console.log('props called')
        // console.log(props);
        return (
            <div className="flex border rounded p-2 shadow-xl">
                <Component {...props}></Component>
                {/* <Component></Component> */}
            </div>
        )
    }

    return ReturnFn
}


export default withBox