import {Component} from "rainbowui-core";
import { UIInput } from "rainbowui-core";
import PropTypes from 'prop-types';

export default class Breadcrumb extends UIInput {
   constructor(props) {
        super(props);
    }

    renderInput() {
        return (
            <nav aria-label="breadcrumb" role="navigation">
                <ol class="breadcrumb">
                    {this.renderBreadcrumbItem(this)}
                </ol>
            </nav>
        );
    }
    renderBreadcrumbItem(component) {
         let children = component.props.children;
        if(!$.isArray(children)){
            children = [children];
        }
        if ( children != null) {
            return children.map(function(item){
                return item;
            });
        }
    }
};


/**
 * Breadcrumb component prop types
 */
Breadcrumb.propTypes = $.extend({}, UIInput.propTypes, {

});

/**
 * Get Breadcrumb component default props
 */
Breadcrumb.defaultProps = $.extend({}, UIInput.defaultProps, {
    
});
