//////////////////////////////////////////////////////////////
// React Functional Component
//////////////////////////////////////////////////////////////

import { useParams } from "react-router-dom";

function UserProfile()
{
    const { userId } = useParams();
    return (
        <div className='Main'>
            <h1>User Profile {userId}</h1>
        </div>
    );
}

export default UserProfile;