export default function MyImage(props) {
    // public directory is document root
    let fileName = './' + props.fileName
    let width = props.width + "px"
    return (
        <img width={width} border="1" src={fileName}/>
    )
}