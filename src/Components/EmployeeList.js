import React from 'react';
import Card from './Card';

const EmployeeList=(props)=>
{
    return(
        <div>
            {
                props.users.map((user)=>
                {
                    return <Card user={user}/>
                })
            }
        </div>
    )
}

export default EmployeeList;