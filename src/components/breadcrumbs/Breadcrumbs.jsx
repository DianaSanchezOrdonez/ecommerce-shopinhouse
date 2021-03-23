import {Breadcrumb} from "react-bootstrap";

const Breadcrumbs = ({optionsMenu}) => {
    console.log('optionsMenu', optionsMenu)
    return(
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            {
                optionsMenu.map((option) => {
                    return <Breadcrumb.Item href={option.url} className={option.status ? "option-active" : ""}>{option.name}</Breadcrumb.Item>
                })
            }
        </Breadcrumb>
    )
}
export default Breadcrumbs