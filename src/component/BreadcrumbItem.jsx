import {OnClickEvent, Component, Param} from "rainbowui-core";
import {Util} from 'rainbow-foundation-tools';
import PropTypes from "prop-types";
export default class BreadcrumbItem extends Component {

    render() {
         if(this.props.value==null){
             return(
                  <li class="breadcrumb-item active" aria-current="page">{this.props.title}</li>
             );
        }else{
            return (
                <li class="breadcrumb-item"><a href={this.props.value}>{this.props.title}</a>
                </li>
            );
         }
    }
};

BreadcrumbItem.propTypes = {
    value: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    badgeClass: PropTypes.string,
    disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    visibled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    onClick: PropTypes.func
};

BreadcrumbItem.defaultProps = {
    disabled: false,
    visibled: true,
    badgeClass: 'default'
};
