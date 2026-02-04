import img from '../../assets/img-sm.png'
import { IoSettingsOutline } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";



function ProfileSettings() {
    return ( 
        <div className="bg-[] flex justify-center items-center gap-2">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="text-[14px]">
                <p className='font-[600]'>Dr. Jose Simmons</p>
                <p className='text-[#707070]'>General Practitioner</p>
            </div>
            <div className='flex justify-center items-center pl-[10px]'>
                <IoSettingsOutline size={25}/>
                <BiDotsVerticalRounded size={28} />
            </div>
        </div>
     );
}

export default ProfileSettings;