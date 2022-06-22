// export function Title (mainTitle,subTitle) {
export function Title (props:any) {
    return (
        <div>
            <h1 style={{ backgroundColor: 'orange', borderBottom: '5px solid red', textAlign: "center" }}>
            {props.mainTitle}
            {props.subTitle}
            </h1>
        </div>
    )
}