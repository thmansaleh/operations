import { useDispatch } from 'react-redux';
import { actions, setReportId } from '../store/features/reports';
import { Button } from 'flowbite-react';

function ShowBtn({id}) {
    const dispatch=useDispatch()
    const show = () => {

        dispatch(setReportId(id))
        dispatch(actions({action:'reportNav',data:'info'}))
  
        dispatch(actions({action:'mapReportModal',data:true}))
        
    };

return <Button  onClick={show}  size='xs' gradientMonochrome="success">عرض</Button>  
}

export default ShowBtn