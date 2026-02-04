function ProfileCards({icon:Icon, title, data}) {
    return ( 
        <div className="bg-[] flex justify-start items-center gap-5">
            <Icon size={20}/>
           <div>
             <p className="text-[14px]">{title}</p>
            <p className="font-[600]">{data}</p>
           </div>
        </div>
     );
}

export default ProfileCards;