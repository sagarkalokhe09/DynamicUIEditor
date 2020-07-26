


var BASE_ADDRESS = "http://localhost:57079/api/";
export const URL_GET_ROLEMENU = BASE_ADDRESS + "v1/Menu";
export const URL_POST_VALIDATE_USER = BASE_ADDRESS + "v1/User/ValidateUser";
export const URL_GET_LEADS = BASE_ADDRESS + "Leads";
export const URL_GET_LEAD_ARTIFACT = BASE_ADDRESS + "LeadArtifact/GetByLeadId"
export const URL_POST_ADD_USER = BASE_ADDRESS + "v1/User";


export const ACTION_GET_LEAD = "GET_LEAD";
export const ACTION_DISPATCH_GET_LEAD = "DISPATCH_GET_LEAD";
export const ACTION_VALIDATE_USER = "VALIDATE_USER";
export const ACTION_SIGN_IN = "SIGN_IN";
export const ACTION_DETAIL_SELECTED_LEAD = "SELECTED_LEAD";
export const ACTION_LEAD_ARTIFACT = "LEAD_ARTIFACT";
export const ACTION_USER_ROLE_MENU = "USER_ROLE_MENU";
export const ACTION_USER_GET_ROLE_MENU = "USER_GET_ROLE_MENU";
export const ACTION_DISPATCH_ADD_USER = "DISPATCH_ADD_USER";
export const ACTION_DISPATCH_ADD_USER_SUCESSFULLY = "DISPATCH_ADD_USER_SUCESSFULLY";
export const ACTION_DISPATCH_OPEN_TOOLBOX = "DISPATCH_OPEN_TOOLBOX";

export const ROLE = "Role";
export const CLIENTID = "ClientId"
export const LEAD_STATUS_PROSPECT = "PRP"
export const ARTIFACT_TYPE_RECORDING = "REC"
export const ARTIFACT_TYPE_QUOTATION = "Q"
export const ARTIFACT_VISIT_PHOTO = "VP"

export const CONTROL_TEXTBOX = "TextBox"
export const CONTROL_CHECKBOX = "CheckBox"
export const CONTROL_DROPDOWN = "DropDown"
export const CONTROL_RADIO_BUTTON = "Radio Button"
export const CONTROL_TREEVIEW = "TreeView"
export const CONTROL_TABLE = "Table"
export const CONTROL_DATEPICKER = "DatePicker"
export const CONTROL_UPLOAD = "Fileupload"
export const CONTROL_BUTTON = "Button"