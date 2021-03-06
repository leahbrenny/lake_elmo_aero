const newAppointment = {
  tail: '',
  first: '',
  last: '',
  email: '',
  phone: '',
  appointment_date: '',
  hangar_access: '',
  hangar_num: '',
  additional_serv: '',
  fuel_qty: '0',
  fuel_type: 'None',
  oil_qty: 0,
  oil_type: 'None',
  additional_comm: '',
  service_type: '',
  created_date: '',
  display_date: '',
  email_appt_date: ''
  }

const createAppointmentReducer = (state = newAppointment, action) => {  
  switch (action.type) {
    case 'SET_RESET':
      return newAppointment
    case 'SET_TAIL':
      return {
        ...state,
        tail: action.payload
      }
    case 'SET_FIRST':
      return {
        ...state,
        first: action.payload
      }
    case 'SET_LAST':
      return {
        ...state,
        last: action.payload
      }
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload
      }
    case 'SET_PHONE':
      return {
        ...state,
        phone: action.payload
      }
    case 'SET_APPT_DATE':
      return {
        ...state,
        appointment_date: action.payload
      }
    case 'SET_HANGAR_ACCESS':
      return {
        ...state,
        hangar_access: action.payload
      }
    case 'SET_HANGAR_NUM':
      return {
        ...state,
        hangar_num: action.payload
      }
    case 'SET_ADD_SERV':
      return {
        ...state,
        additional_serv: action.payload
      }
    case 'SET_FUEL_QTY':
      return {
        ...state,
        fuel_qty: action.payload
      }
    case 'SET_FUEL_TYPE':
      return {
        ...state,
        fuel_type: action.payload
      }
    case 'SET_OIL_QTY':
      return {
        ...state,
        oil_qty: action.payload
      }
    case 'SET_OIL_TYPE':
      return {
        ...state,
        oil_type: action.payload
      }
    case 'SET_ADD_COMM':
      return {
        ...state,
        additional_comm: action.payload
      }
    case 'SET_SERVICE_TYPE':
      return {
        ...state,
        service_type: action.payload
      }
    case 'SET_CREATED_DATE':
      return {
        ...state,
        created_date: action.payload
      }
    case 'SET_DISPLAY_DATE':
      return {
        ...state,
        display_date: action.payload
      }
    case 'SET_EMAIL_DATE':
      return {
        ...state,
        email_appt_date: action.payload
      }
    default:
      return state;
    }
}; 

export default createAppointmentReducer;