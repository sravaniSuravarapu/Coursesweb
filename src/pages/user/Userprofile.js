import React from 'react';
import { useParams } from 'react-router-dom';
import Usersiderbar from '../../components/userprofile/Usersiderbar';
import Accountsettings from '../../components/userprofile/Accountsettings';
import Mycourses from '../../components/userprofile/Mycourses';
import Studentprofile from '../../components/userprofile/Studentprofile';

const Userprofile = () => {
    const { activepage } = useParams();
    console.log(activepage); 

    return (
        <>
        <div className='userprofile'>
        <div className='userprofilein '>
        <div className='left '>
           <Usersiderbar activepage={activepage} />
        </div>
        <div className='right'>
           {activepage === "accountsettings" &&<Studentprofile/>}
           {activepage === "mypurchases" && <Mycourses/>}
           {activepage === "studentprofile" && <Studentprofile/>}
        </div>

        </div>
        </div>

        
        </>
    );
}

export default Userprofile;
