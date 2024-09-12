import { swrCarsReportsCount } from "../swr/carsReportsCount"

function ReportsCount({nida}) {
    const { data , error, isLoading,mutate } = swrCarsReportsCount()

if(data){
    const filter=data.filter(car=>car.nida==nida)
    if(filter.length>0)
        return filter[0].reports_count

}
}

export default ReportsCount