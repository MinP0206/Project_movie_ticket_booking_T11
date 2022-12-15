import {
    GET_TICKET_REQUEST, GET_TICKET_SUCCESS, GET_TICKET_FAIL, GET_ALLTICKET_REQUEST, GET_ALLTICKET_SUCCESS, GET_ALLTICKET_FAIL,
  } from './constants/Ticket';
  
  const initialState = {
    loadingTicketList: false,
    errorTicketList: null,
    ticketList: [],

    allTicketList: [],
    loadingAllTicketList: false,
    errorAllTicketList: null,
  }
  
  const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_TICKET_REQUEST: {
        return {
          ...state, loadingTicketList: true, errorTicketList: null
        }
      }
      case GET_TICKET_SUCCESS: {
        return {
          ...state,
          ticketList: action.payload.data,
          loadingTicketList: false
        }
      }
      case GET_TICKET_FAIL: {
        return {
          ...state,
          errorTicketList: action.payload.errorTicketList,
          loadingTicketList: false,
        };
      }

      case GET_ALLTICKET_REQUEST: {
        return {
          ...state, loadingAllTicketList: true, errorAllTicketList: null
        }
      }
      case GET_ALLTICKET_SUCCESS: {
        return {
          ...state,
          allTicketList: action.payload.data,
          loadingAllTicketList: false
        }
      }
      case GET_ALLTICKET_FAIL: {
        return {
          ...state,
          errorAllTicketList: action.payload.errorAllTicketList,
          loadingAllTicketList: false,
        };
      }
  
      default:
        return state;
    }
  }
  export default ticketReducer;