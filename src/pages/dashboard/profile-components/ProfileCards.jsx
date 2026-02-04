function ProfileCards({icon:Icon, title, data}) {
    return ( 
        <div className="bg-[] flex justify-start items-center gap-5">
            <Icon size={25}/>
           <div>
             <p>{title}</p>
            <p className="font-[600]">{data}</p>
           </div>
        </div>
     );
}

export default ProfileCards;