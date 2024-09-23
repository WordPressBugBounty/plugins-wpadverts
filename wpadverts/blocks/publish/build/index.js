(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var s in r)e.o(r,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:r[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};window.wp.i18n;const t=window.wp.blocks;function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function s(e,t,s){return(t=function(e){var t=function(e){if("object"!=r(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var s=t.call(e,"string");if("object"!=r(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==r(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const o=window.React,i=window.wp.element,n=window.wp.blockEditor,a=window.wp.components,l=window.wp.primitives,p=(0,o.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(l.Path,{fillRule:"evenodd",d:"M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z",clipRule:"evenodd"})),u=window.wp.serverSideRender;var c=e.n(u);i.Component,window.wp.compose,i.Component,i.Component;class h extends i.Component{constructor(e){super(e),s(this,"onChangeColor",(e=>{this.props.setAttributes({color:e})})),s(this,"onFormStyleChange",(e=>{this.props.setAttributes({form_style:e})})),s(this,"onSelectPostType",(e=>{this.props.setAttributes({post_type:e,form_scheme:""})})),s(this,"onSelectFormScheme",(e=>{this.props.setAttributes({form_scheme:e})})),s(this,"toggleModeration",(e=>{this.props.setAttributes({moderate:e})})),s(this,"toggleSkipPreview",(e=>{this.props.setAttributes({skip_preview:e})})),s(this,"togglePreselectCategory",(e=>{this.props.setAttributes({preselect_category:e})})),s(this,"onRequiresChange",(e=>{this.props.setAttributes({requires:e})})),s(this,"onRequiresErrorChange",(e=>{this.props.setAttributes({requires_error:e})})),s(this,"onPartialPrimaryButtonChange",(e=>{this.props.setAttributes({primary_button:{...e}})})),s(this,"onPartialSecondaryButtonChange",(e=>{this.props.setAttributes({secondary_button:{...e}})})),s(this,"onPartialFormChange",(e=>{this.props.setAttributes({form:{...e}})})),s(this,"onCustomizeQuery",((e,t)=>{var r={...this.props.attributes.query};0===t.length?delete r[e]:r[e]=t,this.props.setAttributes({query:r})})),s(this,"getQueryParam",(e=>void 0===this.props.attributes.query[e]?"":this.props.attributes.query[e])),s(this,"getAvailablePostTypes",(()=>{var e=[{label:"",value:""}];return this.state.post_types.forEach((function(t,r){e.push({label:t.label,value:t.post_type})})),e})),s(this,"getCurrentPostType",(()=>this.state.post_types[0])),s(this,"getSelectedFormScheme",(e=>{if(""===this.props.attributes.form_scheme)return null;for(var t=this.getCurrentPostType(),r=0;r<t.form_schemes[e].length;r++)if(t.form_schemes[e][r].name===this.props.attributes.form_scheme)return t.form_schemes[e][r];return null})),s(this,"getSelectedFormSchemeData",(e=>{var t=this.getSelectedFormScheme(e);return null===t?[]:t.data})),s(this,"getAvailableSearchForms",(e=>{var t=this.getCurrentPostType();return[{label:"",value:""}].concat(t.form_schemes.publish)})),s(this,"initVisuals",(()=>{const{post_type:e}=this.props.attributes;""!==e&&this.setState({initiated:!0})})),s(this,"resetVisuals",(()=>{this.props.setAttributes({post_type:""}),this.setState({initiated:!1,loading:!0}),this.runApiFetchForms()})),this.state={initiated:!1,post_types:[],loading:!0,show_instructions:!1},this.initVisuals()}componentDidMount(){this.runApiFetchForms()}runApiFetchForms(){wp.apiFetch({path:"wpadverts/v1/classifieds-types"}).then((e=>{this.setState({post_types:e.data,loading:!1,initiated:""!==this.props.attributes.post_type})}))}renderInit(){const{post_type:e,form_scheme:t}=this.props.attributes,{show_instructions:r}=this.state;return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(a.Placeholder,{icon:p,label:"Classifieds Publish",instructions:"Select custom post type and publish form scheme to continue.",isColumnLayout:"true"},!0===this.state.loading?(0,o.createElement)(a.Spinner,null):(0,o.createElement)(o.Fragment,null,(0,o.createElement)(a.SelectControl,{label:"Custom Post Type",labelPosition:"top",value:e,options:this.getAvailablePostTypes(),onChange:this.onSelectPostType,style:{lineHeight:"1rem"}}),""!==e&&(0,o.createElement)(a.SelectControl,{label:"Search Form Scheme",labelPosition:"top",value:t,options:this.getAvailableSearchForms(e),onChange:this.onSelectFormScheme,style:{lineHeight:"1rem"},help:"You can create multiple form schemes using Custom Fields extension."}),(0,o.createElement)("div",null,(0,o.createElement)(a.Button,{variant:"primary",disabled:""===e,onClick:this.initVisuals},"Apply")))))}render(){const{className:e,attributes:t}=this.props,{requires:r,requires_error:s,moderate:i,skip_preview:l,preselect_category:p,preselect_category_type:u,primary_button:h,secondary_button:m,form:d}=t,{show_instructions:y}=this.state;return(0,o.createElement)(o.Fragment,null,!0===this.state.initiated?(0,o.createElement)(o.Fragment,null,(0,o.createElement)(n.InspectorControls,null,(0,o.createElement)(a.PanelBody,{title:"Options"},(0,o.createElement)(a.ToggleControl,{label:"Moderate Ads",checked:i,onChange:this.toggleModeration}),(0,o.createElement)(a.ToggleControl,{label:"Skip Preview",checked:l,onChange:this.toggleSkipPreview}),(0,o.createElement)(a.ToggleControl,{label:"Preselect Category",checked:p,onChange:this.togglePreselectCategory}),(0,o.createElement)("div",{className:"wpa-block-editor-common-tip",style:{display:"flex",alignItems:"center",lineHeight:"18px"}},(0,o.createElement)(a.Icon,{icon:"warning"}),(0,o.createElement)("span",{style:{paddingLeft:"12px"}},"Category preselection requires ",(0,o.createElement)("a",{href:""},"Custom Fields")," extension.")),(0,o.createElement)(a.TextControl,{label:"Capability required to publish",value:r,onChange:this.onRequiresChange,help:"Capability required to see the publish form. By default anyone can see it."}),""!==r&&(0,o.createElement)(a.TextareaControl,{label:"Error Message",help:"Cusom message for users who are not allowed to post ads (leave blank otherwise).",value:s,onChange:this.onRequiresErrorChange}))),(0,o.createElement)(n.BlockControls,null,(0,o.createElement)(a.Toolbar,{controls:[{icon:"controls-repeat",title:"Reset post type and form scheme",onClick:this.resetVisuals}]})),(0,o.createElement)(a.Disabled,null,(0,o.createElement)(c(),{block:"wpadverts/publish",attributes:this.props.attributes}))):(0,o.createElement)(o.Fragment,null,this.renderInit()))}}const m=h,d=JSON.parse('{"name":"wpadverts/publish","textdomain":"wpadverts","apiVersion":1,"title":"Classifieds Publish","icon":"megaphone","category":"wpadverts","example":{},"attributes":{"post_type":{"type":"string","default":""},"form_scheme":{"type":"string","default":""},"requires":{"type":"string","default":""},"requires_error":{"type":"string","default":""},"moderate":{"type":"boolean","default":false},"skip_preview":{"type":"boolean","default":false},"preselect_category":{"type":"boolean","default":false},"preselect_category_type":{"type":"string","default":"list"},"form":{"type":"object","default":{}},"primary_button":{"type":"object","default":{}},"secondary_button":{"type":"object","default":{}}}}');(0,t.registerBlockType)(d,{edit:m,save:({attributes:e})=>null})})();