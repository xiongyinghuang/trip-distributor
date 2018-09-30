import { find } from '@/api/search'

const search = {
    state: {
        destination:'',
        checkInTime,
        departureTime,
        alltime,
        roomNum,
        adults,
        children,
        age:[]
    },
  
    mutations: {
        SET_DESTINATION:(state,destination)=>{
            state.destination = destination
        },
        SET_CHECKINTIME:(state,checkInTime)=>{
            state.checkInTime = checkInTime
        },
        SET_DEPARTURETIME:(state,departureTime)=>{
            state.departureTime = departureTime
        },
        SET_ALLTIME:(state,alltime)=>{
            state.alltime = alltime
        },
        SET_ROOMNUM:(state,roomNum)=>{
            state.roomNum = roomNum
        },
        SET_ADULTS:(state,adults)=>{
            state.adults = adults
        },
        SET_CHILDREN:(state,children)=>{
            state.children = children
        },
        SET_AGE:(state,age)=>{
            state.age = age
        }
    },

    actions:{
        //根据目的地或者酒店搜索酒店
        SearchHotel:({commit},searchInfo)=>{
            return new Promise((resolve, reject)=>{
                find(searchInfo).then(response=>{
                    const data = response.data

                })
            })  
        }
    }
}


export default search
