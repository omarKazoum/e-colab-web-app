
import { Icon } from '@iconify/react';
export default function Chair(props){
    console.log(props.color)
    return (
        <small className=''>
            
      
        <Icon color={props.color} width='60px'  icon="material-symbols:chair-outline" />
        
        </small>
    )
}