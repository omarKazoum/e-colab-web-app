
import { Icon } from '@iconify/react';
export default function Chair({status}){
    let colors={
        0:'red',
        1:'green',
        2:'gray'

    }
    return (
        <small className=''>
        <Icon  width='60px'  color={colors[status]} icon='material-symbols:chair-rounded'  />
        </small>
    )
}

